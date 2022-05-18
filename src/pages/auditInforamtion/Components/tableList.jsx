import { Button, Image, message, Popconfirm, Table } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { DOMAIN } from '@/constants';

const TableList = () => {
  const [source, setSource] = useState([]);
  useEffect(() => {
    getSource();
  }, []);
  const getSource = async () => {
    await axios.get(`${DOMAIN}/admin/getSeller`).then(res => {
      if (res.data.entity.success) {
        setSource(res.data.entity.data);
      }
    });
  };
  const handleComfirm = async record => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifySeller`,
      data: {
        id: record.userID,
        verify: true,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('审核成功！');
        getSource();
      }
    });
  };

  const handleRefuseComfirm = async record => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifySeller`,
      data: {
        id: record.userID,
        verify: false,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('拒绝成功');
        getSource();
      }
    });
  };
  return (
    <div className="real-content">
      <Table dataSource={source} className="basic-table">
        <Table.Column
          title="店铺名称"
          dataIndex="shopName"
          width={100}
          key={text => text.id}
          align="center"
        />
        <Table.Column
          title="身份证号"
          dataIndex="identity"
          align="center"
          width={150}
          key={text => text.id}
        />
        <Table.Column
          title="详细地址"
          dataIndex="registerAddress"
          align="center"
          width={120}
          key={text => text.id}
        />
        <Table.Column
          title="营业执照"
          dataIndex="licenseUrl"
          align="center"
          width={100}
          render={text => {
            return <Image width={100} src={text} />;
          }}
        />
        <Table.Column
          title="卫生许可证"
          dataIndex="hygieneUrl"
          align="center"
          width={100}
          key={text => text.id}
          render={text => {
            return <Image width={100} src={text} />;
          }}
        />
        <Table.Column
          title="操作"
          dataIndex="operation"
          width={100}
          align="center"
          key={text => text.id}
          render={(text, record) => (
            <>
              <Popconfirm
                title="确定通过吗？"
                onConfirm={() => handleComfirm(record)}
                okText="是"
                cancelText="否">
                <Button type="link">通过</Button>
              </Popconfirm>
              <Popconfirm
                title="确定不通过吗？"
                onConfirm={() => handleRefuseComfirm(record)}
                okText="是"
                cancelText="否">
                <Button type="link">不通过</Button>
              </Popconfirm>
            </>
          )}
        />
      </Table>
    </div>
  );
};

export default TableList;
