import { Button, Form, Input, message } from 'antd';
import axios from 'axios';
import { DOMAIN } from '@/constants';
import './index.less';

const Release = () => {
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/message/addNotice`,
      data: {
        title: values.title,
        content: values.content,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('发布成功！');
        form.resetFields();
      }
    });
  };
  const { TextArea } = Input;
  const [form] = Form.useForm();
  return (
    <div className="formContent">
      <Form onFinish={onFinish} form={form}>
        <Form.Item name="title" label="公告标题">
          <Input />
        </Form.Item>
        <Form.Item name="content" label="公告内容">
          <TextArea rows={4} maxLength={100} showCount />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 12, span: 16 }}>
          <Button type="primary" htmlType="submit">
            发布
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Release;
