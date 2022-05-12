import { Form, Input, Button, message, Radio, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.less';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import bg from '../images/testBg.jpg';
import { DOMAIN } from '@/constants';
import stateModel from '@/store/store';
import { SetStateAction, useState } from 'react';

const LoginPage = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const history = useHistory();
  const [state, actions] = useModel(stateModel);
  const [checkdValue, setCheckedValue] = useState();
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/user/login`,
      data: {
        userID: values.username,
        password: values.password,
      },
    })
      .then(res => {
        const { success } = res.data.entity;
        if (success) {
          actions.setUserId(res.data.entity.data);

          history.push('/');
        }
      })
      .catch(_ => {
        message.error('用户名或密码错误，请重新登陆！');
      });
  };
  const handleChange = (e: any) => {
    setCheckedValue(e.target.checked)
  }
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
            rules={[{ required: true, message: '请输入用户名!' }]}>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: '请输入密码!' }]}>
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item  rules={[{ required: true, message: '请选择身份!' }]}>
           <Checkbox onChange={handleChange}><span style={{color: '#fff'}}>商家</span></Checkbox>
           <Checkbox onChange={handleChange}><span style={{color: '#fff'}}>用户</span></Checkbox>
          </Form.Item>
          <Form.Item>
            <div className="buttonGroup">
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button">
                登陆
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

export default Login;
