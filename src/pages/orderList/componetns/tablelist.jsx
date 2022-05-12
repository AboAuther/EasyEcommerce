import { ExclamationCircleOutlined, PlusOutlined, PlusSquareFilled, QuestionCircleOutlined } from "@ant-design/icons";
import { Button, Col, Popconfirm, Row, Table, Modal } from "antd";
import { useState } from "react";
import orderLists from "../mock";
import './layout.less';

const TableList = () => {
  const [dialogVisile, setDialogVisible] = useState(false);
  const { confirm } = Modal;
  const showConfirm = (order) => {
    confirm({
      title: '请确认订单号，确定发货吗？',
      icon: <ExclamationCircleOutlined />,
      content: `订单号：${order.orderId}`,
      onOk() {
        console.log('OK');
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  const title = (order) => {
    return (
      <>
        <Row className="t_header">
          <Col span={6} className="ordernum">
            订单号: {order.orderId}
          </Col>
          <Col span={12} offset={6}>
            <Button type="text" onClick={() => showConfirm(order)}>
              发货
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <div className="real-content">
      {
        orderLists.map(item => (
          <div key={item.orderId} className='singleOrder'>
          <Table
          dataSource={item.data}
          rowKey={record => record.productId}
          pagination={false}
          className="basic-table"
          title={() => title(item)}
        >
          <Table.Column
            title="商品名称"
            dataIndex="productIntro"
            width={150}
          />
          <Table.Column
            title="售价"
            dataIndex="sellingPrice"
            width={100}
          />
          <Table.Column
            title="购买数量"
            dataIndex="buyNum"
            width={100}
          />
        </Table>
        </div>
        ))
      }

    </div>
  )
}

export default TableList;
