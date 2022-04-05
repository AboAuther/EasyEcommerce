import React from 'react';
import { Button } from 'antd';

export const columns: ColumnsType<OrdersData> = [
  {
    title: '商品详情',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    width: '34%',
    render: (text, record) => (
      <Button type="text" href={`/products/${record.key}`}>
        <span title={text}>{text}</span>
      </Button>
    ),
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
    render: text => `x${text}`,
  },
  {
    title: '小计',
    dataIndex: 'totalprice',
    key: 'totalprice',
    align: 'center',
    width: '16%',
    render: (text, record, index) =>
      text ? `￥${parseFloat(text).toFixed(2)}` : 0,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    align: 'center',
    // fixed: 'right',
    width: '148px',
    render: (text, record) => (
      <>
        <Button type="link" href={`/products/${record.key}`}>
          详情
        </Button>
        <Button type="link" href={`/products/${record.key}`}>
          删除
        </Button>
      </>
    ),
    // (
    //     // <div className="operation">
    //     //   <Link
    //     //     to={{
    //     //       pathname: '/views/products/cart/evaluate',
    //     //       state: {
    //     //         id: record.id,
    //     //       },
    //     //     }}>
    //     //     评价
    //     //   </Link>
    //     //   <Link
    //     //     to={{
    //     //       pathname: '/views/products/cart/orderDetails',
    //     //       state: {
    //     //         id: record.orderId,
    //     //       },
    //     //     }}>
    //     //     详情
    //     //   </Link>
    //     // </div>
    //     { text },
    //   ),
  },
];
