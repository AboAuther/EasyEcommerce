import { Row, Col } from 'antd';
import StoreMessage from '../mock';
import './layout.less';
import shopName from './images/shopName.png';
import pic1 from './images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png';
import address from './images/storeAddress.png';
import moment from 'moment';

const StoreDataMessage = (props: { source: any }) => {
  const { source } = props;
  const styles = {
    dataItem: {
      display: 'flex',
      flexBasis: '50%',
      padding: '20px',
      alignItems: 'center',
    },
    dataItemImg: {
      width: '58px',
      height: '58px',
      marginRight: '30px',
    },
    dataItemUnit: {
      height: '72px',
      display: 'flex',
      flexBasis: '50%',
      // flexDirection: 'column',
      justifyContent: 'space-between',
    },
    unitTitle: {
      color: '#666',
      fontSize: '12px',
    },
    unitAmount: {
      color: '#333',
      fontSize: '24px',
    },
    unitFooter: {
      color: '#999',
      fontSize: '12px',
    },
    shopItem: {
      color: '#333',
      fontSize: '22px',
      margin: '0 0 19px 0 ',
    },
  };
  return (
    <div className="real-content">
      <span>
        <p className="title">门店详情</p>
      </span>
      <Row wrap>
        <Col span={12}>
          <div style={styles.dataItem}>
            <img src={shopName} alt="" style={styles.dataItemImg} />
            <div className="dataItemUnitShop">
              <div style={styles.unitTitle}>商店名称</div>
              <div style={styles.shopItem}>{source?.shopName}</div>
            </div>
            <div className="dataItemUnitShop">
              <div style={styles.unitTitle}>注册时间</div>
              <div style={styles.shopItem}>
                {moment(source?.createdAt).format('YYYY-MM-DD')}
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={styles.dataItem}>
            <img src={pic1} alt="" style={styles.dataItemImg} />
            <div className="dataItemUnitShop">
              <div style={styles.unitTitle}>店长昵称</div>
              <div style={styles.shopItem}>{source?.nickName}</div>
            </div>
            <div className="dataItemUnitShop">
              <div style={styles.unitTitle}>门店总销售额</div>
              <div style={styles.unitAmount}>¥ {source?.totalPrice}</div>
              <div style={styles.unitFooter}>
                昨日：¥ {source?.yesterDayPrice}
              </div>
            </div>
          </div>
        </Col>
        <Col span={12}>
          <div style={styles.dataItem}>
            <img src={address} alt="" style={styles.dataItemImg} />
            <div className="dataItemUnitShop">
              <div style={styles.unitTitle}>注册地址</div>
              <div style={styles.shopItem}>{source?.registerAddress}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default StoreDataMessage;
