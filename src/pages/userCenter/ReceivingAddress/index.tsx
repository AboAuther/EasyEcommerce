import { PlusOutlined } from '@ant-design/icons';
import { Row, Button, Table } from 'antd';
import { useState } from 'react';
import { columns } from './data';
import dataSource from './mock';
import AddressModal from './addressModal';

const ReceivingAddress = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className="dm_ReceivingAddress">
      <Row style={{ paddingBottom: '6px', textAlign: 'right' }}>
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setVisible(true)}>
          添加
        </Button>
      </Row>
      <Row>
        <Table
          bordered={true}
          dataSource={dataSource}
          columns={columns}
          // scroll={{ x: false, y: false }}
          rowKey={record => record.id}
          pagination={false}
          size="middle"
        />
      </Row>
      <AddressModal visible={visible} handleCancel={() => setVisible(false)} />
    </div>
  );
};
export default ReceivingAddress;
