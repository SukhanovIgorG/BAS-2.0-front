import type { SpaceType, UserType } from './index';

type ServerResponseList<T> = {
  pagination: Pagination;
  data: T[];
};

export type Pagination = {
  page: number;
  total: number;
  size: number;
};

// AUTH
export type LoginDto = {
  email: string;
  password: string;
};

export type RegisterDto = {
  email: string;
  password: string;
};

export type LoginResponseDto = {
  accessToken: string;
  user: UserType;
};

export type RegisterResponseDto = {
  accessToken: string;
  user: UserType;
};

// USERS
export type GetUsersResponseDto = ServerResponseList<UserType>;

// SPACES
export type GetSpacesResponseDto = ServerResponseList<SpaceType>;
