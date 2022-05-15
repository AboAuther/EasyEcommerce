/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { Button, Form, Input, Row, Col, Tooltip, Drawer, message } from 'antd';
import './index.less';
import { useEffect, useState } from 'react';
import axios from 'axios';
import flower from '@/images/flower.png';
import mushroom from '@/images/mushroom.png';
import pinecone from '@/images/pinecone.png';
import cactus from '@/images/cactus.png';
import changeMessage from '@/images/changeMessage.png';
import { DOMAIN } from '@/constants';

const PersonalInformation = () => {
  const [visible, setVisbile] = useState(false);
  const [source, setSource] = useState();
  const [form] = Form.useForm();
  const getSource = async () => {
    await axios
      .get(`${DOMAIN}/user/getMessage?userID=${localStorage.getItem('userId')}`)
      .then(res => {
        if (res.data.entity.success) {
          setSource(res.data.entity.data);
        }
      });
  };
  useEffect(() => {
    getSource();
  }, []);
  const handleOpen = () => {
    setVisbile(true);
    form.setFieldsValue(source);
  };
  const handClose = () => {
    setVisbile(false);
  };
  const onFinish = async (values: any) => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/user/edit`,
      data: {
        userID: values.userID,
        nickName: values.nickName,
        mobile: values.mobile,
        information: values.information,
      },
    }).then(res => {
      if (res.data.entity.success) {
        handClose();
        getSource();
        message.success('修改成功！');
      } else {
        message.error('修改失败！');
      }
    });
  };

  return (
    <div className="messageContent">
      <Row>
        <Col offset={-6}>
          <Tooltip title="点我去修改信息">
            <div className="changeIcon" onClick={handleOpen}>
              <img src={changeMessage} width={30} height={30} />
            </div>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <img src={flower} width={30} height={30} className="messageLogo" />
        <div className="message">{source?.userID}</div>
      </Row>
      <Row>
        <img src={pinecone} width={30} height={30} className="messageLogo" />
        <div className="message">{source?.nickName}</div>
      </Row>
      <Row>
        <img src={cactus} width={30} height={30} className="messageLogo" />
        <div className="message">{source?.mobile}</div>
      </Row>
      <Row>
        <img src={mushroom} width={30} height={30} className="messageLogo" />
        <div className="message">
          {source?.information
            ? source?.information
            : '该用户很懒，什么都没有留下～～'}
        </div>
      </Row>
      <Drawer visible={visible} placement={'bottom'} onClose={handClose}>
        <Form name="nest-messages" onFinish={onFinish} form={form}>
          <Form.Item
            name="userID"
            label="用户名"
            rules={[
              {
                required: true,
                type: 'string',
                max: 10,
                message: '用户名长度应小于 10',
              },
            ]}>
            <Input disabled={true} />
          </Form.Item>
          <Form.Item
            name="nickName"
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
            name="mobile"
            label="手机号码"
            rules={[{ type: 'string', required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="information"
            label="自我介绍"
            rules={[
              {
                required: true,
                type: 'string',
              },
            ]}>
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default PersonalInformation;
