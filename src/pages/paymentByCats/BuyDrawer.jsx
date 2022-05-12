import { Button, Drawer, message, Space } from 'antd';
import './buyDrawer.less';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useModel } from '@modern-js/runtime/model';
import AddressMenu from './AddressMenu';
import MessageChosen from './MessageChosen';
import { DOMAIN } from '@/constants';
import stateModel from '@/store/store';

const BuyDrawer = props => {
  const {
    visible,
    onClose,
    basicInfo,
    num,
    shoppingCatsList,
    total,
    getSource,
  } = props;
  const [addressList, setAddressList] = useState();
  const [state, actions] = useModel(stateModel);
  const [chosenAddress, setChosenAddress] = useState();
  useEffect(() => {
    getAddressList();
  }, []);
  const handleMakeOrder = async () => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/makeOrder`,
      data: {
        extra: {
          userID: state.userID,
          mobile: chosenAddress.mobile,
          userAddress: `${chosenAddress.region}${chosenAddress.detail}`,
        },
        products: handleBasicInfo(shoppingCatsList),
      },
    }).then(res => {
      if (res.data.entity.success) {
        message.success('购买成功');
        onClose();
        deleteCart();
      }
    });
  };
  const handleBasicInfo = content => {
    const tar =
      content !== null &&
      content.map(item => {
        const map = {
          productId: item.productId,
          productIntro: item.description,
          productImg: item.productCoverImg,
          sellingPrice: item.productPrice,
          buyNum: item.productNum,
        };
        return map;
      });
    return tar;
  };
  const handleDeleteID = content => {
    const tar =
      content !== null &&
      content.map(item => {
        const map = {
          id: item.ID,
        };
        return map;
      });
    return tar;
  };
  const deleteCart = async () => {
    await axios({
      method: 'post',
      url: `${DOMAIN}/order/deleteCart`,
      data: handleDeleteID(shoppingCatsList),
    }).then(res => {
      if (!res.data.entity.success) {
        message.error('刷新失败！');
      } else {
        getSource();
      }
    });
  };
  const getAddressList = async () => {
    // 获得收货地址
    await axios
      .get(`${DOMAIN}/user/getAddress?userID=${state.userID}`)
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
      <AddressMenu
        addressSource={addressList}
        changeAddress={content => handleChangeAddress(content)}
      />
      {basicInfo !== undefined && num !== undefined ? (
        <>
          <MessageChosen basicInfo={basicInfo} num={num} />
        </>
      ) : (
        shoppingCatsList?.map(item => (
          <MessageChosen basicInfo={item} num={item.productNum} key={item.ID} />
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
