import { Button, Flex, Layout } from 'antd';
import { type ReactNode, useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ThunderboltTwoTone,
} from '@ant-design/icons';

import { LogoutButton } from '@/shared/components';

import { Menu } from '../menu';

const { Sider, Content } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100dvh' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        theme="light"
        className="flex flex-col gap-4"
      >
        <Flex vertical className="h-full">
          <div className="flex w-full align-center justify-center">
            <div className="flex items-center justify-center h-16 bg-blue-300 flex-1">
              <ThunderboltTwoTone />
              {!collapsed && 'LOGO'}
            </div>
            <div className="p-1 flex items-center bg-blue-200">
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={{
                  fontSize: '16px',
                }}
              />
            </div>
          </div>
          <Menu className="flex-1" />
          <div className="p-1">
            <LogoutButton className="w-full" />
          </div>
        </Flex>
      </Sider>
      <Layout>
        <Content
          style={{
            padding: 24,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};
