import { Carousel } from 'antd';
import './index.less';
import styled from 'styled-components';
import { get as banner } from '@api/banner';
import { useEffect, useState } from 'react';
import axios from 'axios';

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
  // const contentStyle = {
  //   color: '#fff',
  //   lineHeight: '160px',
  //   textAlign: 'center',
  //   background: '#364d79',
  //   width: '100%',
  // };

  const [value, setValue] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:9090/api/product/banner').then(res => {
      setValue(res.data.entity.data);
    });
  }, []);
  return (
    <div>
      <ContentCarousel autoplay={true}>
        {value.length !== 0 &&
          value.map((item: Object) => (
            <>
              <div>
                <ContentImg src={item.url} />
              </div>
            </>
          ))}
      </ContentCarousel>
    </div>
  );
};
export default CarouselContent;
