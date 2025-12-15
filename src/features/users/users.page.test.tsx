import { render, screen } from '@testing-library/react';
import { Component as UsersPage } from './users.page';
import { vi } from 'vitest';

vi.mock('@/shared/hooks', () => ({
    useGetUsersQuery: vi.fn().mockReturnValue({
        data: [
            { id: '1', email: 'test@example.com', username: 'user1', roles: ['admin', 'loser', 'verylongrole'] },
            { id: '2', email: 'other@example.com', username: 'user2', roles: ['user'] }
        ],
        isLoading: false
    }),
}));

describe('UsersPage', () => {
    it('renders correctly', () => {
        render(<UsersPage />);
        expect(screen.getByText('Список пользователей')).toBeInTheDocument();
        expect(screen.getByText('user1')).toBeInTheDocument();
        expect(screen.getByText('loser'.toUpperCase())).toBeInTheDocument();
        expect(screen.getByText('verylongrole'.toUpperCase())).toBeInTheDocument();
    });
});
