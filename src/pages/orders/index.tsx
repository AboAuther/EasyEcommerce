import { Table, Typography, Row, Col, Popconfirm, Icon } from 'antd';
import HeardSearch from '../home/components/heardSearch';
import { dataSource, aaa } from './mock';
import './index.less';
import { columns } from './data';

const orders = () => {
  const total = 10;

  const title = (submitTime: string, ordernum: number, orderId: number) => (
    <Row className="t_header">
      <Col span={6}>{submitTime}</Col>
      <Col span={6}>订单号： {ordernum}</Col>
      <Col span={12}>
        <Popconfirm
          title="你确定要删除这条数据？"
          icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
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
            scroll={{ x: false, y: false }}
            bordered={true}
            size="middle"
            className="table_header"
          />
          {dataSource.map(item => (
            <div style={{ marginBottom: '20px' }} key={item.id}>
              <Table
                columns={columns}
                dataSource={item.content}
                rowKey={record => record.key}
                pagination={false}
                scroll={{ x: false, y: false }}
                bordered={true}
                showHeader={false}
                title={() => title(item.submitTime, item.ordernum, item.id)}
                size="middle"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default orders;
