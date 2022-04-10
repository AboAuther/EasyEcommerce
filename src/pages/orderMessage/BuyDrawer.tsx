/* eslint-disable filenames/match-exported */
import { Button, Drawer, Space } from 'antd';
import './buyDrawer.less';
import addressSource from '../userCenter/ReceivingAddress/mock';
import AddressMenu from './AddressMenu';
import MessageChosen from './MessageChosen';

const OrderDrawer = (props: {
  visible: boolean;
  onClose: () => void;
  shoppingCatsList: Array<{
    key: number;
    price: number;
    mainPicture: string;
    description: string;
    num: number;
    totalprice: number;
  }>;
  // total: number;
}) => {
  const { visible, onClose, shoppingCatsList } = props;
  let total = 0;
  shoppingCatsList?.forEach(item => {
    total += item.price * item.num;
  });
  return (
    <Drawer
      title="订单详情"
      placement="right"
      size="default"
      onClose={onClose}
      visible={visible}
      // extra={
      //   <Space>
      //     <Button onClick={onClose}>取消</Button>
      //     <Button type="primary" onClick={onClose}>
      //       去结算
      //     </Button>
      //   </Space>
      // }
    >
      <AddressMenu addressSource={addressSource} />
      {shoppingCatsList?.map(item => (
        <MessageChosen basicInfo={item} num={item.num} key={item.key} />
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
