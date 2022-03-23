import { Row, Col, Typography, InputNumber, Button, Tooltip } from 'antd';
import React, { Fragment, useState } from 'react';
// import { observer } from 'mobx-react';
import './index.less';
import { imgList } from '../mock';
// import products0 from '../images/boluo.jpeg';
import products1 from '../images/huluobo.png';
// import products2 from '../images/jiang.jpeg';
// import products3 from '../images/mangguo.jpeg';
// import products4 from '../images/yumi.jpeg';

const PUBLIC_URL = 'products';

const CommoditySpecification = () => {
  const { Title, Paragraph } = Typography;
  const [actionIndex, setActionIndex] = useState(1);
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
                '1111'
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
        {/* <Col span={16}>
          <Title
            level={4}
            title={
              basicInfo.description ? basicInfo.description : '敬请期待~~~'
            }>
            {basicInfo.description ? basicInfo.description : '敬请期待~~~'}
          </Title>
          <h3
            className="ellipsis"
            title={
              basicInfo.copywriting ? basicInfo.copywriting : '敬请期待~~~'
            }>
            {basicInfo.copywriting ? basicInfo.copywriting : '敬请期待~~~'}
          </h3>
          <div className="price">
            售价：
            <Title level={3}>
              <span className="unit">￥</span>
              {basicInfo.price ? Number(basicInfo.price).toFixed(2) : 0}
            </Title>
          </div>
          {/* <Row className="Specifications">
            <Col span={2}>规格：</Col>
            <Col span={22}>
              <Row>
                {specs.length ? (
                  specs.map(item => (
                    <Fragment key={item.id}>
                      <Col
                        span={11}
                        className={basicInfo.id === item.id ? 'active' : ''}
                        // onClick={this.handleToggleSpecs.bind(this, item.id)}
                      >
                        <Paragraph ellipsis={true} title={item.spec}>
                          {item.spec}
                        </Paragraph>
                      </Col>
                      <Col span={1} />
                    </Fragment>
                  ))
                ) : (
                  <Fragment>
                    <Col span={11}>
                      <Paragraph ellipsis={true} title="没错，我就是规格">
                        没错，我就是规格
                      </Paragraph>
                    </Col>
                    <Col span={1} />
                  </Fragment>
                )}
              </Row>
            </Col>
          </Row> */}
        {/* {oauthCode && oauthCode != 401 ? (
            <Fragment>
              <Row className="Number">
                <Col span={2}>数量：</Col>
                <Col span={22}>
                  <InputNumber
                    min={1}
                    max={99}
                    value={num}
                    precision={0}
                    // onChange={this.watchNumber}
                  />
                </Col>
              </Row>
              <Row className="handleButton">
                <Col span={2} />
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
          ) : (
            ''
          )} */}
        {/* </Col> */}
      </Row>
    </div>
  );
};

export default CommoditySpecification;
