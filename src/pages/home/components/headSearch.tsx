/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable import/order */
import { Button, Menu, Input, Layout } from 'antd';
import { Link, NavLink, useHistory } from '@modern-js/runtime/router';
import styled from '@modern-js/runtime/styled';
import logoDark from './images/logoDark.jpeg';
import './index.less';
import ShoppingCard from './images/shoppingCart.png';
import axios from 'axios';
import { DOMAIN } from '@/constants';
import { useModel } from '@modern-js/runtime/model';
import stateModel from '@/store/store';

const ShoppingCart = styled.img`
  width: 23px;
  margin: 0 7px 2px 0;
`;

const TitleMenu = styled(Menu.Item)`
  margin-right: 30px;
`;

const HeadSearch = (props: { currentIndex: string; isDisplay: boolean }) => {
  const { Search } = Input; // 组件
  const { Header } = Layout;
  const { currentIndex, isDisplay } = props;
  const history = useHistory();
  const [state, actions] = useModel(stateModel);
  const search = async (value: string) => {
    if (value === '') {
      await axios.get(`${DOMAIN}/product/name/''`).then(res => {
        actions.setAllList(res.data.entity.data);
        history.push('/products');
      });
    } else {
      await axios.get(`${DOMAIN}/product/name/${value}`).then(res => {
        actions.setAllList(res.data.entity.data);
        history.push('/products');
      });
    }
  };

  return (
    <>
      <Header>
        <span onClick={() => history.push('/')}>
          <img className="darkLogo" src={logoDark} />
        </span>
        <span className="buttonPos">
          {!localStorage.getItem('userId') ? (
            <>
              <Button type="text" href="/login" className="headerButton">
                登陆
              </Button>
              <Button type="text" className="headerButton" href="/register">
                注册
              </Button>
            </>
          ) : (
            ''
          )}

          <Button type="text" className="headerButton" href="/orders">
            我的订单
          </Button>
          <Button type="text" className="headerButton" href="/userCenter">
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
                style={{
                  padding: '0 0 0 12%',
                  display: isDisplay ? 'none' : '',
                }}>
                <TitleMenu key="1">
                  <NavLink to="/" />
                  首页
                </TitleMenu>
                <TitleMenu key="2">
                  <NavLink to="/products" />
                  杂货铺
                </TitleMenu>
                <TitleMenu key="3">
                  <NavLink to="/bulletins" />
                  公告
                </TitleMenu>
                <TitleMenu key="4" style={{ margin: '0 50% 0 0' }}>
                  <NavLink to="/comments" />
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
              <Link to="/shoppingCat">
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
              </Link>
            </div>
          </Layout>
        </div>
      </div>
    </>
  );
};
export default HeadSearch;
