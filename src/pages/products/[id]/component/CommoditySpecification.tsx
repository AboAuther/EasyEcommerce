import { Row, Col, Typography, InputNumber, Button, Tabs } from 'antd';
import React, { Fragment, useState } from 'react';
import './index.less';
import { imgList, productsList, specs } from '../mock';
import products1 from '../images/huluobo.png';

const CommoditySpecification = (props: { id: string }) => {
  const { Title, Paragraph } = Typography;
  const [actionIndex, setActionIndex] = useState(1);
  const itemId = props.id;
  const basicInfo = productsList.filter(item => item.id === Number(itemId))[0];
  const { TabPane } = Tabs;

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
              basicInfo.description ? basicInfo.description : '敬请期待~~~'
            }>
            {basicInfo.description ? basicInfo.description : '敬请期待~~~'}
          </Title>
          <div className="price">
            售价：
            <Title level={3}>
              <span className="unit">￥</span>
              {basicInfo.price ? Number(basicInfo.price).toFixed(2) : 0}
            </Title>
          </div>
          <Fragment>
            <Row className="Number">
              <Col span={2}>数量：</Col>
              <Col span={22}>
                <InputNumber
                  min={1}
                  max={99}
                  // value={num}
                  precision={0}
                  // onChange={this.watchNumber}
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
                  // onClick={this.immediatePurchase}
                >
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
    </div>
  );
};

export default CommoditySpecification;
