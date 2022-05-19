import { Button, Drawer, message, Space } from 'antd';
import './buyDrawer.less';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';
import AddressMenu from './AddressMenu';
import MessageChosen from './MessageChosen';
import { DOMAIN } from '@/constants';

const BuyDrawer = props => {
  const { visible, onClose, basicInfo, num, shoppingCatsList, total } = props;
  const [addressList, setAddressList] = useState();
  const [chosenAddress, setChosenAddress] = useState();
  const history = useHistory();
  useEffect(() => {
    getAddressList();
  }, []);
  const handleMakeOrder = async () => {
    const id = localStorage.getItem('userId');
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/makeOrder`,
      data: {
        extra: {
          userID: id,
          mobile: chosenAddress.mobile,
          userAddress: `${chosenAddress.region}${chosenAddress.detail}`,
        },
        products: handleBasicInfo(basicInfo),
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('购买成功');
        onClose();
      }
    });
  };
  const handleBasicInfo = content => {
    const tar =
      content !== null &&
      [content].map(item => {
        const map = {
          productId: item.productId,
          productIntro: item.productIntro,
          productImg: item.productCoverImg,
          sellingPrice: item.sellingPrice,
          buyNum: num,
        };
        return map;
      });
    return tar;
  };
  const getAddressList = async () => {
    await axios
      .get(`${DOMAIN}/user/getAddress?userID=${localStorage.getItem('userId')}`)
      .then(res => {
        if (res.data.entity.success) {
          const { data } = res.data.entity;
          setAddressList(data);
          setChosenAddress(data.find(item => item.default === true));
        }
      });
  };
  const handleChangeAddress = content => {
    setChosenAddress(content);
  };
  const handleAddAddress = () => {
    history.push('userCenter');
    message.info('请选择收货地址，添加地址');
  };
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
          <Button type="primary" onClick={handleMakeOrder}>
            去结算
          </Button>
        </Space>
      }>
      {addressList !== undefined && addressList.length !== 0 ? (
        <AddressMenu
          addressSource={addressList}
          changeAddress={content => handleChangeAddress(content)}
        />
      ) : (
        <Button
          type="primary"
          className="addAddress"
          onClick={handleAddAddress}>
          添加地址
        </Button>
      )}

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
                  ? Number(basicInfo.sellingPrice * num).toFixed(2)
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
