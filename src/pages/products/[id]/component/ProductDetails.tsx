import { Tabs } from 'antd';
import ProductEvaluation from './ProductEvaluation';
import './index.less';

const ProductDetails = ({ comment, basicInfo }: any) => {
  const { TabPane } = Tabs;
  return (
    <div className="ProductDetails">
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
          <ProductEvaluation comment={comment} />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ProductDetails;
