import HeardSearch from '../home/components/heardSearch';
import BulletinContent from './components/BulletinContent';
import './index.less';

const Index = () => {
  return (
    <div className="bulletin">
      <HeardSearch currentIndex="3" isDisplay={false} />
      <BulletinContent />
    </div>
  );
};

export default Index;
