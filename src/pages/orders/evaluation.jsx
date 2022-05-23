/* eslint-disable filenames/match-exported */
import { Button, Form, message, Modal, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import axios from 'axios';
import styled from 'styled-components';
import { DOMAIN } from '@/constants';

const Title = styled.p`
  font-size: 18px;
`;
const Evalution = props => {
  const [form] = Form.useForm();
  const {
    visible,
    handleOk,
    handleCancel,
    createUser,
    productId,
    orderId,
    title,
  } = props;
  const handleSubmit = async (value: any) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/addEvaluation`,
      data: {
        createUser,
        productId,
        orderId,
        evaluation: value.content,
        star: value.rate,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('评价成功');
        handleOk();
        form.resetFields();
      }
    });
  };
  return (
    <Modal title="评价" footer={null} visible={visible} onCancel={handleCancel}>
      <Title>{title}</Title>
      <Form onFinish={handleSubmit} form={form}>
        <Form.Item
          name="content"
          rules={[{ required: true, message: '请输入对商品的评价' }]}>
          <TextArea
            placeholder="请输入评价"
            allowClear
            maxLength={150}
            showCount
          />
        </Form.Item>
        <Form.Item
          name="rate"
          label="请打分"
          rules={[{ required: true, message: '请打分' }]}>
          <Rate defaultValue={undefined} />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 10, span: 16 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Evalution;
