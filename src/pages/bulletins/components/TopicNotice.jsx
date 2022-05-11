import '../index.less';
import moment from 'moment';
import topic from '../images/topic.png';

const TopicNotice = props => {
  const { noticeMessage } = props;
  const topicNotice = noticeMessage.length > 0 ? noticeMessage[0] : null;

  return topicNotice !== null ? (
    <div className="topicContent">
      <img src={topic} width={700} height={300} className="topicBg" />
      <h1 className="web-font">{topicNotice.Title}</h1>
      <div className="topic-show">{topicNotice.Content}</div>
      <div className="topic-time">
        {moment(topicNotice.CreatedAt).format('YYYY-MM-DD')}
      </div>
    </div>
  ) : (
    <div className="topicContent">
      <img src={topic} width={700} height={300} className="topicBg" />
      <h1 className="web-font">暂无公告</h1>
    </div>
  );
};

export default TopicNotice;
