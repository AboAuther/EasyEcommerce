import { Tabs, Menu, Button, Space } from 'antd';
import Layout, { Content, Header } from 'antd/lib/layout/layout';

const HomeContent = () => {
  const { TabPane } = Tabs;
  return (
    <div className="contentTab">
      <Layout>
        {/* <Header style={{ padding: '0px' }}> */}
        <div>
          <Menu
            theme="light"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ padding: '0 0 0 12%' }}>
            <Menu.Item key="1">首页</Menu.Item>
            <Menu.Item key="2">杂货铺</Menu.Item>
            <Menu.Item key="3">网站说明</Menu.Item>
            <Menu.Item key="4">留言</Menu.Item>
            <Menu.Item>
              <Button type="primary">我的购物车</Button>
            </Menu.Item>
          </Menu>
          {/* <Button>我的购物车</Button> */}
        </div>
        {/* </Header> */}
      </Layout>
    </div>
  );
};
export default HomeContent;
