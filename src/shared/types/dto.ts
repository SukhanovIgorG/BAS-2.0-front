import type { UserType } from "./index";

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
