import { Layout, Menu, MenuProps } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  ContainerOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import { useHistory } from '@modern-js/runtime/router';

import logo from '../../home/components/images/logoDark.jpeg';
import logoLight from '../../home/components/images/logoLight.jpg';
import './index.less';
import TableList from './tableList';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const LayoutItem = () => {
  const [collapsed, setCollapsed] = useState(false);

  const history = useHistory();

  const onCollapse = (tar: boolean) => {
    setCollapsed(tar);
  };

  const items: MenuItem[] = [
    getItem('留言审核', '1', <PieChartOutlined />),
    getItem('商家审核', '2', <DesktopOutlined />),
    getItem('发布公告', '3', <ContainerOutlined />),
  ];

  const hanldeOnclick = (item: { key: string }) => {
    const { key } = item;
    if (Number(key) === 1) {
      history.push('/admin');
    } else if (Number(key) === 2) {
      history.push('./auditInforamtion');
    } else if (Number(key) === 3) {
      history.push('/annouce');
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo">
          <img src={logo} width={135} style={{ margin: '0 0 0 35px' }} />
        </div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['2']}
          mode="inline"
          items={items}
          onClick={hanldeOnclick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}>
            <TableList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          <img src={logoLight} className="lightLogo"></img>©2022 Created by
          Arthur
        </Footer>
      </Layout>
    </Layout>
  );
};
export default LayoutItem;
