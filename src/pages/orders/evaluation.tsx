/* eslint-disable filenames/match-exported */
import { Button, Form, Modal, Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import styled from 'styled-components';

const Title = styled.p`
  font-size: 18px;
`;
const Evalution = (props: {
  visible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  modalText: string;
}) => {
  const [form] = Form.useForm();
  const { visible, handleOk, handleCancel, modalText } = props;
  const handleSubmit = (value: any) => {
    console.log(value);
    handleOk();
    form.resetFields();
  };
  return (
    <Modal
      title="评价"
      footer={null}
      visible={visible}
      onOk={handleOk}
      // confirmLoading={confirmLoading}
      onCancel={handleCancel}>
      <Title>{modalText}</Title>
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
