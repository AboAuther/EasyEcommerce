import { UpCircleOutlined } from '@ant-design/icons';
import { Drawer, Form, Button, Col, Row, Input, Select, DatePicker, Space, Upload } from 'antd';
import React, { Component, useState } from 'react';
const MessageDialog = (props) => {
  const { Option } = Select;
  const { visible, handleClose, type, message} = props;
  const [fields, setFields ] = useState([]);
  console.log(message)
  const handleSubmit = (value) => {
    console.log(value);
  }
  return (
    <div>
    <Drawer
      title={type === 1 ? '添加' : '修改'}
      onClose={handleClose}
      visible={visible}
      extra={
        <Space>
          <Button onClick={handleClose}>取消</Button>
        </Space>
        }
    >
      <Form layout="vertical" hideRequiredMark
      onFinish={handleSubmit}
      initialValues={message}
      >
         <Form.Item
              name="name"
              label="商品名称"
              rules={[{ required: true, message: '请输入名称' }]}
            >
              <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item
              name="productCategoryName"
              label="商品种类"
              rules={[{ required: true, message: '请输入商品种类' }]}
            >
              <Input placeholder="请输入商品种类" />
          </Form.Item>
          <Form.Item
              name="originalPrice"
              label="市场价"
              rules={[{ required: true, message: '请输入市场价' }]}
            >
              <Input placeholder="请输入市场价" />
          </Form.Item>
          <Form.Item
              name="promotionPrice"
              label="促销价"
              rules={[{ required: true, message: '请输入促销价' }]}
            >
              <Input placeholder="请输入促销价" />
          </Form.Item>
          <Form.Item
              name="stock"
              label="库存"
              rules={[{ required: true, message: '请输入库存' }]}
            >
              <Input placeholder="请输入库存" />
          </Form.Item>
          {
            type ===1 ?
            <Form.Item
            name='pic'
            label='图片'
          >
           <Upload  action="/upload.do" listType="picture" maxCount={1}>
              <Button icon={<UpCircleOutlined />} >
                上传商品图片
              </Button>
          </Upload>
          </Form.Item>
          :
          <Form.Item
            name='pic'
            label='图片'
          >
           <img src={message.pic ? message.pic : ''} width={100} height={100} style={{display: 'block', margin: '0 0 20px 0'}}/>
           <Upload  action="/upload.do" listType="picture" maxCount={1}>
              <Button icon={<UpCircleOutlined />} >
                上传商品图片
              </Button>
          </Upload>
          </Form.Item>
          }

          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
      </Form.Item>

      </Form>
    </Drawer>
  </div>
  )
}

export default MessageDialog;
