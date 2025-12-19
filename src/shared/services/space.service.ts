import { instance } from "../api/instance";
import type { SpaceType } from "../types";

class SpaceService {
  private _SPACES = '/spaces';

    getAll() {
      return instance.get(this._SPACES);
    }

    create(data: SpaceType) {
        return instance.post(this._SPACES, data);
    }
    
    update(data: SpaceType) {
      return instance.patch(`${this._SPACES}/${data.id}`, data);
    }

    delete(id: string) {
      return instance.delete(`${this._SPACES}/${id}`);
    }
};

export const spaceService = new SpaceService();
