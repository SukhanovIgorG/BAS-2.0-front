import { Menu as AntMenu, type MenuProps as AntMenuProps } from 'antd';

import {
  BorderOuterOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

export type MenuProps = AntMenuProps;

export const Menu = ({
  mode = 'inline',
  defaultSelectedKeys = ['1'],
  ...props
}: MenuProps) => {
  return (
    <AntMenu
      mode={mode}
      defaultSelectedKeys={defaultSelectedKeys}
      {...props}
      items={[
        {
          key: '1',
          icon: <UserOutlined />,
          label: 'Пользователи',
        },
        {
          key: '2',
          icon: <BorderOuterOutlined />,
          label: 'Пространства',
        },
        {
          key: '3',
          icon: <PieChartOutlined />,
          label: 'Статистика',
        },
      ]}
    />
  );
};
