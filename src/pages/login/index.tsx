import { Form, Input, Button, message, Radio } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

import './index.less';
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from '@modern-js/runtime/router';
import { useModel } from '@modern-js/runtime/model';
import { useState } from 'react';
import bg from '../images/testBg.jpg';
import { DOMAIN } from '@/constants';
import stateModel from '@/store/store';

const LoginPage = styled.div`
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;

const Login = () => {
  const history = useHistory();
  const [, actions] = useModel(stateModel);
  const [checkdValue, setCheckedValue] = useState(undefined);
  const onFinish = async (values: any) => {
    if (checkdValue === undefined) {
      message.error('请选择身份');
    } else {
      await axios({
        method: 'post',
        url: `${DOMAIN}/user/login`,
        data: {
          userID: values.username,
          password: values.password,
          is_seller: checkdValue === 1,
        },
      })
        .then(res => {
          const { success } = res.data.entity;
          if (success) {
            actions.setUserId(res.data.entity.data);
            localStorage.setItem('userId', res.data.entity.data);
            if (checkdValue === 1) {
              history.push('/businessman');
            } else {
              history.push('/');
            }
          }
        })
        .catch(_ => {
          message.error('用户名或密码错误，请重新登陆！');
        });
    }
  };
  const handleChange = (e: any) => {
    setCheckedValue(e.target.value);
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
          <Form.Item rules={[{ required: true, message: '请输入密码!' }]}>
            {/* <div className="radioGroup"> */}
            <Radio.Group style={{ margin: '0  105px' }}>
              <Radio
                value={1}
                style={{ color: '#fff' }}
                onChange={handleChange}>
                商家
              </Radio>
              <Radio
                value={2}
                style={{ color: '#fff' }}
                onChange={handleChange}>
                用户
              </Radio>
            </Radio.Group>
            {/* </div> */}
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
