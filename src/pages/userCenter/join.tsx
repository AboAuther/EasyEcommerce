import { UploadOutlined } from '@ant-design/icons';
import { Button, Drawer, Form, Input, message, Upload } from 'antd';
import axios from 'axios';
import { DOMAIN } from '@/constants';

const Join = (props: { visible: boolean; closeDraw: () => void }) => {
  const { visible, closeDraw } = props;

  const handleSubmit = async (value: any) => {
    if (value) {
      await axios({
        method: 'post',
        url: `${DOMAIN}/seller/register`,
        data: {
          userID: localStorage.getItem('userId'),
          identity: value.identity,
          registerAddress: value.registerAddress,
          shopName: value.shopName,
          licenseUrl: value.licenseUrl?.fileList[0].response.entity.data,
          hygieneUrl: value.hygieneUrl?.fileList[0].response.entity.data,
        },
      }).then(res => {
        if (res.data.entity.success) {
          message.success('申请成功，请等待结果！');
          closeDraw();
        } else {
          message.error('申请发送失败，请重试！');
        }
      });
    }
  };
  return (
    <Drawer visible={visible} onClose={closeDraw} size="large" title="商家申请">
      <Form onFinish={handleSubmit}>
        <Form.Item label="店铺名称" name="shopName" required>
          <Input />
        </Form.Item>
        <Form.Item label="身份证号码" name="identity" required>
          <Input />
        </Form.Item>
        <Form.Item label="注册地址" name="registerAddress" required>
          <Input />
        </Form.Item>
        <Form.Item name="licenseUrl" required>
          <Upload
            name="file"
            action={`${DOMAIN}/seller/upload`}
            listType="picture">
            <Button icon={<UploadOutlined />}>上传商业许可证</Button>
          </Upload>
        </Form.Item>
        <Form.Item name="hygieneUrl" required>
          <Upload
            name="file"
            action={`${DOMAIN}/seller/upload`}
            listType="picture">
            <Button icon={<UploadOutlined />}>上传卫生许可证</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default Join;
