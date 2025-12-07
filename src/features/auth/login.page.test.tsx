import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';
import { Component as LoginPage } from './login.page';
import { instance } from '@/shared/api/instance';
import { useSession } from '@/shared/model/session';

// Mock the dependencies
vi.mock('@/shared/api/instance', () => ({
    instance: {
        post: vi.fn(),
    },
}));

vi.mock('@/shared/model/session', () => ({
    useSession: vi.fn(),
}));

describe('LoginPage', () => {
    const mockLogin = vi.fn();

    beforeEach(() => {
        vi.clearAllMocks();
        (useSession as unknown as ReturnType<typeof vi.fn>).mockReturnValue({
            login: mockLogin,
        });
    });

    it('renders login form correctly', () => {
        render(<LoginPage />);

        expect(screen.getByText(/вход в аккаунт/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/пароль/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /^войти$/i })).toBeInTheDocument();
    });

    it('validates required fields', async () => {
        const user = userEvent.setup();
        render(<LoginPage />);

        const submitBtn = screen.getByRole('button', { name: /^войти$/i });
        await user.click(submitBtn);

        const emailInput = screen.getByLabelText(/email/i);
        await user.type(emailInput, 'invalid-email');
        await user.click(submitBtn);

        expect(await screen.findByText('Некорректный email')).toBeInTheDocument();
    });

    it('submits form and logs in on success', async () => {
        const user = userEvent.setup();
        (instance.post as unknown as ReturnType<typeof vi.fn>).mockResolvedValue({
            data: { accessToken: 'fake-token' },
        });

        render(<LoginPage />);

        const emailInput = screen.getByLabelText(/email/i);
        const passwordInput = screen.getByLabelText(/пароль/i);
        const submitBtn = screen.getByRole('button', { name: /^войти$/i });

        await user.type(emailInput, 'test@example.com');
        await user.type(passwordInput, 'password123');
        await user.click(submitBtn);

        await waitFor(() => {
            expect(instance.post).toHaveBeenCalledWith('auth/login', {
                email: 'test@example.com',
                password: 'password123',
            });
            expect(mockLogin).toHaveBeenCalledWith('fake-token');
        });
    });
});
