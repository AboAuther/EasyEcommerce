import { Row, Col, Typography, InputNumber, Button } from 'antd';
import React, { Fragment, useState } from 'react';
import './index.less';
import BuyDrawer from '@/pages/payment/BuyDrawer';

const CommoditySpecification = (props: {
  basicInfo: {
    productCoverImg: string;
    productName: string;
    productIntro: string;
    sellingPrice: number;
    categoryId: number;
  };
}) => {
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
  return (
    <div className="CommoditySpecification">
      {basicInfo !== undefined ? (
        <Row>
          <Col span={8}>
            <dl>
              <dt>
                {
                  <img
                    src={basicInfo.productCoverImg}
                    alt="loading..."
                    width={300}
                    height={320}
                  />
                }
              </dt>
            </dl>
          </Col>
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
                <Col span={22}>
                  <Button
                    type="primary"
                    size="large"
                    ghost={true}
                    onClick={openDrawer}>
                    立即购买
                  </Button>
                  <Button
                    type="primary"
                    size="large"
                    // onClick={this.handleAddCart}
                  >
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

export default CommoditySpecification;
