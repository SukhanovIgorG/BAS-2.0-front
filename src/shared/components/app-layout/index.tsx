import styled from 'styled-components';

import { Layout } from 'antd';
import { type ReactNode, useState } from 'react';

import { Button } from '@/shared/ui';

import { DrawerComponent } from './drawer-componet';
import { SiderComponent } from './sider-component';

const { Content } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <Layout className="h-dvh relative">
      <SiderComponent />
      <DrawerComponent open={open} onOpen={setOpen} />
      <Layout>
        <StyledContent>{children}</StyledContent>
        <MenuButton onClick={() => setOpen(true)}>Меню</MenuButton>
      </Layout>
    </Layout>
  );
};

const StyledContent = styled(Content)`
  height: 100%;
  padding: 16px;
`;

const MenuButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
