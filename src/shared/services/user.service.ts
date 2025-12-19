import { instance } from '../api/instance';
import type { GetUsersResponseDto } from '../types/dto';

class UserService {
  private _USERS = '/users';

  async getAll() {
    const { data } = await instance.get<Promise<GetUsersResponseDto>>(this._USERS);

    return data;
  }
}

export const userService = new UserService();
