import { Tabs, Menu, Button, Input, Space } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';
import Search from 'antd/lib/transfer/search';
import styled from 'styled-components';
import ShoppingCard from '../images/shoppingCart.png';
import HotThisWeek from './hotThisWeek';
import CarouselContent from './CarouselContent';

const ShoppingCart = styled.img`
  width: 23px;
  margin: 0 7px 2px 0;
`;

const TitleMenu = styled(Menu.Item)`
  margin-right: 30px;
`;

const TitleSearch = styled(Search)`
  position: relative;
  right: 300px;
`;
const HomeContent = () => {
  const { TabPane } = Tabs;
  const { Search } = Input;

  const search = value => {
    console.log(value);
  };
  return (
    <>
      <div className="contentTab">
        <Layout>
          <div>
            <Menu
              theme="light"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ padding: '0 0 0 12%' }}>
              <TitleMenu key="1">首页</TitleMenu>
              <TitleMenu key="2">杂货铺</TitleMenu>
              <TitleMenu key="3">网站说明</TitleMenu>
              <TitleMenu key="4" style={{ margin: '0 50% 0 0' }}>
                留言
              </TitleMenu>
            </Menu>
            <Search
              placeholder="请输入需要的商品"
              onSearch={value => search(value)}
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
                <ShoppingCart src={ShoppingCard} className="shoppingCartImg" />
              }
              size="middle">
              我的购物车
            </Button>
          </div>
        </Layout>
      </div>
      <CarouselContent />
      <HotThisWeek />
    </>
  );
};
export default HomeContent;
