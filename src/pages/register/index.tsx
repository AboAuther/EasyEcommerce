import { Form, Input, Button, Checkbox, Select, Option } from 'antd';
import {
  UserOutlined,
  LockOutlined,
  CheckCircleOutlined,
  WhatsAppOutlined,
  IdcardOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import './index.less';
import styled from 'styled-components';
import bg from '../images/loginBack.webp';

const LoginPage = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;
const login = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const prefixSelector = <Form.Item name="prefix" noStyle={true} />;
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: '100vh',
        opacity: '0.89',
      }}>
      <LoginPage>
        <Form
          name="normal_login"
          className="login-form1"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: '用户名长度应小于 10',
                len: 10,
              },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            // label="Password"
            rules={[
              {
                required: true,
                message: '密码长度应 小于 10',
                len: 10,
              },
            ]}
            hasFeedback={true}>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="密码"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            // label="Confirm Password"
            dependencies={['password']}
            hasFeedback={true}
            rules={[
              {
                required: true,
                message: '再次输入密码',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      'The two passwords that you entered do not match!',
                    ),
                  );
                },
              }),
            ]}>
            <Input.Password
              prefix={<CheckCircleOutlined className="site-form-item-icon" />}
              placeholder="确认密码"
            />
          </Form.Item>

          <Form.Item
            name="nickname"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: '昵称长度应小于10',
                whitespace: true,
                len: 10,
              },
            ]}>
            <Input placeholder="昵称" prefix={<IdcardOutlined />} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: '联系方式长度应小于 11',
                len: 11,
                type: 'string',
              },
            ]}>
            <Input
              prefix={<WhatsAppOutlined />}
              style={{ width: '100%' }}
              placeholder="联系方式"
            />
          </Form.Item>
          <Form.Item
            name="address"
            rules={[{ required: true, message: 'Please input your Address!' }]}>
            <Input
              prefix={<HomeOutlined />}
              style={{ width: '100%' }}
              placeholder="地址"
            />
          </Form.Item>
          <Form.Item>
            <div className="buttonGroup">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                注册
              </Button>
            </div>
          </Form.Item>
        </Form>
      </LoginPage>
    </div>
  );
};

export default login;
