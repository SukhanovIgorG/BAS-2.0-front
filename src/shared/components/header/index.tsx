import styled from 'styled-components';

import { Avatar, Dropdown } from 'antd';

import {
  LoginOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import { useSession } from '@/shared/model/session';

import { Logo } from '../logo';
import { Menu } from '../menu';

export const Header = () => {
  const { logout } = useSession();
  return (
    <HeaderWrapper>
      <Logo compact />
      <Menu mode="horizontal" />
      <Dropdown
        menu={{
          items: [
            {
              key: 'profile',
              label: 'Профиль',
              icon: <UserOutlined />,
            },
            {
              key: 'settings',
              label: 'Настройки',
              icon: <SettingOutlined />,
            },
            {
              type: 'divider',
            },
            {
              key: 'logout',
              label: 'Выйти',
              style: { color: 'red' },
              icon: <LoginOutlined />,
              onClick: () => {
                logout();
              },
            },
          ],
        }}
      >
        <StyledAvatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
      </Dropdown>
    </HeaderWrapper>
  );
};

const StyledAvatar = styled(Avatar)`
  margin: 0 auto;
  cursor: pointer;
`;

const HeaderWrapper = styled.div`
  height: fit-content;
  width: 100%;
  border-bottom: 1px solid #000;
  display: grid;
  grid-template-columns: 4em 1fr 4em;
  align-items: center;
`;
