import { Table, Typography, Row, Col, Popconfirm, Button } from 'antd';
import { useState } from 'react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Column from 'antd/lib/table/Column';
import OrderDrawer from '../orderMessage/BuyDrawer';
import HeardSearch from '../home/components/heardSearch';
import { dataSource } from './mock';
import './index.less';
import { columns } from './data';

const Orders = () => {
  const total = 10;
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const openDialog = (id: number) => {
    setIndex(id);
    setVisible(true);
  };
  const closeDialog = () => {
    setVisible(false);
  };

  const title = (
    submitTime: string,
    ordernum: number,
    content: {
      key: number;
      mainPicture: string;
      description: string;
      price: number;
      num: number;
      totalprice: number;
    }[],
    id: number,
  ) => (
    <>
      <Row className="t_header">
        <Col span={6}>{submitTime}</Col>
        <Col span={6}>订单号： {ordernum}</Col>
        <Col span={12}>
          <Button type="text" onClick={() => openDialog(id)}>
            详情
          </Button>
          <Popconfirm
            title="你确定要删除这条数据？"
            icon={<QuestionCircleOutlined />}
            // onConfirm={() => {
            //   state.deleteOrderData({
            //     id: orderId,
            //   });
            // }}
            okText="是"
            cancelText="否">
            <span>删除</span>
          </Popconfirm>
        </Col>
      </Row>
      <OrderDrawer
        visible={visible}
        onClose={closeDialog}
        shoppingCatsList={dataSource[index].content}
      />
    </>
  );

  return (
    <div className="content">
      <div className="orderHead">
        <HeardSearch currentIndex={'2'} isDisplay={true} />
      </div>
      <div className="orderContent">
        <div className="content_card">
          <div className="table-header">
            <h3 style={{ display: 'inline-block', margin: '0 5px 0 0' }}>
              我的订单
            </h3>
            <span className="title-count">当前共有 {total} 笔订单</span>
          </div>
        </div>
        <div className="common_width dm_MyOrder">
          <Row className="table_title">
            <Typography.Title level={4}>我的订单</Typography.Title>
            <div>
              （当前共有 <i>{dataSource.length}</i> 笔订单）
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

          {dataSource.map(item => (
            <div style={{ marginBottom: '20px' }} key={item.id}>
              <Table
                // columns={columns}
                dataSource={item.content}
                rowKey={record => record.key}
                pagination={false}
                bordered={true}
                showHeader={false}
                title={() =>
                  title(item.submitTime, item.ordernum, item.content, item.id)
                }
                size="middle">
                <Column
                  title="图片"
                  dataIndex="mainPicture"
                  key="mainPicture"
                  // width="34%"
                  render={text => (
                    <img className="imgs_style" src={text} alt={text} />
                  )}
                />
                <Column
                  title="商品详情"
                  dataIndex="description"
                  key="description"
                  width="34%"
                />
                <Column
                  title="单价"
                  dataIndex="price"
                  key="price"
                  align="center"
                  width="16%"
                />
                <Column
                  title="数量"
                  dataIndex="num"
                  key="num"
                  align="center"
                  width="14%"
                />
                <Column
                  title="小计"
                  dataIndex="totalprice"
                  key="totalprice"
                  align="center"
                  width="146"
                />
                <Column
                  title="操作"
                  dataIndex="operation"
                  key="operation"
                  align="center"
                  width="200px"
                  render={(text, record) => (
                    <>
                      <Popconfirm
                        title="你确定要删除这条数据？"
                        icon={<QuestionCircleOutlined />}
                        // onConfirm={() => {
                        //   state.deleteOrderData({
                        //     id: orderId,
                        //   });
                        // }}
                        okText="是"
                        cancelText="否">
                        <span style={{ color: '#1890ff' }}>删除</span>
                      </Popconfirm>
                      <Button type="link">评价</Button>
                    </>
                  )}
                />
              </Table>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Orders;
