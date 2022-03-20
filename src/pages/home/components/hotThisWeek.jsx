import './index.less';
import { Row, Card, Typography } from 'antd';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import banana from './images/banana.webp';
import { productsList } from './mock';

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
  return (
    <div className="dm_HotThisWeek">
      <Row className="title">热门推荐</Row>
      <div className="common_width">
        <Row className="hot_content">
          {productsList.length ? (
            <Slider {...settings}>
              {productsList.map(item => {
                const price =
                  parseFloat(item.price) && parseFloat(item.price).toFixed(2);
                return (
                  <Card
                    key={item.id}
                    bordered={false}
                    cover={
                      <img
                        alt=""
                        src={banana}
                        title={item.productName}
                        // onClick={() => {
                        //   this.props.history.push(
                        //     `/views/products/detail/${item.id}`,
                        //   );
                        // }}
                      />
                    }>
                    <Meta
                      title={
                        <Title level={4}>
                          <span className="unit">￥</span>
                          {item.price ? Number(item.price).toFixed(2) : 0}
                        </Title>
                      }
                      description={item.description}
                      // description={
                      //   // <Link
                      //   //   to={`/views/products/detail/${item.id}`}
                      //   //   title={item.description}>
                      //   //   {item.description}
                      //   // </Link>
                      //   {item.description}
                      // }
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
