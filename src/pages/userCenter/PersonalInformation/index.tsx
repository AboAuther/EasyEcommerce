import { Button, Form, Input, InputNumber, Row, Col, Tooltip, Drawer } from 'antd';
import './index.less';
import flower from '@/images/flower.png';
import mushroom from '@/images/mushroom.png';
import pinecone from '@/images/pinecone.png';
import cactus from '@/images/cactus.png';
import changeMessage from '@/images/changeMessage.png';
import { useState } from 'react';
const personalInformation = () => {
  const [visible, setVisbile] = useState(false);
  const handleOpen = () => {
    setVisbile(true);
  }
  const handClose = () => {
    setVisbile(false);
  }
  const onFinish = (values: any) => {
    console.log('finish', values);
  };

  return (
    <div className='messageContent'>
         <Row>
        <Col offset={-6}>
          <Tooltip title='点我去修改信息'>
          <div className='changeIcon' onClick={handleOpen}>
          <img src={changeMessage} width={30} height={30}/>
          </div>
          </Tooltip>
        </Col>
      </Row>
      <Row>
        <img src={flower} width={30} height={30} className='messageLogo' />
        <div className='message'>caohuijun</div>
      </Row>
      <Row>
        <img src={pinecone} width={30} height={30} className='messageLogo'/>
        <div className='message'>小珺就是我</div>
      </Row>
      <Row>
        <img src={cactus} width={30} height={30} className='messageLogo' />
        <div className='message'>18758777271</div>
      </Row>
      <Row>
        <img src={mushroom} width={30} height={30}  className='messageLogo'/>
        <div className='message'>该用户很懒，什么都没有留下～～</div>
      </Row>
      <Drawer visible={visible} placement={'bottom'}  onClose={handClose}>
      <Form
      name="nest-messages"
      onFinish={onFinish}

    >
      <Form.Item
        name={['user', 'name']}
        label="用户名"
        rules={[
          {
            required: true,
            type: 'string',
            max: 10,
            message: '用户名长度应小于 10',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        name={['user', 'nickName']}
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
        name={['user', 'phone']}
        label="手机号码"
        rules={[{ type: 'string', required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name={['user', 'introduction']} label="自我介绍"  rules={[
          {
            required: true,
            type: 'string',
          },
        ]}>
        <Input.TextArea />
      </Form.Item>
      <Form.Item >
        <Button type="primary" htmlType="submit">
          提交
        </Button>
      </Form.Item>
    </Form>
      </Drawer>


    </div>

  );
};

export default personalInformation;
