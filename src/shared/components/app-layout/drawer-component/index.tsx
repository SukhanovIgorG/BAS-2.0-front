import { styled } from 'styled-components';

import { Drawer, Flex } from 'antd';

import { LogoutButton } from '../../buttons';
import { Menu } from '../../menu';

interface DrawerComponentProps {
  open: boolean;
  onOpen: (open: boolean) => void;
}

export const DrawerComponent = ({ open, onOpen }: DrawerComponentProps) => {
  return (
    <StyledDrawer
      title="Система Автоматизации Бизнеса"
      open={open}
      placement="top"
      onClose={() => onOpen(false)}
      size={'80%'}
      footer={
        <Flex justify="flex-end">
          <LogoutButton />
        </Flex>
      }
    >
      <Menu />
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)`
  width: 99% !important;
  box-shadow: 4px 4px 0 0 #221b19;
`;
