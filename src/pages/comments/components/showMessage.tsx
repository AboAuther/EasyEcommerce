import { Comment, Tooltip, List, Tag, Button, Drawer, Space, Form, Row, Radio, Input } from 'antd';
import moment from 'moment';
import message  from "../mock/index";
import '../index.less';
import { useState } from 'react';
const getData = (record: { id: number; nickname: string; topic: string; content: string; create_at: string }[]) => {

  const data = record.map((item: { nickname: string; topic: string; content: string; create_at: string }) => {
    const result = {
      author: item.nickname,
      avatar: 'https://joeschmoe.io/api/v1/random',
      content: (
        <div>
          {
            item.topic === 'praise' ? <Tag color="green">{item.topic}</Tag>
            : item.topic === 'critique' ? <Tag color="orange">{item.topic}</Tag>
            :<Tag color="purple">{item.topic}</Tag>
          }
           <p className='all_content'>{item.content}</p>
        </div>
      ),
      datetime: (
        <Tooltip title={moment(item.create_at).format('YYYY-MM-DD HH:mm:ss')}>
          <span>{moment(item.create_at).format('YYYY-MM-DD HH:mm:ss')}</span>
        </Tooltip>
      ),
    }
    return result;
  })
  return data;
}





const ShowMessage  = () => {
  const [visible, setVisible] = useState(false);
  const data = getData(message);
  const handleOpen = () => {
    setVisible(true);
  };
  const handleClose = () => {
    setVisible(false);
  };
  const handleSubmit = (value: any) => {
    handleClose();
  }
  return (

  <div className='messageContent'>
    <List
        className="comment-list"
        header={<div className='header'><span>{data.length} 条留言</span> <Button type='text' className='gotoAdd' onClick={handleOpen}>去留言</Button></div>}
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
      <Drawer title='留言信息' placement='bottom' visible={visible} onClose={handleClose}
      >
        <Form onFinish={handleSubmit} >
          <Row>
            <Form.Item name='topic' label='请选择类型' rules={[{ required: true, message: '请选择类型' }]}>
              <Radio.Group>
                <Radio value='praise'>表扬👍</Radio>
                <Radio value='critique'>批评以下</Radio>
                <Radio value='advice'>提点建议</Radio>
              </Radio.Group>
            </Form.Item>
          </Row>
            <Form.Item name='content' label='输入留言' rules={[{ required: true, message: '请输入内容' }]}>
              <Input.TextArea allowClear={true} showCount={true} maxLength={100} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 23, span: 16 }}>
              <Button type="primary" htmlType="submit">
                确认
              </Button>
            </Form.Item>
        </Form>
      </Drawer>
  </div>
  )
};

export default ShowMessage;
