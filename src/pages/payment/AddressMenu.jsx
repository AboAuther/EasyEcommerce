/* eslint-disable no-nested-ternary */
/* eslint-disable react/no-unused-prop-types */
import { DownCircleTwoTone, EnvironmentTwoTone } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';
import { useState } from 'react';
import './buyDrawer.less';

const AddressMenu = (props: {
  addressSource: Array<{
    id: number,
    region: string,
    detail: string,
    name: string,
    phone: string,
    default: boolean,
  }>,
  changeAddress: (chosen: any) => void,
}) => {
  const { addressSource, changeAddress } = props;
  const chosenAddress =
    addressSource !== undefined
      ? addressSource.find(item => item.default === true) === undefined
        ? addressSource[0]
        : addressSource.find(item => item.default === true)
      : undefined;
  const [defaultAddress, setDefaultAddress] = useState(chosenAddress);
  const handleClick = (id: string) => {
    const chosen = addressSource.find(
      (address: { ID: number }) => address.ID === Number(id),
    );

    setDefaultAddress(chosen);
    handleChosenChange(chosen);
  };
  const handleChosenChange = (chosen: any) => {
    changeAddress(chosen);
  };
  const menu = () => (
    <Menu>
      {addressSource !== undefined &&
        addressSource.map(
          (address: {
            ID: number,
            region: string,
            detail: string,
            name: string,
            mobile: string,
          }) => (
            <Menu.Item key={address.ID} onClick={() => handleClick(address.ID)}>
              <span style={{ margin: '0 5px' }}>{address.region}</span>
              <span style={{ margin: '0 5px' }}>{address.detail}</span>
              <span style={{ margin: '0 5px' }}>{address.name}</span>
              <span>{address.mobile}</span>
            </Menu.Item>
          ),
        )}
    </Menu>
  );

  return (
    <div className="itemContentAddress">
      <EnvironmentTwoTone className="iconAddress" />
      {defaultAddress !== undefined && (
        <div className="address">
          <div className="addressContent">
            <span>{defaultAddress?.region}</span>
            <span>{defaultAddress?.detail}</span>
          </div>
          <div className="userContent">
            {`${defaultAddress?.name} `}
            {defaultAddress?.mobile}
          </div>
        </div>
      )}

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
