/* eslint-disable filenames/match-exported */
import { Drawer } from 'antd';
import './buyDrawer.less';
import AddressMenu from './AddressMenu';
import MessageChosen from './MessageChosen';

const OrderDrawer = props => {
  const { visible, onClose, shoppingCatsList } = props;
  let total = 0;
  shoppingCatsList?.forEach(item => {
    total += item.totalPrice;
  });
  return (
    <Drawer
      title="订单详情"
      placement="right"
      size="default"
      onClose={onClose}
      visible={visible}>
      <AddressMenu addressSource={shoppingCatsList} />
      {shoppingCatsList?.map((item, index) => (
        <MessageChosen basicInfo={item} num={item.productNum} key={index} />
      ))}

      <div className="itemContentPay">
        <div className="priceContent">
          <h4>价格明细</h4>
          <div className="priceContent1">
            <p>商品总价</p>
            <p>¥{Number(total).toFixed(2)}</p>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderDrawer;
