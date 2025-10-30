import 'react-router-dom';

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  SPACES: '/spaces',
  SPACE: '/space/:spaceId',
  USERS: '/users',
  STATISTIC: '/statistic',
} as const;

export type PathParams = {
  [ROUTES.SPACE]: {
    spaceId: string;
  };
};

declare module 'react-router-dom' {
  interface Register {
    params: PathParams;
  }
}
