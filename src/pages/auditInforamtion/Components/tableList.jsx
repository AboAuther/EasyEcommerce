import { PlusOutlined, PlusSquareFilled } from "@ant-design/icons";
import { Button, Image, Popconfirm, Table, Tag } from "antd";
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
              title="店长昵称"
              dataIndex="name"
              width={100}
              key={text => text.id}
              align="center"
            />
            <Table.Column
              title="身份证号"
              dataIndex="userId"
              align="center"
              width={150}
              key={text => text.id}

            />
            <Table.Column
              title="详细地址"
              dataIndex="address"
              align="center"
              width={120}
              key={text => text.id}

            />
            <Table.Column
              title="营业执照"
              dataIndex="businessLicense"
              align="center"
              width={100}
              render={(text, record) => {
                return (
                  <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  preview={{
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  }}
                />
                )
              }}

            />
              <Table.Column
              title="卫生许可证"
              dataIndex="healthPermit"
              align="center"
              width={100}
              key={text => text.id}
              render={(text, record) => {
                return (
                  <Image
                  width={100}
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200"
                  preview={{
                    src: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
                  }}
                />
                )
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
