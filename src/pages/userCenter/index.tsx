import { Row, Select, Typography } from 'antd';
import { useState } from 'react';
import HeardSearch from '../home/components/heardSearch';
import './index.less';
import PersonalInformation from './PersonalInformation';
import ReceivingAddress from './ReceivingAddress';

const UserCenter = () => {
  const { Option } = Select;
  const [key, setKey] = useState(1);

  const handleChange = value => {
    setKey(value);
  };
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
            </Row>
            <Row style={{ padding: '10px 0' }}>
              {/* 个人资料 */}
              {key === 1 ? (
                <PersonalInformation
                // personalInformation={toJS(personalInformation)}
                // setPersonalInformation={setPersonalInformation}
                // avatar={toJS(avatar)}
                />
              ) : (
                ''
              )}
              {/* 修改登录密码
              {key == 2 ? (
                <LoginPassword
                  {...this.props}
                  loginPassword={toJS(state.loginPassword)}
                  setLoginPassword01={state.setLoginPassword01}
                />
              ) : (
                ''
              )} */}
              {/* 收货地址 */}
              {key === 2 ? <ReceivingAddress /> : ''}
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserCenter;
