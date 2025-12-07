import { router } from './router';
import { vi } from 'vitest';

vi.mock('@/features/auth/login.page', () => ({
    default: () => <div>Login Page</div>
}));
vi.mock('@/features/spaces/spaces.page', () => ({
    default: () => <div>Spaces Page</div>
}));

describe('Router', () => {
    it('defines routes', async () => {
        expect(router).toBeDefined();
        expect(router.routes.length).toBeGreaterThan(0);
    });
});
