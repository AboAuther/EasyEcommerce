import { Button, Form, Input, InputNumber } from 'antd';
import './index.less';

const personalInformation = () => {
  const onFinish = (values: any) => {
    console.log('finish', values);
  };
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      // validateMessages={validateMessages}
    >
      <Form.Item
        name={['user', 'userName']}
        label="用户名"
        rules={[
          {
            required: true,
            type: 'string',
            max: 10,
            message: '用户名长度应小于 10',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'nickName']}
        label="昵称"
        rules={[
          {
            required: true,
            type: 'string',
            max: 10,
            message: '昵称长度应小于 10',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'phone']}
        label="手机号码"
        rules={[{ type: 'string' }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="自我介绍">
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
  );
};

export default personalInformation;
