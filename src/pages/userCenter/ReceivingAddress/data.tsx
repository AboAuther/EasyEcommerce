import React from 'react';
import { Button, Popconfirm } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Address } from './mock';
// 数据
// import state from './state';

// 表头
// export const columns: ColumnsType<Address> = [
//   {
//     title: '序号',
//     dataIndex: 'index',
//     key: 'index',
//     align: 'center',
//     width: '6%',
//     render: (index: number) => `${index + 1}`,
//   },
//   {
//     title: '收货人',
//     dataIndex: 'name',
//     key: 'name',
//     align: 'center',
//     width: '10%',
//     ellipsis: true,
//   },
//   {
//     title: '所在地区',
//     dataIndex: 'region',
//     key: 'region',
//     align: 'center',
//     width: '10%',
//     ellipsis: true,
//   },
//   {
//     title: '详情地址',
//     dataIndex: 'detail',
//     key: 'detail',
//     align: 'center',
//     width: '30%',
//     ellipsis: true,
//   },
//   {
//     title: '联系电话',
//     dataIndex: 'phone',
//     key: 'phone',
//     align: 'center',
//     width: '10%',
//     ellipsis: true,
//   },
//   {
//     title: '默认地址',
//     dataIndex: 'isDefault',
//     key: 'isDefault',
//     align: 'center',
//     width: '10%',
//     render: (text: boolean) => (text && text ? '是' : '否'),
//   },
//   {
//     title: '操作',
//     dataIndex: 'operation',
//     key: 'operation',
//     align: 'center',
//     width: '148px',
//     render: _ => (
//       <div className="operation">
//         <Popconfirm title="你确定要删除？" okText="是" cancelText="否">
//           <Button type="link">删除</Button>
//         </Popconfirm>
//         <Button type="link">修改</Button>
//       </div>
//     ),
//   },
// ];
