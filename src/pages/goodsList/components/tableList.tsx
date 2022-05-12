import { PlusOutlined, PlusSquareFilled } from "@ant-design/icons";
import { Button, Table } from "antd";
import { useState } from "react";
import GoodsList from "../mock/GoodsList";
import './layout.less';
import MessageDialog from "./messageDialog";

const TableList = () => {
  const [dialogVisile, setDialogVisible] = useState(false);
  const [actionType, setActionType] = useState(1);
  const [changeproduct, setChangeProduct] = useState<null | object | unknown>(null);

  const handleOpen = (type : string, record: object | null | unknown) => {
    if ( type === 'add' && record !== null) {
      setActionType(1); // 增加
    } else {
      setActionType(2);// 修改
      setChangeProduct(record);
    }
   setDialogVisible(true);
  }

  const handleClose = () => {
   setDialogVisible(false);
  }

  return (
    <div className="real-content">
      <Button type="primary" className="addButton" onClick={() =>handleOpen('add', null)}>
      <PlusOutlined />添加商品
      </Button>
      <Table
            dataSource={GoodsList}
            className="basic-table"
          >
            <Table.Column
              title="商品图片"
              dataIndex="pic"
              width={150}
              render={text => (
                <img src={text} alt='' width={100} />
              )}
            />
            <Table.Column
              title="商品名称"
              dataIndex="name"
              width={150}
            />
            <Table.Column title="商品种类" dataIndex="productCategoryName" width={85} />
            <Table.Column
              title="市场价"
              dataIndex="originalPrice"
              width={100}
            />
            <Table.Column
              title="促销价"
              dataIndex="promotionPrice"
              width={100}
            />
            <Table.Column
              title="库存"
              dataIndex="stock"
              width={100}
            />
            <Table.Column
              title="操作"
              dataIndex="operation"
              width={150}
              render={(text, record) => (
                <>
                  <Button type="link" onClick={() => handleOpen('chanage', record)}>
                    修改
                  </Button>
                </>
              )}
            />
          </Table>
          <MessageDialog visible={dialogVisile} handleClose={handleClose} type={actionType} message={changeproduct}/>
    </div>
  )
}

export default TableList;
