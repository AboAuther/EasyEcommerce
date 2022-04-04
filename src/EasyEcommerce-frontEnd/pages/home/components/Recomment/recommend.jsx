import React from 'react';
import { Row, Col } from 'antd';
import Slider from 'react-slick';
import { productsList } from '../mock';
import './index.less';
import banana from './image/banana.webp';

const Recommend = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 300,
    slidesToScroll: 1,
    slidesToShow: 3,
  };
  return (
    <Row className="dm_recommend">
      {productsList.length ? (
        <Slider {...settings}>
          {productsList.map(item => (
            <Col
              span={8}
              key={item.id}
              // onClick={this.watchProductDetails.bind(this, item.id)}
            >
              <img src={banana} />
              <div>
                <span className="title" title={item.productName}>
                  {item.productName}
                </span>
                <span className="description" title={item.description}>
                  {item.description}
                </span>
              </div>
            </Col>
          ))}
        </Slider>
      ) : (
        ''
      )}
    </Row>
  );
};

export default Recommend;
