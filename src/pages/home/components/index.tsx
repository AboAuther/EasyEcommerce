import { Layout } from 'antd';
import { Footer } from 'antd/lib/layout/layout';
import './index.less';
import logoIcon from './images/logoLight.jpg';
import HeadSearch from './headSearch';
import HomeContent from './homeContent';

const Container = () => (
  <Layout>
    <HeadSearch currentIndex="1" isDisplay={false} />
    <HomeContent />
    <Footer style={{ textAlign: 'center' }}>
      <img src={logoIcon} className="lightLogo" />
      ©2022 Created by Arthur
    </Footer>
  </Layout>
);

export default Container;
