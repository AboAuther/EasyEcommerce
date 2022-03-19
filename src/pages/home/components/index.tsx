import { Layout, Button } from 'antd';
import { Content, Footer } from 'antd/lib/layout/layout';
import './index.less';
import logoDark from '../images/logoDark.jpeg';
import logoIcon from '../images/logoLight.jpg';
import HomeContent from './homeContent';
import CarouselContent from './CarouselContent';

const buttonList: Array<string> = [
  '登陆',
  '注册',
  '我的订单',
  '我的收藏',
  '个人中心',
];
const Container = () => {
  const { Header } = Layout;
  return (
    <Layout>
      <Header>
        <span>
          <img className="darkLogo" src={logoDark}></img>
        </span>
        <span className="buttonPos">
          {/* <Button type="text">登陆</Button>
          <Button type="text">注册</Button>
          <Button type="text">我的订单</Button>
          <Button type="text">我的收藏</Button>
          <Button type="text">个人中心</Button> */}
          {new Array(buttonList.length).fill(0).map((_, index) => (
            <Button
              key={index}
              type="text"
              className="headerButton"
              ghost={true}>
              {buttonList[index]}
            </Button>
          ))}
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
