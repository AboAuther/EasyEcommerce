import React, { useState } from 'react';
import { Button, InputNumber, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Icon from '@ant-design/icons';
import './index.less';

export interface Data {
  id: number;
  mainPicture: string;
  description: string;
  price: number;
  num: number;
  totalprice: number;
}

export const columns: ColumnsType<Data> = [
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
    render: text => (
      <InputNumber
        min={1}
        max={99}
        defaultValue={text}
        precision={0}
        disabled={false}
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
        <Button type="text" className="changeButton">
          修改
        </Button>
      </div>
    ),
  },
];
