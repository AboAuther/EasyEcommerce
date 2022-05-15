/* eslint-disable no-console */
// eslint-disable-next-line filenames/match-exported
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { Button, Col, Row, Table, Modal, Input } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@/constants';
import './layout.less';

const TableList = () => {
  const [map, setMap] = useState({});
  const { confirm } = Modal;
  useEffect(() => {
    getSource();
  }, []);
  const handleInput = e => {
    console.log(e.target.value);
  };
  const showConfirm = ordernum => {
    confirm({
      title: '请确认订单号，确定发货吗？',
      icon: <ExclamationCircleOutlined />,
      content: (
        <div>
          <div>订单号：{ordernum}</div>
          <Input
            placeholder="请输入发货编码"
            onChange={handleInput}
            style={{ margin: '15px 0 ' }}
          />
        </div>
      ),
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
      okText: '确认发货',
      cancelText: '取消',
    });
  };
  const getSource = async () => {
    await axios
      .get(
        `${DOMAIN}/seller/getOrders?userID=${localStorage.getItem('userId')}`,
      )
      .then(res => {
        if (res.data.entity.success) {
          const arr = res.data.entity.data;
          const result = {};
          arr.map((item: { orderId: string | number }) => {
            if (!result[item.orderId]) {
              result[item.orderId] = [item];
            } else {
              const tar = result[item.orderId];
              tar.push(item);
              result[item.orderId] = tar;
            }
          });
          setMap(result);
        }
      });
  };
  const title = ordernum => {
    return (
      <>
        <Row className="t_header">
          <Col span={6} className="ordernum">
            订单号: {ordernum}
          </Col>
          <Col span={12} offset={6}>
            <Button type="text" onClick={() => showConfirm(ordernum)}>
              发货
            </Button>
          </Col>
        </Row>
      </>
    );
  };
  return (
    <div className="real-content">
      {Object.keys(map).map((item, index) => (
        <div key={index}>
          <Table
            dataSource={map[item]}
            rowKey={record => record.ID}
            pagination={false}
            className="basic-table"
            title={key => title(item, index, key)}>
            <Table.Column
              title="图片"
              dataIndex="productImg"
              align="center"
              width={100}
              render={text => (
                <img
                  className="imgs_style"
                  src={text}
                  alt={text}
                  width={100}
                  height={100}
                />
              )}
            />
            <Table.Column
              title="描述"
              dataIndex="description"
              align="center"
              width={100}
            />
            <Table.Column
              title="售价"
              dataIndex="productPrice"
              align="center"
              width={50}
            />
            <Table.Column
              title="购买数量"
              dataIndex="productNum"
              align="center"
              width={50}
            />
            <Table.Column
              title="收获地址"
              dataIndex="userAddress"
              align="center"
              width={100}
            />
          </Table>
        </div>
      ))}
    </div>
  );
};

export default TableList;
