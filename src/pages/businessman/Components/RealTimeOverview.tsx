import { Row, Col } from 'antd';
import './index.less';
import pic from './images/TB1iFKccamWBuNjy1XaXXXCbXXa-140-140.png';
import pic2 from './images/TB1Py4_ceuSBuNjy1XcXXcYjFXa-142-140.png';

const RealTimeOverview = () => {
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
  };
  return (
    <div className="real-content">
      <span>
        <p className="title">实时概况</p>
      </span>
      <Row wrap>
        <Col span="12">
          <div style={styles.dataItem}>
            <img src={pic} alt="" style={styles.dataItemImg} />
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>门店销售额(元)</div>
              <div style={styles.unitAmount}>982.00</div>
              <div style={styles.unitFooter}>昨日：680.00</div>
            </div>
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>门店支付订单数</div>
              <div style={styles.unitAmount}>80</div>
              <div style={styles.unitFooter}>昨日：60</div>
            </div>
          </div>
        </Col>
        <Col span="12">
          <div style={styles.dataItem}>
            <img src={pic2} alt="" style={styles.dataItemImg} />
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>新增客户数</div>
              <div style={styles.unitAmount}>182</div>
              <div style={styles.unitFooter}>昨日：123</div>
            </div>
            <div style={styles.dataItemUnit} className="content">
              <div style={styles.unitTitle}>支付客户数</div>
              <div style={styles.unitAmount}>96</div>
              <div style={styles.unitFooter}>昨日：90</div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default RealTimeOverview;
