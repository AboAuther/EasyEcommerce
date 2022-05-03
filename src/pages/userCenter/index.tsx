import { Row, Select, Typography, Button, Popover } from 'antd';
import { useState } from 'react';
import styled from 'styled-components';
import HeardSearch from '../home/components/heardSearch';
import './index.less';
import PersonalInformation from './PersonalInformation';
import ReceivingAddress from './ReceivingAddress';
import Join from './join';

const JoinButton = styled(Button)`
  position: absolute;
  right: 350px;
  border-radius: 10px;
  background-color: #00003f;
`;
const UserCenter = () => {
  const { Option } = Select;
  const [key, setKey] = useState(1);
  const [visible, setVisible] = useState(false);

  const openDraw = () => {
    setVisible(true);
  };

  const closeDraw = () => {
    setVisible(false);
  };

  const handleChange = (value: number) => {
    setKey(value);
  };
  const content = (
    <div>
      <p>提交信息，注册成为商家</p>
    </div>
  );
  return (
    <div className="content">
      <div className="orderHead">
        <HeardSearch currentIndex={''} isDisplay={true} />
      </div>
      <div className="orderContent">
        <div className="content_card">
          <div className="common_width dm_UserCenter">
            <Row className="table_title">
              <Typography.Title level={4}>用户中心</Typography.Title>
              <Select
                defaultValue={key}
                onChange={value => handleChange(value)}>
                <Option value={1}>个人资料</Option>
                <Option value={2}>收货地址</Option>
              </Select>
              <Popover content={content}>
                <JoinButton type="primary" onClick={() => openDraw()}>
                  成为商家
                </JoinButton>
              </Popover>
            </Row>
            <Row style={{ padding: '10px 0' }}>
              {/* 个人资料 */}
              {key === 1 ? <PersonalInformation /> : ''}
              {/* 收货地址 */}
              {key === 2 ? <ReceivingAddress /> : ''}
            </Row>
          </div>
        </div>
      </div>
      <Join visible={visible} closeDraw={closeDraw} />
    </div>
  );
};
export default UserCenter;
