import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Component as RegisterPage } from './register.page';
import { instance } from '@/shared/api/instance';
import { useSession } from '@/shared/model/session';

// Mock dependencies
vi.mock('@/shared/api/instance', () => ({
    instance: {
        post: vi.fn(),
    },
}));

vi.mock('@/shared/model/session', () => ({
    useSession: vi.fn(),
}));

describe('RegisterPage', () => {
    const mockLogin = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useSession as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            login: mockLogin,
        });
    });

    it('renders register form correctly', () => {
        render(<RegisterPage />);

        expect(screen.getByText(/регистрация/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^email$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/^пароль$/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/подтвердите пароль/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /зарегистрироваться/i })).toBeInTheDocument();
    });

    it('submits form and logs in on success', async () => {
        const user = userEvent.setup();
        (instance.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            data: { accessToken: 'new-token' },
        });

        render(<RegisterPage />);

        const emailInput = screen.getByLabelText(/^email$/i);
        const passwordInput = screen.getByLabelText(/^пароль$/i);
        const confirmInput = screen.getByLabelText(/подтвердите пароль/i);
        const submitBtn = screen.getByRole('button', { name: /зарегистрироваться/i });

        await user.type(emailInput, 'newuser@example.com');
        await user.type(passwordInput, 'secret123');
        await user.type(confirmInput, 'secret123');
        await user.click(submitBtn);

        await waitFor(() => {
            expect(instance.post).toHaveBeenCalledWith('api/auth/register', {
                email: 'newuser@example.com',
                password: 'secret123',
            });
            expect(mockLogin).toHaveBeenCalledWith('new-token');
        });
    });

    it('validates passwords match', async () => {
        render(<RegisterPage />);
        const link = screen.getByRole('link', { name: /войдите в аккаунт/i });
        expect(link).toHaveAttribute('href', '/login');
    });
});
