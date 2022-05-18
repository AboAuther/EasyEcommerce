import { RouteComponentProps } from '@modern-js/runtime/router';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Alert } from 'antd';
import HeadSearch from '../../home/components/headSearch';
import ProductDetails from './component/ProductDetails';
import ProductSpecification from './component/ProductSpecification';
import { DOMAIN } from '@/constants';
import './index.less';
import noContent from '@/images/noContent.png';

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
      <HeadSearch currentIndex={'2'} isDisplay={false} />
      {!localStorage.getItem('userId') ? (
        <div>
          <Alert description="请登录后查看" type="warning" showIcon closable />
          <div className="nullPage">
            <img src={noContent} className="nullImage" />
          </div>
        </div>
      ) : (
        <div className="common-with">
          <div className="page-all">
            {message !== undefined && (
              <>
                <ProductSpecification basicInfo={message?.product} />
                <ProductDetails
                  comment={message.evaluation}
                  basicInfo={message.product}
                />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductsDetails;
