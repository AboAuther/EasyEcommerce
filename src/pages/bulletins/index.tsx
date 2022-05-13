import HeadSearch from '../home/components/headSearch';
import BulletinContent from './components/BulletinContent';
import './index.less';

const Index = () => {
  return (
    <div className="bulletin">
      <HeadSearch currentIndex="3" isDisplay={false} />
      <BulletinContent />
    </div>
  );
};

export default Index;
