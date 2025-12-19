import type { SpaceType, UserType } from "./index";

export type Pagination = {
  page: number;
  total: number;
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
export type GetUsersResponseDto = {
  pagination: Pagination;
  result: UserType[];
};

// SPACES
export type GetSpacesResponseDto = {
  pagination: Pagination;
  result: SpaceType[];
};
