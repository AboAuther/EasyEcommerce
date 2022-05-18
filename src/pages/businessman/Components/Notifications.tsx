import { Row, Col } from 'antd';
import './index.less';

export const Notifications = (props: { data: any }) => {
  const { data } = props;
  const styles = {
    noticeItem: {
      display: 'flex',
      flexBasis: '50%',
      padding: '20px',
    },
    noticeItemTitle: {
      marginBottom: '10px',
      fontSize: '14px',
      color: '#333',
    },
    noticeItemBody: {
      display: 'flex',
    },
    bodyItem: {
      display: 'flex',
      flexBasis: '33%',
      color: '#999',
      fontSize: '13px',
      marginBottom: '10px',
    },
  };
  return (
    <div className="real-content">
      <span>
        <p className="title">重要提醒</p>
      </span>
      <Row wrap>
        <Col span="10" offset={2}>
          <div style={styles.noticeItem}>
            <div style={styles.noticeItemTitle}>订单相关</div>
            <div className="noticeItemBody">
              <div style={styles.bodyItem}>
                订单总数：<a href="#">{data?.allOrders}</a>
              </div>
              <div style={styles.bodyItem}>
                待处理退款：<a href="#">{data?.rejectOrders}</a>
              </div>
            </div>
          </div>
        </Col>

        <Col span="10" offset={2}>
          <div style={styles.noticeItem}>
            <div style={styles.noticeItemTitle}>商品相关</div>
            <div className="noticeItemBody">
              <div style={styles.bodyItem}>
                门店在售：<a href="#">{data?.saleNum}</a>
              </div>
              <div style={styles.bodyItem}>
                门店售罄：<a href="#">{data?.saleOutNum}</a>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default Notifications;
