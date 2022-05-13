import { PlusOutlined, QuestionCircleFilled } from '@ant-design/icons';
import { Row, Button, Table, Popconfirm, Popover, message } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import AddressModal from './addressModal';
import { DOMAIN } from '@/constants';

const ReceivingAddress = () => {
  const [visible, setVisible] = useState(false);
  const [address, setAddress] = useState({});
  const [dataSource, setDataSource] = useState([]);
  useEffect(() => {
    getSource();
  }, []);
  const getSource = async () => {
    const id = localStorage.getItem('userId');
    await axios.get(`${DOMAIN}/user/getAddress?userID=${id}`).then(res => {
      setDataSource(res.data.entity.data);
    });
  };
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
      title: '收货人',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      width: '15%',
      ellipsis: true,
    },
    {
      title: '所在地区',
      dataIndex: 'region',
      key: 'region',
      align: 'center',
      width: '20%',
      ellipsis: true,
      render: text => (
        <Popover content={text} trigger="hover">
          {text}
        </Popover>
      ),
    },
    {
      title: '详情地址',
      dataIndex: 'detail',
      key: 'detail',
      align: 'center',
      width: '25%',
      ellipsis: true,
    },
    {
      title: '联系电话',
      dataIndex: 'mobile',
      key: 'mobile',
      align: 'center',
      width: '15%',
      ellipsis: true,
      render: text => (
        <Popover content={text} trigger="hover">
          {text}
        </Popover>
      ),
    },
    {
      title: '默认地址',
      dataIndex: 'default',
      key: 'default',
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
      render: (text, record) => {
        return (
          <div className="operation">
            <Popconfirm
              title="你确定要删除这条数据？"
              icon={<QuestionCircleFilled />}
              onConfirm={async () => {
                await axios({
                  method: 'post',
                  url: `${DOMAIN}/user/deleteAddress/${record.ID}`,
                }).then(res => {
                  if (res.data.entity.success) {
                    message.success('订单删除成功！');
                    getSource();
                  }
                });
              }}
              okText="是"
              cancelText="否">
              <Button type="link">删除</Button>
            </Popconfirm>
            <Button type="link" onClick={() => handleChangeMess(record)}>
              修改
            </Button>
          </div>
        );
      },
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
          dataSource={dataSource}
          columns={columns}
          rowKey={record => record.ID}
          pagination={false}
          size="middle"
        />
      </Row>
      <AddressModal
        visible={visible}
        handleCancel={() => setVisible(false)}
        address={address}
        getAddress={getSource}
      />
    </div>
  );
};
export default ReceivingAddress;
