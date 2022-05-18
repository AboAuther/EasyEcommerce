import './index.less';
import { Row, Card, Typography } from 'antd';
import Slider from 'react-slick';
import { Link } from '@modern-js/runtime/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { DOMAIN } from '@/constants';

const HotThisWeek = () => {
  const { Meta } = Card;
  const { Title } = Typography;
  const settings = {
    dots: true,
    infinite: false,
    arrows: false,
    speed: 500,
    slidesToScroll: 5,
    slidesToShow: 5,
  };
  const [productsList, setProductsList] = useState([]);
  useEffect(async () => {
    await axios.get(`${DOMAIN}/product/list`).then(res => {
      setProductsList(res.data.entity.data);
    });
  }, []);

  return (
    <div className="dm_HotThisWeek">
      <Row className="title">热门推荐</Row>
      <div className="common_width">
        <Row className="hot_content">
          {productsList.length ? (
            <Slider {...settings}>
              {productsList.map(item => {
                const id = Number(item.productId);
                return (
                  <Card
                    key={id}
                    bordered={false}
                    cover={
                      <Link to={`/products/${id}`}>
                        <img
                          alt=""
                          src={item.productCoverImg}
                          title={item.productName}
                          style={{ width: '100%' }}
                          height={135}
                        />
                      </Link>
                    }>
                    <Meta
                      title={
                        <Title level={4}>
                          <span className="unit">￥</span>
                          {item.sellingPrice
                            ? Number(item.sellingPrice).toFixed(2)
                            : 0}
                        </Title>
                      }
                      description={
                        <Link to={`/products/${id}`}>{item.productIntro}</Link>
                      }
                    />
                  </Card>
                );
              })}
            </Slider>
          ) : (
            ''
          )}
        </Row>
      </div>
    </div>
  );
};

export default HotThisWeek;
