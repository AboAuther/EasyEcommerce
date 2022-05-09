import { DownCircleTwoTone, EnvironmentTwoTone } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useState } from 'react';
import './buyDrawer.less';

const AddressMenu = (props: { addressSource: Array<{
  id: number;
          region: string;
          detail: string;
          name: string;
          phone: string;
          isDefault: boolean
}> }) => {
  const { addressSource } = props;
  const [defaultAddress, setDefaultAddress] = useState(
    addressSource.find((item: { isDefault: boolean }) => item.isDefault),
  );
  const handleClick = (id: string) => {
    const chosen = addressSource.find(
      (address: { id?: number }) => address.id === Number(id),
    );
    setDefaultAddress(chosen);
  };
  const menu = () => (
    <Menu>
      {addressSource.map(
        (address: {
          id: number;
          region: string;
          detail: string;
          name: string;
          phone: string;
        }) => (
          <Menu.Item key={address.id} onClick={key => handleClick(key.key)}>
            <span style={{ margin: '0 5px' }}>{address.region}</span>
            <span style={{ margin: '0 5px' }}>{address.detail}</span>
            <span style={{ margin: '0 5px' }}>{address.name}</span>
            <span>{address.phone}</span>
          </Menu.Item>
        ),
      )}
    </Menu>
  );
  return (
    <div className="itemContentAddress">
      <EnvironmentTwoTone className="iconAddress" />
      <div className="address">
        <div className="addressContent">
          <span>{defaultAddress?.region}</span>
          <span>{defaultAddress?.detail}</span>
        </div>
        <div className="userContent">
          {defaultAddress?.name}
          {defaultAddress?.phone}
        </div>
      </div>
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}>
        <DownCircleTwoTone className="iconChosen" />
      </Dropdown>
    </div>
  );
};

export default AddressMenu;
