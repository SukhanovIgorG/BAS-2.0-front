import { Menu as AntMenu, type MenuProps as AntMenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

import {
  BorderOuterOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { ROUTES } from '@/shared/model/routes';

export type MenuProps = AntMenuProps;

export const Menu = ({
  mode = 'inline',
  defaultSelectedKeys = ['1'],
  ...props
}: MenuProps) => {
  const { onClick } = props;
  const navigate = useNavigate();

  const handleClick: MenuProps['onClick'] = (e) => {
    const { key } = e;
    console.log('key ', key);
    navigate(key);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <AntMenu
      onClick={handleClick}
      mode={mode}
      defaultSelectedKeys={defaultSelectedKeys}
      {...props}
      items={[
        {
          key: ROUTES.USERS,
          icon: <UserOutlined />,
          label: 'Пользователи',
        },
        {
          key: ROUTES.SPACES,
          icon: <BorderOuterOutlined />,
          label: 'Пространства',
        },
        {
          key: ROUTES.STATISTIC,
          icon: <PieChartOutlined />,
          label: 'Статистика',
        },
      ]}
    />
  );
};
