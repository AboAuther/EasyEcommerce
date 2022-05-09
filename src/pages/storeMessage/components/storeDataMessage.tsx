import { Row, Col } from "antd";
import StoreMessage from "../mock/index";
import './layout.less';

const StoreDataMessage = () => {
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
      <span><p className="title">门店详情</p></span>
      <Row wrap>
          <Col span={12}>
            <div style={styles.dataItem}>
              <img
                src={require('./images/shopName.png')}
                alt=""
                style={styles.dataItemImg}
              />
              <div style={styles.dataItemUnit}>
                <div style={styles.unitTitle}>商店名字</div>
                <div style={styles.shopItem}>{StoreMessage[0].storeName}</div>
              </div>
              <div style={styles.dataItemUnit}>
                <div style={styles.unitTitle}>注册时间</div>
                <div style={styles.shopItem}>{StoreMessage[0].regimes}</div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div style={styles.dataItem}>
              <img
                src={require('./images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png')}
                alt=""
                style={styles.dataItemImg}
              />
              <div style={styles.dataItemUnit}>
                <div style={styles.unitTitle}>店长昵称</div>
                <div style={styles.shopItem}>{StoreMessage[0].ownerName}</div>
              </div>
              <div style={styles.dataItemUnit}>
                <div style={styles.unitTitle}>门店总销售额</div>
                <div style={styles.unitAmount}>¥ {StoreMessage[0].amountSales}</div>
                <div style={styles.unitFooter}>昨日：¥ 32000</div>
              </div>
            </div>
          </Col>
          <Col span={12}>
            <div style={styles.dataItem}>
              <img
                src={require('./images/storeAddress.png')}
                alt=""
                style={styles.dataItemImg}
              />
              <div style={styles.dataItemUnit}>
                <div style={styles.unitTitle}>注册地址</div>
                <div style={styles.shopItem}>{StoreMessage[0].address}</div>
              </div>
            </div>
          </Col>
        </Row>
    </div>
  )
}

export default StoreDataMessage;
