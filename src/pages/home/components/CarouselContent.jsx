import { Carousel } from 'antd';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from '@modern-js/runtime/router';
import { DOMAIN } from '@/constants';

const ContentCarousel = styled(Carousel)`
  margin-top: 35px;
  margin-bottom: 35px;
  height: 100%;
  width: 900px;
  margin-left: 100vw - 300px / 2;
  margin-left: calc((100vw - 900px) / 2);
`;
const ContentImg = styled.img`
  width: 100%;
  height: 420px;
  border-radius: 2%;
`;
const CarouselContent = () => {
  const [value, setValue] = useState([]);
  useEffect(async () => {
    await axios.get(`${DOMAIN}/product/banner`).then(res => {
      setValue(res.data.entity.data);
    });
  }, []);
  return (
    <div>
      <ContentCarousel autoplay={true}>
        {value.length !== 0 &&
          value.map((item: Object) => (
            <div key={item.bannerID}>
              <div>
                <Link to={`/products/${item.bannerID}`}>
                  <ContentImg src={item.url} key={item.bannerID} />
                </Link>
              </div>
            </div>
          ))}
      </ContentCarousel>
    </div>
  );
};
export default CarouselContent;
