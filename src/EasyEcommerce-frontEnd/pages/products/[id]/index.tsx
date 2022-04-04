import { RouteComponentProps } from '@modern-js/runtime/router';
import HeardSearch from '../../home/components/heardSearch';
import CommodityDetails from './component/CommodityDetails';
import CommoditySpecification from './component/CommoditySpecification';
import './index.less';

const ProductsDetails = ({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) => (
  <div className="dm_Products">
    <HeardSearch currentIndex={'2'} isDisplay={false} />
    <div className="common-with">
      <div className="page-all">
        <CommoditySpecification id={id} />
        <CommodityDetails />
      </div>
    </div>
  </div>
);

export default ProductsDetails;
