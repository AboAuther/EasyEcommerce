import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import './index.less';
import logoIcon from './images/logoLight.jpg';
import HeardSearch from './heardSearch';
import HomeContent from './homeContent';

const Container = () => (
  <Layout>
    <HeardSearch currentIndex="1" />
    <HomeContent />
    <Footer style={{ textAlign: 'center' }}>
      <img src={logoIcon} className="lightLogo"></img>©2022 Created by Arthur
    </Footer>
  </Layout>
);

export default Container;
