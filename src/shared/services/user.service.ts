import type { UserType } from '@/shared/types';

import { instance } from '../api/instance';

class UserService {
  private _USERS = '/users';

  async getAll() {
    const { data } = await instance.get<UserType[]>(this._USERS);

    return data;
  }
}

export const userService = new UserService();
