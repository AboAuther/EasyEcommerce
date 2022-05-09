import { Button, Table } from "antd";
import { useState } from "react";
import GoodsList from "../mock/GoodsList";
import './layout.less';
import MessageDialog from "./messageDialog";

const TableList = () => {
  const styles = {
    complexTabTableOperation: {
      lineHeight: '28px',
    },
    titleWrapper: {
      display: 'flex',
      flexDirection: 'row',
    },
    title: {
      marginLeft: '10px',
      lineHeight: '20px',
    },
    operation: {
      marginRight: '12px',
      textDecoration: 'none',
    },
    tabExtra: {
      display: 'flex',
      alignItems: 'center',
    },
    search: {
      marginLeft: 10,
    },
    tabCount: {
      marginLeft: '5px',
      color: '#3080FE',
    },
    pagination: {
      textAlign: 'right',
      paddingTop: '26px',
    },
  };

  const [dialogVisile, setDialogVisible] = useState(false);

  const handleOpen = () => {
   setDialogVisible(true);
  }

  const handleClose = () => {
   setDialogVisible(false);
  }

  return (
    <div className="real-content">
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
              title="品类"
              width={100}
            />
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
                  <Button type="link" onClick={handleOpen}>
                    修改
                  </Button>
                  <Button type="link" onClick={handleOpen}>
                    详情
                  </Button>
                </>
              )}
            />
          </Table>
          <MessageDialog visible={dialogVisile} handleClose={handleClose} />
    </div>
  )
}

export default TableList;
