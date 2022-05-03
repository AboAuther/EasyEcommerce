import { Tabs } from 'antd';
import CommodityEvaluation from './CommodityEvaluation';
import './index.less';

const CommodityDetails = ({ comment, basicInfo }) => {
  const { TabPane } = Tabs;
  return (
    <div className="CommodityDetails">
      <Tabs defaultActiveKey="1" style={{ padding: '0 20px', color: '#666' }}>
        <TabPane tab={<span className="tab_title">商品介绍</span>} key={1}>
          {basicInfo ? (
            <>
              <div>{basicInfo.productDetailContent}</div>
              <div>{basicInfo.productIntro}</div>
            </>
          ) : (
            ''
          )}
        </TabPane>
        <TabPane tab={<span className="tab_title">商品评价</span>} key={2}>
          <CommodityEvaluation comment={comment} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CommodityDetails;
