import { Row, Col, Typography, InputNumber, Button, Tabs } from 'antd';
import React, { Fragment, useState } from 'react';
import './index.less';
import { imgList, productsList, specs } from '../mock';
import products1 from '../images/huluobo.png';
import BuyDrawer from '@/pages/payment/BuyDrawer';

const CommoditySpecification = (props: { id: string }) => {
  const { Title } = Typography;
  const [actionIndex, setActionIndex] = useState(1);
  const [visible, setVisible] = useState(false);
  const [num, setNum] = useState(1);
  const { id } = props;
  const basicInfo = productsList.filter(item => item.id === Number(id))[0];
  const openDrawer = () => {
    setVisible(true);
  };
  const closeDrawer = () => {
    setVisible(false);
  };
  return (
    <div className="CommoditySpecification">
      <Row>
        <Col span={8}>
          <dl>
            <dt>
              {/* <img src={produts0}></img> */}
              {imgList[actionIndex] ? (
                <img src={products1} alt="loading..." />
              ) : (
                ''
              )}
            </dt>
            <dd>
              {imgList.map((item, index) => (
                <div
                  key={index}
                  // onMouseOver={this.handleTogglePic.bind(this, index)}
                  className={actionIndex === index ? 'active' : ''}>
                  <img src={products1} alt="" />
                </div>
              ))}
            </dd>
          </dl>
        </Col>
        <Col span={16}>
          <Title
            level={4}
            title={
              basicInfo !== undefined ? basicInfo.description : '敬请期待~~~'
            }>
            {basicInfo !== undefined ? basicInfo.description : '敬请期待~~~'}
          </Title>
          <div className="price">
            售价：
            <Title level={3}>
              <span className="unit">￥</span>
              {basicInfo !== undefined ? Number(basicInfo.price).toFixed(2) : 0}
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
              {/* <Col span={2} /> */}
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
