import { Button, Drawer, Space } from 'antd';
import './buyDrawer.less';
import addressSource from '../userCenter/ReceivingAddress/mock';
import AddressMenu from './AddressMenu';
import MessageChosen from './MessageChosen';

const BuyDrawer = (props: {
  visible?: boolean;
  onClose?: () => void;
  basicInfo?: {
    id: number;
    price: number;
    mainPicture: string;
    description: string;
  };
  num?: number | null;
  shoppingCatsList?: Array<{
    id: number;
    price: number;
    mainPicture: string;
    description: string;
    num: number;
    totalprice: number;
  }>;
  total?: number;
}) => {
  const { visible, onClose, basicInfo, num, shoppingCatsList, total } = props;
  return (
    <Drawer
      title="结算"
      placement="right"
      size="default"
      onClose={onClose}
      visible={visible}
      extra={
        <Space>
          <Button onClick={onClose}>取消</Button>
          <Button type="primary" onClick={onClose}>
            去结算
          </Button>
        </Space>
      }>
      <AddressMenu addressSource={addressSource} />
      {basicInfo !== undefined && num !== undefined ? (
        <>
          <MessageChosen basicInfo={basicInfo} num={num} />
        </>
      ) : (
        shoppingCatsList?.map(item => (
          <MessageChosen basicInfo={item} num={item.num} key={item.id} />
        ))
      )}
      {basicInfo !== undefined && num !== undefined ? (
        <div className="itemContentPay">
          <div className="priceContent">
            <h4>价格明细</h4>
            <div className="priceContent1">
              <p>商品总价</p>
              <p>
                ¥
                {num !== null
                  ? Number(basicInfo.price * num).toFixed(2)
                  : '0.00'}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="itemContentPay">
          <div className="priceContent">
            <h4>价格明细</h4>
            <div className="priceContent1">
              <p>商品总价</p>
              <p>¥{num !== null ? Number(total).toFixed(2) : '0.00'}</p>
            </div>
          </div>
        </div>
      )}
    </Drawer>
  );
};

export default BuyDrawer;
