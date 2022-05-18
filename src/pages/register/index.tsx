import { Form, Input, Button, message } from 'antd';
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
import axios from 'axios';
import { useHistory } from '@modern-js/runtime/router';
import bg from '../images/testBg.jpg';
import { DOMAIN } from '@/constants';

interface FinishValue {
  confirm: string;
  detail: string;
  nickname: string;
  password: string;
  phone: string;
  region: string;
  username: string;
}
const LoginPage = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;
const Register = () => {
  const history = useHistory();
  const onFinish = async (values: FinishValue) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/user/register`,
      data: {
        userID: values.username,
        nickName: values.nickname,
        mobile: values.phone,
        password: values.password,
        region: values.region,
        address: values.detail,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('注册成功');
        history.push('./login');
      } else {
        message.error('注册失败');
      }
    });
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
              {
                type: 'string',
                required: true,
                message: '用户名长度应小于 10',
                max: 10,
              },
            ]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="用户名"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                type: 'string',
                min: 6,
                max: 20,
                message: '密码长度应为 6-10 位',
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
                    new Error('两次输入的密码不通，请重新输入!'),
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
                type: 'string',
                message: '昵称长度应小于10',
                whitespace: true,
                max: 10,
              },
            ]}>
            <Input placeholder="昵称" prefix={<IdcardOutlined />} />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                type: 'string',
                message: '联系方式长度应小于 11',
                max: 11,
              },
            ]}>
            <Input
              prefix={<WhatsAppOutlined />}
              style={{ width: '100%' }}
              placeholder="联系方式"
            />
          </Form.Item>
          <Form.Item
            name="region"
            rules={[{ required: true, message: 'Please input your Address!' }]}>
            <Input
              prefix={<HomeOutlined />}
              style={{ width: '100%' }}
              placeholder="所在地区"
            />
          </Form.Item>
          <Form.Item
            name="detail"
            rules={[{ required: true, message: 'Please input your Address!' }]}>
            <Input
              prefix={<HomeOutlined />}
              style={{ width: '100%' }}
              placeholder="详细地址"
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

export default Register;
