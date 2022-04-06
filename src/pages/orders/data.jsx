import React, { useState } from 'react';
import { Button, Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';

export const columns: ColumnsType<OrdersData> = [
  // {
  //   title: ''
  // }
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
    render: text => (text ? `￥${parseFloat(text).toFixed(2)}` : 0),
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
        <Button type="link">详情</Button>
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
        <Button type="link" href={`/products/${record.key}`}>
          评价
        </Button>
      </>
    ),
  },
];
