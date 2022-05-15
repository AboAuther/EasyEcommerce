import { UpCircleOutlined } from '@ant-design/icons';
import { Drawer, Form, Button, Input, Space, Upload, Radio } from 'antd';
import React, { useState } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/constants';

const MessageDialog = props => {
  const { visible, handleClose, type, message, getSource } = props;
  const [form] = Form.useForm();
  if (type !== 2) {
    form.resetFields(null); // 添加
  } else if (message) {
    form.setFieldsValue(message); // 修改
  }

  const drawerClose = () => {
    form.resetFields(null);
    handleClose();
  };
  const handleSubmit = async value => {
    if (type === 2) {
      editSubmit(value);
    } else {
      addSubmit(value);
    }
  };

  const editSubmit = async value => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/seller/editProduct`,
      data: {
        productId: message.productId,
        productName: value.productName,
        productIntro: value.productIntro,
        categoryId: Number(value.categoryId),
        ProductCoverImg:
          value.pic === undefined
            ? message.productCoverImg
            : value.pic.fileList[0].response.entity.data,
        productBanner:
          value.pic === undefined
            ? message.productCoverImg
            : value.pic.fileList[0].response.entity.data,
        originalPrice: Number(value.originalPrice),
        sellingPrice: Number(value.sellingPrice),
        stockNum: Number(value.stockNum),
        click_num: message.click_num,
        createUser: message.createUser,
        updateUser: localStorage.getItem('userId'),
        productDetailContent: value.productDetailContent,
      },
    }).then(res => {
      form.setFieldsValue(null);
      if (res.data.entity.success) {
        handleClose();
        getSource();
      }
    });
  };

  const addSubmit = async value => {
    await axios({
      method: `post`,
      url: `${DOMAIN}/seller/addProduct`,
      data: {
        productName: value.productName,
        productIntro: value.productIntro,
        categoryId: Number(value.categoryId),
        ProductCoverImg: value.pic.fileList[0].response.entity.data,
        productBanner: value.pic.fileList[0].response.entity.data,
        originalPrice: Number(value.originalPrice),
        sellingPrice: Number(value.sellingPrice),
        stockNum: Number(value.stockNum),
        updateUser: localStorage.getItem('userId'),
        click_num: 1,
        createUser: localStorage.getItem('userId'),
        productDetailContent: value.productDetailContent,
      },
    }).then(res => {
      form.setFieldsValue(null);
      if (res.data.entity.success) {
        handleClose();
        getSource();
      }
    });
  };
  return (
    <div>
      <Drawer
        title={type === 1 ? '添加' : '修改'}
        onClose={drawerClose}
        visible={visible}
        extra={
          <Space>
            <Button onClick={handleClose}>取消</Button>
          </Space>
        }>
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={handleSubmit}
          form={form}>
          <Form.Item
            name="productName"
            label="商品名称"
            rules={[{ required: true, message: '请输入名称' }]}>
            <Input placeholder="请输入商品名称" />
          </Form.Item>
          <Form.Item
            name="productIntro"
            label="商品描述"
            rules={[{ required: true, message: '请输入描述' }]}>
            <Input placeholder="请输入商品描述" />
          </Form.Item>
          <Form.Item
            name="productDetailContent"
            label="商品具体描述"
            rules={[{ required: true, message: '请输入具体描述' }]}>
            <Input placeholder="请输入商品具体描述" />
          </Form.Item>
          <Form.Item
            name="categoryId"
            label="商品种类"
            rules={[{ required: true, message: '请选择商品种类' }]}>
            <Radio.Group>
              <Radio value={1}>蔬菜豆制品</Radio>
              <Radio value={2}>肉禽蛋奶</Radio>
              <Radio value={3}>海鲜水产</Radio>
              <Radio value={4}>水果鲜花</Radio>
              <Radio value={5}>冷冻食品</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="originalPrice"
            label="原价/(每公斤)"
            rules={[{ required: true, message: '请输入市场价' }]}>
            <Input placeholder="请输入市场价" />
          </Form.Item>
          <Form.Item
            name="sellingPrice"
            label="促销价/(每公斤)"
            rules={[{ required: true, message: '请输入促销价' }]}>
            <Input placeholder="请输入促销价" />
          </Form.Item>
          <Form.Item
            name="stockNum"
            label="库存(斤)"
            rules={[{ required: true, message: '请输入库存' }]}>
            <Input placeholder="请输入库存" />
          </Form.Item>
          {type === 1 ? (
            ''
          ) : (
            <img
              src={message ? message.productCoverImg : ''}
              width={100}
              height={100}
              style={{ display: 'block', margin: '0 0 20px 0' }}
            />
          )}

          <Form.Item name="pic">
            <Upload
              action={`${DOMAIN}/seller/upload`}
              listType="picture"
              name="file"
              maxCount={1}>
              <Button icon={<UpCircleOutlined />}>上传商品图片</Button>
            </Upload>
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default MessageDialog;
