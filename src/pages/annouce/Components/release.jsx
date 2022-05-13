import { Button, Form, Input } from "antd";
import './index.less';
const Release = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const { TextArea } = Input;
  return (
    <div className="formContent">
      <Form
       onFinish={onFinish}
      >
        <Form.Item name='title' label='公告题目'>
          <Input />
        </Form.Item>
        <Form.Item name='content' label='公告内容'>
          <TextArea rows={4} maxLength={100} showCount/>
        </Form.Item>
        <Form.Item  wrapperCol={{ offset: 12, span: 16 }} >
        <Button type="primary" htmlType="submit">
          发布
        </Button>
      </Form.Item>
      </Form>
    </div>
  )
}

export default Release;
