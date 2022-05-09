import { Layout, Menu, Breadcrumb, MenuProps } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  ContainerOutlined,
  MailOutlined,
  AppstoreOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import logo from '../../home/components/images/logoDark.jpeg';
import logoLight from '../../home/components/images/logoLight.jpg';
const { Header, Content, Footer, Sider } = Layout;
import './layout.less'
import { useHistory } from '@modern-js/runtime/router';
import StoreDataMessage from './storeDataMessage';
import OwnerMessage from './ownerMessage';
import LicenseMessage from './licenseMessage';

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

  const onCollapse = (collapsed: boolean) => {
    console.log(collapsed);
    setCollapsed(collapsed);
  };

  const items: MenuItem[] = [
    getItem('数据', '1', <PieChartOutlined />),
    getItem('商品列表', '2', <DesktopOutlined />),
    getItem('订单', '3', <ContainerOutlined />),
    getItem('店铺信息', '4', <ContainerOutlined />),
  ];

  const hanldeOnclick = (item: { key: string; }) => {
    const { key } = item;
    if( Number(key) === 1) {
      history.push('/admin');
    } else if( Number(key) === 4) {
      history.push('/storeMessage')
    } else if( Number(key) === 2) {
      history.push('./goodsList')
    }
  }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" >
            <img src={logo} width={135} style={{margin: '0 0 0 35px'}}  />
          </div>
          <Menu theme="dark" defaultSelectedKeys={['4']} mode="inline" items={items} onClick={hanldeOnclick} />
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <StoreDataMessage />
              <OwnerMessage />
              <LicenseMessage />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
          <img src={logoLight} className="lightLogo"></img>©2022 Created by Arthur
          </Footer>
        </Layout>
      </Layout>
    );
}

export default LayoutItem;
