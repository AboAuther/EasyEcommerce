import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.less';
import styled from 'styled-components';
import bg from '../images/testBg.jpg';

const LoginPage = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;
const login = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        height: '100vh',
        opacity: '2',
        backgroundSize: 'cover',
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
              { required: true, message: 'Please input your Username!' },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              { required: true, message: 'Please input your Password!' },
            ]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <div className="buttonGroup">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                Log in
              </Button>
              <a href="/register" className=" register">
                新用户注册
              </a>
            </div>
          </Form.Item>
        </Form>
      </LoginPage>
    </div>
  );
};

export default login;
