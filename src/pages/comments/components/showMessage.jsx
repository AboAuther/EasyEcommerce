/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable no-nested-ternary */
import {
  Comment,
  Tooltip,
  List,
  Tag,
  Button,
  Drawer,
  Form,
  Row,
  Radio,
  Input,
  message,
} from 'antd';
import { useEffect, useState } from 'react';
import moment from 'moment';
// import message from '../mock';
import '../index.less';
import axios from 'axios';
import { DOMAIN } from '@/constants';

const getData = record => {
  const data = record.map(item => {
    const result = {
      author: item.Nickname,
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <div>
          {item.Topic === 'praise' ? (
            <Tag color="green">表扬👍</Tag>
          ) : item.Topic === 'critique' ? (
            <Tag color="orange">批评一下</Tag>
          ) : (
            <Tag color="purple">建议</Tag>
          )}
          <p className="all_content">{item.Content}</p>
        </div>
      ),
      datetime: (
        <Tooltip title={moment(item.CreatedAt).format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(item.CreatedAt).format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
      ),
    };
    return result;
  });
  return data;
};

const ShowMessage = () => {
  const [visible, setVisible] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const getSource = async () => {
    await axios.get(`${DOMAIN}/message/board?is_verify=true`).then(res => {
      if (res.data.entity.success) {
        setDataSource(res.data.entity.data);
      }
    });
  };

  useEffect(() => {
    getSource();
  }, []);
  const data = getData(dataSource);
  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const handleSubmit = async (value: any) => {
    const id = localStorage.getItem('userId');
    await axios({
      method: 'post',
      url: `${DOMAIN}/message/addMessage`,
      data: {
        userID: id,
        nickname: 'xiaojun',
        topic: value.topic,
        content: value.content,
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('流程成功！！');
        getSource();
      } else {
        message.error('抱歉，留言失败，请重试！');
      }
    });
    handleClose();
  };
  return (
    <div className="messageContent">
      <List
        className="comment-list"
        header={
          <div className="header">
            <span>{data.length} 条留言</span>{' '}
            <Button type="text" className="gotoAdd" onClick={handleOpen}>
              去留言
            </Button>
          </div>
        }
        itemLayout="horizontal"
        dataSource={data}
        renderItem={item => (
          <li>
            <Comment
              author={item.author}
              avatar={item.avatar}
              content={item.content}
              datetime={item.datetime}
            />
          </li>
        )}
      />
      <Drawer
        title="留言信息"
        placement="bottom"
        visible={visible}
        onClose={handleClose}>
        <Form onFinish={handleSubmit}>
          <Row>
            <Form.Item
              name="topic"
              label="请选择类型"
              rules={[{ required: true, message: '请选择类型' }]}>
              <Radio.Group>
                <Radio value="praise">表扬👍</Radio>
                <Radio value="critique">批评一下</Radio>
                <Radio value="advice">提点建议</Radio>
              </Radio.Group>
            </Form.Item>
          </Row>
          <Form.Item
            name="content"
            label="输入留言"
            rules={[{ required: true, message: '请输入内容' }]}>
            <Input.TextArea
              allowClear={true}
              showCount={true}
              maxLength={100}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 23, span: 16 }}>
            <Button type="primary" htmlType="submit">
              确认
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
};

export default ShowMessage;
