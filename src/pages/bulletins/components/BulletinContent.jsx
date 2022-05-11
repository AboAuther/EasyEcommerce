import PreAnnouncements from './PreAnnouncements';
import '../index.less';
import TopicNotice from './TopicNotice';

const BulletinContent = () => {
  return (
    <div className="layoutContent">
      <TopicNotice />
      <PreAnnouncements />
    </div>
  );
};

export default BulletinContent;
