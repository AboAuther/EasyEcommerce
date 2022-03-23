import { Button, Menu, Input, Layout } from 'antd';
import { NavLink } from '@modern-js/runtime/router';
import styled from '@modern-js/runtime/styled';
import logoDark from './images/logoDark.jpeg';
import './index.less';
import ShoppingCard from './images/shoppingCart.png';

const handleClickLogin = () => <NavLink to="/login" />;
const search = (value: any) => {
  console.info(value);
};
const ShoppingCart = styled.img`
  width: 23px;
  margin: 0 7px 2px 0;
`;

const TitleMenu = styled(Menu.Item)`
  margin-right: 30px;
`;

const HeardSearch = (props: { currentIndex: string }) => {
  const { Search } = Input;
  const { Header } = Layout;
  const { currentIndex } = props;

  return (
    <>
      <Header>
        <span>
          <img className="darkLogo" src={logoDark}></img>
        </span>
        <span className="buttonPos">
          <Button
            type="text"
            ghost={true}
            href="/login"
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
        <div className="contentTab">
          <Layout>
            <div>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={[`${currentIndex}`]}
                style={{ padding: '0 0 0 12%' }}>
                <TitleMenu key="1">
                  <NavLink to="/" />
                  首页
                </TitleMenu>
                <TitleMenu key="2">
                  <NavLink to="/products" />
                  杂货铺
                </TitleMenu>
                <TitleMenu key="3">网站说明</TitleMenu>
                <TitleMenu key="4" style={{ margin: '0 50% 0 0' }}>
                  留言
                </TitleMenu>
              </Menu>
              <Search
                placeholder="请输入需要的商品"
                onSearch={(value: string) => search(value)}
                enterButton={true}
                size="middle"
                style={{
                  position: 'absolute',
                  top: '71px',
                  left: '60%',
                  width: 'auto',
                }}
              />
              <Button
                type="primary"
                style={{ position: 'absolute', top: '71px', left: '77%' }}
                icon={
                  <ShoppingCart
                    src={ShoppingCard}
                    className="shoppingCartImg"
                  />
                }
                size="middle">
                我的购物车
              </Button>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};
export default HeardSearch;
