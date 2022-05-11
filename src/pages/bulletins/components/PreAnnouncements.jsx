import '../index.less';
import { Col, Row } from 'antd';
import moment from 'moment';
import bg from '../images/bgImg.jpg';

const PreAnnouncements = props => {
  const { noticeMessage } = props;
  const noticeLeft = noticeMessage.length > 2 ? noticeMessage[1] : null;
  const noticeRight = noticeMessage.length > 2 ? noticeMessage[2] : null;
  return (
    <div>
      <Row className="title">往期公告</Row>
      <Row className="contentTopic">
        <Col>
          <img src={bg} width={300} height={310} className="bgImg" />
          {noticeLeft !== null ? (
            <div className="noticeContent">
              <div className="noticeTitle">{noticeLeft.Title}</div>
              <div className="showContent">{noticeLeft.Content}</div>
              <div className="createTime">
                {moment(noticeLeft.CreatedAt).format('YYYY-MM-DD')}
              </div>
            </div>
          ) : (
            <h3 className="noneTitle">暂无历史公告</h3>
          )}
        </Col>
        <Col offset={1}>
          <img src={bg} width={300} height={310} className="bgImg" />
          {noticeRight !== null ? (
            <div className="noticeContent">
              <div className="noticeTitle">{noticeRight.Title}</div>
              <div className="showContent">{noticeRight.Content}</div>
              <div className="createTime">
                {moment(noticeRight.CreatedAt).format('YYYY-MM-DD')}
              </div>
            </div>
          ) : (
            <h3 className="noneTitle">暂无历史公告</h3>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default PreAnnouncements;
