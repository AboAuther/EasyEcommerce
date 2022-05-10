import { RouteComponentProps } from '@modern-js/runtime/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import HeardSearch from '../../home/components/heardSearch';
import CommodityDetails from './component/CommodityDetails';
import CommoditySpecification from './component/CommoditySpecification';
import { DOMAIN } from '@/constants';
import './index.less';

const ProductsDetails = ({
  match: {
    params: { id },
  },
}: RouteComponentProps<{ id: string }>) => {
  const [message, setMessage] = useState<{
    product: any;
    evaluation: any;
  }>();
  useEffect(() => {
    const getList = async () => {
      await axios.get(`${DOMAIN}/product/id/${id}`).then(res => {
        setMessage(res.data.entity.data);
      });
    };
    getList();
  }, []);
  return (
    <div className="dm_Products">
      <HeardSearch currentIndex={'2'} isDisplay={false} />
      <div className="common-with">
        <div className="page-all">
          {message !== undefined && (
            <>
              <CommoditySpecification basicInfo={message?.product} />
              <CommodityDetails
                comment={message.evaluation}
                basicInfo={message.product}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductsDetails;
