import HeardSearch from '../home/components/heardSearch';
import ShowMessage from './components/showMessage';
import './index.less';

const Index = () => {
  return (
    <div className="commentsContent">
      <HeardSearch currentIndex="4" isDisplay={false} />
      <ShowMessage />
    </div>
  );
};

export default Index;
