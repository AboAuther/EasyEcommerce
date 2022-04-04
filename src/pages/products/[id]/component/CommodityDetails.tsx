import { Tabs } from 'antd';
import CommodityEvaluation from './CommodityEvaluation';
import './index.less';

const CommodityDetails = () => {
  const { TabPane } = Tabs;
  return (
    <div className="CommodityDetails">
      <Tabs
        defaultActiveKey="1"
        style={{ padding: '0 20px', color: '#666' }}
        // onChange={this.tabsChange}
      >
        <TabPane tab={<span className="tab_title">商品介绍</span>} key={1}>
          <p>评价</p>
          {/* <Parameter params={params} /> */}
          {/* <Pictures detailsPic={detailsPic} /> */}
        </TabPane>
        <TabPane tab={<span className="tab_title">商品评价</span>} key={2}>
          <p>介绍</p>
          {/* {key == 2 ? : ''} */}
          <CommodityEvaluation />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default CommodityDetails;
