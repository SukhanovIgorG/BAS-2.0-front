import styled from 'styled-components';

import { Layout } from 'antd';
import { type ReactNode, useState } from 'react';

import { useMediaQuery } from '@/shared/hooks';
import { Button } from '@/shared/ui';

import { DrawerComponent } from './drawer-component';
import { SiderComponent } from './sider-component';

const { Content } = Layout;

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <OutsideLayout>
      {!isMobile && <SiderComponent />}
      <DrawerComponent open={open} onOpen={setOpen} />
      <StyledLayout>
        <StyledContent>{children}</StyledContent>
        {isMobile && (
          <MenuButton onClick={() => setOpen(true)}>Меню</MenuButton>
        )}
      </StyledLayout>
    </OutsideLayout>
  );
};

const OutsideLayout = styled(Layout)`
  height: 100dvh;
  position: relative;
`;

const StyledLayout = styled(Layout)`
  /* background-image: url("data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='%23fcf6f6ff'/><path d='M 10,-2.55e-7 V 20 Z M -1.1677362e-8,10 H 20 Z'  stroke-width='1' stroke='%23ffffffff' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"); */
`;

const StyledContent = styled(Content)`
  height: 100%;
  padding: 16px;
`;

const MenuButton = styled(Button)`
  position: absolute;
  top: 16px;
  right: 16px;
`;
