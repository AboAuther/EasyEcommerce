import { EnvironmentTwoTone } from '@ant-design/icons';
import './buyDrawer.less';

const AddressMenu = props => {
  const { addressSource } = props;
  return (
    addressSource.length > 0 && (
      <div className="itemContentAddress">
        <EnvironmentTwoTone className="iconAddress" />
        <div className="address">
          <div className="addressContent">
            <span>{addressSource[0].userAddress}</span>
            {/* <span>{defaultAddress?.detail}</span> */}
          </div>
          <div className="userContent">
            {`${addressSource[0].userId}  `}
            {addressSource[0].mobile}
          </div>
        </div>
      </div>
    )
  );
};

export default AddressMenu;
