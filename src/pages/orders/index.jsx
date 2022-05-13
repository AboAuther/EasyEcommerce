/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable react/no-array-index-key */
/* eslint-disable array-callback-return */
import {
  Table,
  Typography,
  Row,
  Col,
  Popconfirm,
  Button,
  message,
  Popover,
} from 'antd';
import { useEffect, useState } from 'react';
import { QuestionCircleOutlined, RedoOutlined } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';
import axios from 'axios';
import { useModel } from '@modern-js/runtime/model';
import OrderDrawer from '../orderMessage/BuyDrawer';
import HeadSearch from '../home/components/headSearch';
import './index.less';
import { columns } from './data';
import Evalution from './evaluation';
import { DOMAIN } from '@/constants';
import stateModel from '@/store/store';

const Orders = () => {
  const [visible, setVisible] = useState(false);
  const [index1, setIndex1] = useState(0);
  const [evaVisible, setEvaVisible] = useState(false); // 评价弹窗
  const [modalText, setModalText] = useState('');
  const [state, action] = useModel(stateModel);
  const [map, setMap] = useState({});
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    await axios
      .get(`${DOMAIN}/order/getOrder?userID=${state.userID}`)
      .then(res => {
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
      });
  };
  const openDialog = (id: number) => {
    setIndex1(id);
    setVisible(true);
  };
  const closeDialog = () => {
    setVisible(false);
  };
  const handleOk = () => {
    getData();
    setEvaVisible(false);
  };
  const handleCancel = () => {
    setEvaVisible(false);
  };
  const handleEva = (record: any) => {
    setEvaVisible(true);
    setModalText(record);
  };

  const title = (ordernum: number) => {
    return (
      <>
        <Row className="t_header">
          <Col span={6} className="ordernum">
            订单号：{ordernum}
          </Col>
          <Col span={12} offset={6}>
            <Button type="text" onClick={() => openDialog(ordernum)}>
              详情
            </Button>
            <Popconfirm
              title="你确定要删除这条数据？"
              icon={<QuestionCircleOutlined />}
              onConfirm={async () => {
                await axios({
                  method: 'post',
                  url: `${DOMAIN}/order/deleteOrder?order_id=${ordernum}`,
                }).then(res => {
                  if (res.data.entity.success) {
                    message.success('订单删除成功！');
                    getData();
                  }
                });
              }}
              okText="是"
              cancelText="否">
              <Button type="text">删除</Button>
            </Popconfirm>
          </Col>
        </Row>
        <OrderDrawer
          visible={visible}
          onClose={closeDialog}
          shoppingCatsList={map[index1]}
          targetItem={ordernum}
        />
      </>
    );
  };
  return (
    <div className="content">
      <div className="orderHead">
        <HeadSearch currentIndex={'2'} isDisplay={true} />
      </div>
      <div className="orderContent">
        <div className="common_width dm_MyOrder">
          <Row className="table_title">
            <Typography.Title level={4}>我的订单</Typography.Title>
            <div>
              （当前共有 <i>{Object.keys(map).length}</i> 笔订单）
            </div>
          </Row>
          {/* 表头 */}
          <Table
            columns={columns}
            dataSource={[]}
            pagination={false}
            bordered={true}
            size="middle"
            className="table_header"
          />
          {Object.keys(map).map((item, index) => (
            <div style={{ marginBottom: '20px' }} key={index}>
              <Table
                dataSource={map[item]}
                rowKey={record => record.ID}
                pagination={false}
                bordered={true}
                showHeader={false}
                title={key => title(item, index, key)}
                size="middle">
                <Column
                  title="图片"
                  dataIndex="productImg"
                  key="productImg"
                  width="34%"
                  render={text => (
                    <img className="imgs_style" src={text} alt={text} />
                  )}
                />
                <Column
                  title="商品详情"
                  dataIndex="description"
                  key="description"
                  align="center"
                  width="34%"
                />
                <Column
                  title="单价"
                  dataIndex="productPrice"
                  key="productPrice"
                  align="center"
                  width="10%"
                />
                <Column
                  title="数量"
                  dataIndex="productNum"
                  key="productNum"
                  align="center"
                  width="14%"
                />
                <Column
                  title="小计"
                  dataIndex="totalPrice"
                  key="totalPrice"
                  align="center"
                  width="16%"
                />
                <Column
                  title="操作"
                  dataIndex="operation"
                  key="operation"
                  align="center"
                  width="200px"
                  render={(text, record) => (
                    <>
                      {record.evaluationStatus ? (
                        <Popover content="该订单已评价过" trigger="hover">
                          <Button
                            type="link"
                            disabled={record.evaluationStatus}>
                            评价
                          </Button>
                        </Popover>
                      ) : (
                        <Button type="link" onClick={() => handleEva(record)}>
                          评价
                        </Button>
                      )}
                    </>
                  )}
                />
              </Table>
            </div>
          ))}
        </div>
      </div>
      <Evalution
        visible={evaVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        createUser={modalText.userId}
        productId={modalText.productId}
        orderId={modalText.orderId}
        title={modalText.description}
      />
    </div>
  );
};

export default Orders;
