/* eslint-disable no-nested-ternary */
import { Button, message, Popconfirm, Table, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { DOMAIN } from '@/constants';

const TableList = () => {
  const [source, setSource] = useState([]);
  const handleComfirm = async (text, record) => {
    // 通过
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifyMessage`,
      data: {
        id: `${record.ID}`,
        verify: true,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('已通过');
        getSource();
      }
    });
  };
  const handleReduseComfirm = async record => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/admin/verifyMessage`,
      data: {
        id: `${record.ID}`,
        verify: false,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('已拒绝');
        getSource();
      }
    });
  };
  const getSource = async () => {
    await axios.get(`${DOMAIN}/message/board?is_verify=false`).then(res => {
      if (res.data.entity.success) {
        setSource(res.data.entity.data);
      }
    });
  };
  useEffect(() => {
    getSource();
  }, []);
  return (
    <div className="real-content">
      <Table dataSource={source} className="basic-table">
        <Table.Column
          title="留言类型"
          dataIndex="Topic"
          width={60}
          align="center"
          key={record => record.ID}
          render={record => {
            return (
              <div>
                {record === 'praise' ? (
                  <Tag color="green">表扬👍</Tag>
                ) : record === 'critique' ? (
                  <Tag color="orange">批评一下</Tag>
                ) : (
                  <Tag color="purple">建议</Tag>
                )}
              </div>
            );
          }}
        />
        <Table.Column
          title="留言内容"
          dataIndex="Content"
          align="center"
          width={300}
          key={record => record.ID}
        />
        <Table.Column
          title="留言用户"
          dataIndex="Nickname"
          align="center"
          width={100}
          key={record => record.ID}
        />
        <Table.Column
          title="留言时间"
          dataIndex="CreatedAt"
          align="center"
          width={150}
          key={record => record.ID}
          render={text => moment(text).format('YYYY-MM-DD HH:MM:SS')}
        />
        <Table.Column
          title="操作"
          dataIndex="operation"
          width={100}
          align="center"
          render={(text, record) => (
            <>
              <Popconfirm
                title="确定通过这条留言吗？"
                onConfirm={() => handleComfirm(text, record)}
                okText="是"
                cancelText="否">
                <Button type="link">通过</Button>
              </Popconfirm>
              <Popconfirm
                title="确定不通过这条留言吗？"
                onConfirm={() => handleReduseComfirm(record)}
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
