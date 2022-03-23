import { RouteComponentProps } from '@modern-js/runtime/router';
import HeardSearch from '../../home/components/heardSearch';
import CommoditySpecification from './component/CommoditySpecification';
import './index.less';

const ProductsDetails = ({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) => {
  console.info(id);
  return (
    <div className="dm_Products">
      <HeardSearch currentIndex={'2'} />
      <div className="common-with">
        <div className="page-all">
          <CommoditySpecification />
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
