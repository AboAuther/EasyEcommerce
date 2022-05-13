import { PlusOutlined, PlusSquareFilled } from "@ant-design/icons";
import { Button, Popconfirm, Table, Tag } from "antd";
import { text } from "express";
import { useState } from "react";
// import './layout.less';

import message from '../mock/index'
const TableList = () => {
  const handleComfirm = () => {
    console.log('1')
  }
  return (
    <div className="real-content">
      <Table
            dataSource={message}
            className="basic-table"
          >
            <Table.Column
              title="留言类型"
              dataIndex="topic"
              width={60}
              key={text => text.id}
              align="center"
              render={((record, text) => {
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
                )
              })}
            />
            <Table.Column
              title="留言内容"
              dataIndex="content"
              align="center"
              width={300}
              key={text => text.id}

            />
            <Table.Column
              title="留言用户"
              dataIndex="nickname"
              align="center"
              width={100}
              key={text => text.id}

            />
            <Table.Column
              title="留言时间"
              dataIndex="create_at"
              align="center"
              width={100}
              key={text => text.id}

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
                title="确定通过这条留言吗？"
                onConfirm={() =>handleComfirm(text)}
                okText="是"
                cancelText="否"
                >
                <Button type="link">
                    通过
                  </Button>
                </Popconfirm>
                <Popconfirm
                title="确定不通过这条留言吗？"
                okText="是"
                cancelText="否"
                >
                <Button type="link">
                    不通过
                  </Button>
                </Popconfirm>
                </>
              )}
            />
          </Table>
    </div>
  )
}

export default TableList;
