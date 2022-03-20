import { Carousel } from 'antd';
import './index.less';
import styled from 'styled-components';
import banana from './images/banana.webp';
import orange from './images/orange.webp';
import apple from './images/apple.webp';
import yumi from './images/yumi.webp';

const ContentCarousel = styled(Carousel)`
  margin-top: 35px;
  height: 100%;
  width: 900px;
  margin-left: 100vw - 300px / 2;
  margin-left: calc((100vw - 900px) / 2);
`;
const ContentImg = styled.img`
  width: 100%;
  height: 350px;
  border-radius: 2%;
`;
const CarouselContent = () => {
  const contentStyle = {
    // height: '100%',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    width: '100%',
  };
  return (
    <div>
      {/* <ContentCarousel autoplay={true}> */}
      <ContentCarousel autoplay={true}>
        <div>
          {/* <h3 style={contentStyle}>1</h3> */}
          <span>
            <ContentImg src={yumi} />
          </span>
        </div>
        <div>
          <ContentImg src={apple} />
        </div>
        <div>
          <ContentImg src={banana} />
        </div>
        <div>
          <ContentImg src={orange} />
        </div>
      </ContentCarousel>
      {/* </ContentCarousel> */}
    </div>
  );
};
export default CarouselContent;
