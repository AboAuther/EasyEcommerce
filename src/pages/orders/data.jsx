import { title } from 'process';
import React from 'react';
import { Link } from 'react-router-dom';
// 全局设置
import { PUBLIC_URL } from '@config';
import { Button } from 'antd';

export const columns = [
  // {
  //   title: '主图',
  //   dataIndex: 'mainPicture',
  //   key: 'mainPicture',
  //   align: 'center',
  //   width: '10%',
  //   // render: (text, record, index) => (
  //   //   <img className="imgs_style" src={`${PUBLIC_URL}${text}`} alt={text} />
  //   // ),
  // },
  {
    title: '商品详情',
    dataIndex: 'description',
    key: 'description',
    align: 'center',
    width: '34%',
    render: (text, record, index) => (
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
    render: (text, record, index) =>
      Number(text) ? `￥${Number(text).toFixed(2)}` : 0,
  },
  {
    title: '数量',
    dataIndex: 'num',
    key: 'num',
    align: 'center',
    width: '14%',
    render: (text, record, index) => `x${text}`,
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
    render: (text, record, index) => (
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
