import HeadSearch from '../home/components/headSearch';
import ShowMessage from './components/showMessage';
import './index.less';

const Index = () => {
  return (
    <div className="commentsContent">
      <HeadSearch currentIndex="4" isDisplay={false} />
      <ShowMessage />
    </div>
  );
};

export default Index;
