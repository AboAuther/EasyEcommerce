/* eslint-disable no-console */
import { UploadOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, Upload } from 'antd';

const Join = (props: { visible: boolean; closeDraw: () => void }) => {
  const { visible, closeDraw } = props;

  const handleSubmit = (value: any) => {
    console.log(value);
  };
  // function getBase64(file: Blob) {
  //   return new Promise((resolve, reject) => {
  //     const reader = new FileReader();
  //     reader.readAsDataURL(file);
  //     reader.onload = () => resolve(reader.result);
  //     reader.onerror = error => reject(error);
  //   });
  // }
  return (
    <Drawer visible={visible} onClose={closeDraw} size="large" title="商家申请">
      <Form onFinish={handleSubmit}>
        <Form.Item label="姓名" name="name" required>
          <Input />
        </Form.Item>
        <Form.Item label="身份证号码" name="numberID" required>
          <Input />
        </Form.Item>
        <Form.Item label="详细地址" name="address" required>
          <Input />
        </Form.Item>
        <Form.Item label="文件上传" name="upLoad" required>
          <Upload name="logo" action="/upload.do" listType="picture">
            <Button icon={<UploadOutlined />}>
              上传商业许可证即生产环境照片
            </Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            提交
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default Join;
