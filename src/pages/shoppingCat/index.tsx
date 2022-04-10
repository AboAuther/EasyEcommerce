import {
  Button,
  Col,
  InputNumber,
  Popconfirm,
  Row,
  Table,
  Typography,
} from 'antd';
import { useState } from 'react';
import Icon from '@ant-design/icons';
import { ColumnsType } from 'antd/lib/table';
import HeardSearch from '../home/components/heardSearch';
import './index.less';
import BuyDrawer from '../payment/BuyDrawer';
// import { columns, Data } from './data';
import dataSource from './mock';

export interface Data {
  id: number;
  mainPicture: string;
  description: string;
  price: number;
  num: number;
  totalprice: number;
}
const ShoppingCat = () => {
  const [visible, setVisible] = useState(false);
  const [changeVisible, setChangeVisible] = useState(-1);
  const openDialog = () => {
    setVisible(true);
  };
  const closeDialog = () => {
    setVisible(false);
  };
  const columns: ColumnsType<Data> = [
    {
      title: '图片',
      dataIndex: 'mainPicture',
      key: 'mainPicture',
      align: 'center',
      width: '16%',
      render: text => <img className="imgs_style" src={text} alt={text} />,
    },
    {
      title: '商品',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
      width: '20%',
    },
    {
      title: '单价',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      width: '16%',
      render: text => (Number(text) ? `￥${Number(text).toFixed(2)}` : 0),
    },
    {
      title: '数量',
      dataIndex: 'num',
      key: 'num',
      align: 'center',
      width: '14%',
      render: (text, record) => (
        <InputNumber
          min={1}
          max={99}
          defaultValue={text}
          precision={0}
          disabled={record.id !== changeVisible}
          // onChange={value => {
          //   const totalPrice = parseFloat(record.price) * value;
          //   state.updatecartData(record.id, value, totalPrice);
          //   state.setPriceList02(index, 'totalP', [value, totalPrice]);
          // }}
        />
      ),
    },
    {
      title: '小计',
      dataIndex: 'totalprice',
      key: 'totalprice',
      align: 'center',
      width: '16%',
      render: text => (text ? `￥${parseFloat(text).toFixed(2)}` : 0),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      // fixed: 'right',
      width: '148px',
      render: (text, record, index) => (
        <div className="operation">
          <Popconfirm
            title="你确定要删除这条数据？"
            icon={<Icon type="question-circle-o" style={{ color: 'red' }} />}
            // onConfirm={() => {
            //   state.delcartData([record.id]);
            // }}
            okText="是"
            cancelText="否">
            <span>删除</span>
          </Popconfirm>
          <Button
            type="text"
            className="changeButton"
            onClick={() => setChangeVisible(record.id)}>
            修改
          </Button>
        </div>
      ),
    },
  ];
  const footer = () => {
    let total = 0;
    let size = 0;
    const priceList = dataSource.map(item => ({
      total: item.price * item.num,
      size: item.num,
    }));
    priceList.forEach(item => {
      total += item.total;
      size += item.size;
    });

    return (
      <>
        <Row>
          <Col span={12} className="left">
            <Button>批量删除</Button>
            <Button>批量加入收藏</Button>
          </Col>
          <Col span={12} className="right">
            <span className="num">
              已选择<i>{size}</i>件商品
            </span>
            <div>
              总价：<span>¥{total.toFixed(2)}</span>
            </div>
            <span className="go-pay" onClick={openDialog}>
              去结算
            </span>
          </Col>
        </Row>
        <BuyDrawer
          visible={visible}
          onClose={closeDialog}
          total={total}
          shoppingCatsList={dataSource}
        />
      </>
    );
  };

  return (
    <div className="content">
      <div className="orderHead">
        <HeardSearch currentIndex={''} isDisplay={true} />
      </div>
      <div className="orderContent">
        <div className="content_card">
          <div className="common_width dm_MyShoppingCart">
            <Row className="table_title">
              <Typography.Title level={4}>我的购物车</Typography.Title>
              <div>
                {/* （当前购物车共有 <i>{allProductsSize}</i> 件商品） */}
              </div>
            </Row>
            <Table<Data>
              columns={columns}
              dataSource={dataSource}
              pagination={false}
              footer={() => footer()}
              bordered={true}
              rowKey={record => record.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCat;
