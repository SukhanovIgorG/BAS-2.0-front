import { vi } from 'vitest';
import { userService } from './user.service';
import { instance } from '../api/instance';

vi.mock('../api/instance', () => ({
    instance: {
        get: vi.fn(),
    },
}));

describe('UserService', () => {
    it('getAll makes api call', async () => {
        const mockUsers = [{ id: 1, name: 'John' }];
        (instance.get as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({ data: mockUsers });

        const users = await userService.getAll();

        expect(instance.get).toHaveBeenCalledWith('/users');
        expect(users).toBe(mockUsers);
    });
});
