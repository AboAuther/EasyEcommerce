import { DOMAIN } from '@/constants';
import { PlusOutlined, PlusSquareFilled } from '@ant-design/icons';
import { Button, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import GoodsList from '../mock/GoodsList';
import './layout.less';
import MessageDialog from './messageDialog';

const TableList = () => {
  const [dialogVisile, setDialogVisible] = useState(false);
  const [actionType, setActionType] = useState(1);
  const [changeproduct, setChangeProduct] = useState(null);
  const [source, setSource] = useState([]);
  const categoryMap = {
    1: '蔬菜豆制品',
    2: '肉禽蛋奶',
    3: '海鲜水产',
    4: '水果鲜花',
    5: '冷冻产品',

  }
  const getSource = async () => {
    await axios
      .get(
        `${DOMAIN}/seller/getProduct?userID=${localStorage.getItem('userId')}`,
      )
      .then(res => {
        if (res.data.entity.success) {
          setSource(res.data.entity.data);
        }
      });
  };
  useEffect(() => {
    getSource();
  }, []);

  const handleOpen = (type: string, record) => {
    if (type === 'add') {
      setActionType(1); // 增加
      setChangeProduct(null);
    } else {
      setActionType(2); // 修改
      setChangeProduct(record);
    }
    setDialogVisible(true);
  };

  const handleClose = () => {
    setChangeProduct(null);
    setDialogVisible(false);
  };

  return (
    <div className="real-content">
      <Button
        type="primary"
        className="addButton"
        onClick={() => handleOpen('add', null)}>
        <PlusOutlined />
        添加商品
      </Button>
      <Table dataSource={source} className="basic-table">
        <Table.Column
          title="商品图片"
          dataIndex="productCoverImg"
          align="center"
          width={150}
          render={text => <img src={text} alt="" width={150} height={150} />}
        />
        <Table.Column
          title="商品名称"
          dataIndex="productName"
          width={150}
          align="center"
        />
        <Table.Column
          title="商品种类"
          dataIndex="categoryId"
          width={85}
          align="center"
          render={text => <span>{categoryMap[text]}</span> }
        />
        <Table.Column
          title="原价/(每公斤)"
          dataIndex="originalPrice"
          width={100}
          align="center"
        />
        <Table.Column
          title="促销价/(每公斤)"
          dataIndex="sellingPrice"
          width={100}
          align="center"
        />
        <Table.Column
          title="库存(斤)"
          dataIndex="stockNum"
          width={100}
          align="center"
        />
        <Table.Column
          title="操作"
          align="center"
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
      <MessageDialog
        visible={dialogVisile}
        handleClose={handleClose}
        type={actionType}
        message={changeproduct}
        getSource={getSource}
      />
    </div>
  );
};

export default TableList;
