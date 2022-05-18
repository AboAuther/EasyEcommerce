import { Row, Col } from 'antd';
import './index.less';
import pic from './images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png';
import pic2 from './images/TB1Py4_ceuSBuNjy1XcXXcYjFXa-142-140.png';
import picAdd from './images/TB1Ni4_ceuSBuNjy1XcXXcYjFXa-142-140.png';

const RealTimeOverview = (props: { data: any }) => {
  const { data } = props;
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
  };
  return (
    <div className="real-content">
      <span>
        <p className="title">实时概况</p>
      </span>
      <Row wrap>
        <Col span="6" offset={2}>
          <div style={styles.dataItem}>
            <img src={pic} alt="" style={styles.dataItemImg} />
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>门店销售额(元)</div>
              <div style={styles.unitAmount}>{data?.totalPrice}</div>
              <div style={styles.unitFooter}>昨日：{data?.yesterdayPrice}</div>
            </div>
          </div>
        </Col>
        <Col span="6" offset={2}>
          <div style={styles.dataItem}>
            <img src={picAdd} alt="" style={styles.dataItemImg} />
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>门店支付订单数</div>
              <div style={styles.unitAmount}>{data?.totalOrders}</div>
              <div style={styles.unitFooter}>昨日：{data?.yesterdayOrders}</div>
            </div>
          </div>
        </Col>
        <Col span="6" offset={2}>
          <div style={styles.dataItem}>
            <img src={pic2} alt="" style={styles.dataItemImg} />
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>今日活跃客户</div>
              <div style={styles.unitAmount}>{data?.totalUsers}</div>
              <div style={styles.unitFooter}>昨日：{data?.yesterdayUsers}</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RealTimeOverview;
