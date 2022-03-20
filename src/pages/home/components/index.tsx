import { Layout, Button } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import './index.less';
import { NavLink } from '@modern-js/runtime/router';
import logoDark from './images/logoDark.jpeg';
import logoIcon from './images/logoLight.jpg';
import HomeContent from './homeContent';

const Container = () => {
  const { Header } = Layout;

  const handleClickLogin = () => <NavLink to="/login" />;
  return (
    <Layout>
      <Header>
        <span>
          <img className="darkLogo" src={logoDark}></img>
        </span>
        <span className="buttonPos">
          <Button
            type="text"
            ghost={true}
            className="headerButton"
            onClick={() => handleClickLogin()}>
            登陆
          </Button>
          <Button type="text" className="headerButton">
            注册
          </Button>
          <Button type="text" className="headerButton">
            我的订单
          </Button>
          <Button type="text" className="headerButton">
            我的收藏
          </Button>
          <Button type="text" className="headerButton">
            个人中心
          </Button>
        </span>
      </Header>
      <div className="content">
        <HomeContent />
      </div>

      <Footer style={{ textAlign: 'center' }}>
        <img src={logoIcon} className="lightLogo"></img>©2022 Created by Arthur
      </Footer>
    </Layout>
  );
};

export default Container;
