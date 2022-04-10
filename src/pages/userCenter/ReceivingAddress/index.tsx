import { PlusOutlined } from '@ant-design/icons';
import { Row, Button, Table, Popconfirm } from 'antd';
import { useState } from 'react';
// import { columns } from './data';
import { ColumnsType } from 'antd/es/table';
import addressSource, { Address } from './mock';
import AddressModal from './addressModal';

const ReceivingAddress = () => {
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState({});
  const handleChangeMess = (record: Address) => {
    setVisible(true);
    setAddress(record);
  };
  const handleAdd = () => {
    setAddress({});
    setVisible(true);
  };
  const columns: ColumnsType<Address> = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index',
      align: 'center',
      width: '6%',
      render: (index: number) => `${index + 1}`,
    },
    {
      title: '收货人',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: '10%',
      ellipsis: true,
    },
    {
      title: '所在地区',
      dataIndex: 'region',
      key: 'region',
      align: 'center',
      width: '10%',
      ellipsis: true,
    },
    {
      title: '详情地址',
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
      width: '30%',
      ellipsis: true,
    },
    {
      title: '联系电话',
      dataIndex: 'phone',
      key: 'phone',
      align: 'center',
      width: '10%',
      ellipsis: true,
    },
    {
      title: '默认地址',
      dataIndex: 'isDefault',
      key: 'isDefault',
      align: 'center',
      width: '10%',
      render: (text: boolean) => (text && text ? '是' : '否'),
    },
    {
      title: '操作',
      dataIndex: 'operation',
      key: 'operation',
      align: 'center',
      width: '148px',
      render: (text, record, index) => (
        <div className="operation">
          <Popconfirm title="你确定要删除？" okText="是" cancelText="否">
            <Button type="link">删除</Button>
          </Popconfirm>
          <Button type="link" onClick={() => handleChangeMess(record)}>
            修改
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="dm_ReceivingAddress">
      <Row style={{ paddingBottom: '6px', textAlign: 'right' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => {
            handleAdd();
          }}>
          添加
        </Button>
      </Row>
      <Row>
        <Table
          bordered={true}
          dataSource={addressSource}
          columns={columns}
          // scroll={{ x: false, y: false }}
          rowKey={record => record.id}
          pagination={false}
          size="middle"
        />
      </Row>
      <AddressModal
        visible={visible}
        handleCancel={() => setVisible(false)}
        address={address}
      />
    </div>
  );
};
export default ReceivingAddress;
