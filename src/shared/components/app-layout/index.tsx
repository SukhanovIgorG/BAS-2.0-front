import { Button, Layout, Menu, theme } from 'antd';
import { type ReactNode, useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ThunderboltTwoTone,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';

import { LogoutButton } from '@/shared/components/header';

const { Header: AntHeader, Sider, Content } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100dvh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} theme="light">
        <div className="flex items-center justify-center h-16 bg-blue-300">
          <ThunderboltTwoTone />
          LOGO
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'nav 1',
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'nav 2',
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'nav 3',
            },
          ]}
        />
      </Sider>
      <Layout>
        <AntHeader
          style={{ paddingLeft: 0, backgroundColor: colorBgContainer }}
          className="flex items-center justify-between"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <LogoutButton />
        </AntHeader>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
