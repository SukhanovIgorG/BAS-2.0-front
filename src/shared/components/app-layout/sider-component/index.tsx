import { Button, Flex, Layout } from 'antd';
import { useState } from 'react';

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ThunderboltTwoTone,
} from '@ant-design/icons';

import { LogoutButton } from '@/shared/components';

import { Menu } from '../../menu';

const { Sider } = Layout;

export const SiderComponent = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      theme="light"
      className="flex flex-col gap-4"
    >
      <Flex vertical className="h-full pb-4">
        <div className="flex w-full align-center justify-center">
          <div className="p-1 flex items-center bg-blue-300">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
              }}
            />
          </div>
          <div className="flex items-center justify-center h-16 bg-blue-300 flex-1">
            <ThunderboltTwoTone />
            {!collapsed && 'LOGO'}
          </div>
        </div>
        <Menu className="flex-1" />
        <div className="p-2">
          <LogoutButton className="w-full" />
        </div>
      </Flex>
    </Sider>
  );
};
