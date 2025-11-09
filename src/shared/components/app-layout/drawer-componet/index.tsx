import { Button, Drawer } from 'antd';

import { Menu } from '../../menu';

interface DrawerComponentProps {
  open: boolean;
  onOpen: (open: boolean) => void;
}

export const DrawerComponent = ({ open, onOpen }: DrawerComponentProps) => {
  return (
    <Drawer
      title="Система Автоматизации Бизнеса"
      open={open}
      placement="top"
      onClose={() => onOpen(false)}
      footer={[
        <Button key="submit" type="primary" onClick={() => onOpen(false)}>
          Ok
        </Button>,
      ]}
    >
      <Menu />
    </Drawer>
  );
};
