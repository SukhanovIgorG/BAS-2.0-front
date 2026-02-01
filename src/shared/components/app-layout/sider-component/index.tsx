import styled from 'styled-components';

import { Button, Flex, Layout, Space, Typography } from 'antd';
import { useState } from 'react';

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

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
      <Flex vertical className="h-full pb-4 overflow-hidden">
        <div className="flex w-full align-center justify-start ">
          <Space className="p-2 flex items-center bg-blue-300 ">
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
              }}
            />
          </Space>
          <StyledLogoWrap>
            👾
            <StyledTitle
              level={1}
              className="logo-title"
              visible={!collapsed ? 'true' : 'false'}
            >
              {' '}
              BAS
            </StyledTitle>
          </StyledLogoWrap>
        </div>
        <Menu className="flex-1" />
        <div className="p-2">
          <LogoutButton className="w-full" />
        </div>
      </Flex>
    </Sider>
  );
};

const StyledLogoWrap = styled(Space)`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  background-color: oklch(80.9% 0.105 251.813);
  width: 100%;
  justify-content: center;
`;

const StyledTitle = styled(Typography.Title)<{ visible: string }>`
  font-size: 24px !important;
  font-weight: bold;
  margin: 0 !important;
  word-break: keep-all;
  opacity: ${({ visible }) => (visible === 'true' ? 1 : 0)};
  width: ${({ visible }) => (visible === 'true' ? '100%' : '0')};
  transition:
    opacity 0.3s ease-in-out,
    width 0.3s normal;
`;
