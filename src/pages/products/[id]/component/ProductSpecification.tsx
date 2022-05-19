import { Row, Col, Typography, InputNumber, Button, message } from 'antd';
import React, { Fragment, useState } from 'react';
import './index.less';
import axios from 'axios';
import BuyDrawer from '@/pages/payment/BuyDrawer';
import { DOMAIN } from '@/constants';

// eslint-disable-next-line @typescript-eslint/naming-convention
interface productStruct {
  productCoverImg: string;
  productName: string;
  productIntro: string;
  sellingPrice: number;
  categoryId: number;
  productId: string;
  description: string;
}
const ProductSpecification = (props: { basicInfo: productStruct }) => {
  const { Title } = Typography;
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(1);
  const { basicInfo } = props;

  const openDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };
  const handleAddCart = async () => {
    const id = localStorage.getItem('userId');
    if (!id) {
      message.error('请登录！！');
    } else {
      await axios({
        method: 'post',
        url: `${DOMAIN}/order/addCart`,
        data: {
          userID: id,
          productId: basicInfo.productId,
          productCoverImg: basicInfo.productCoverImg,
          description: basicInfo.productIntro,
          productPrice: basicInfo.sellingPrice,
          productNum: num,
        },
      }).then(res => {
        if (res.data.entity.success) {
          message.success('成功加入购物车！');
        } else {
          message.error('加入购物车失败！');
        }
      });
    }
  };

  return (
    <div className="ProductSpecification">
      {basicInfo !== undefined ? (
        <Row>
          {/* 商品图片 */}
          <Col span={8}>
            {
              <img
                src={basicInfo.productCoverImg}
                alt="loading..."
                width={300}
                height={320}
              />
            }
          </Col>

          {/* 商品信息 */}
          <Col span={16}>
            <Title level={4}>
              {basicInfo !== undefined ? basicInfo.productName : '敬请期待~~~'}
            </Title>
            <div className="price">
              售价：
              <Title level={3}>
                <span className="unit">￥</span>
                {basicInfo !== undefined
                  ? Number(basicInfo.sellingPrice).toFixed(2)
                  : 0}
              </Title>
            </div>
            <Fragment>
              <Row className="Number">
                <Col span={2}>数量：</Col>
                <Col span={22}>
                  <InputNumber
                    min={1}
                    max={99}
                    value={num}
                    precision={0}
                    onChange={value => setNum(value)}
                  />
                </Col>
              </Row>
              <Row className="handleButton">
                <Col span={16}>
                  <Button
                    type="primary"
                    size="large"
                    ghost={true}
                    onClick={openDrawer}>
                    立即购买
                  </Button>
                  <Button type="primary" size="large" onClick={handleAddCart}>
                    加入购物车
                  </Button>
                </Col>
              </Row>
            </Fragment>
          </Col>
        </Row>
      ) : (
        <p>暂无数据</p>
      )}

      <BuyDrawer
        visible={visible}
        onClose={closeDrawer}
        basicInfo={basicInfo}
        num={num}
      />
    </div>
  );
};

export default ProductSpecification;
