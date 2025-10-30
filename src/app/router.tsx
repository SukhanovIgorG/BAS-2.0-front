import { createBrowserRouter, redirect } from 'react-router-dom';

import { AppLayout, AuthLayout } from '@/shared/components';

import { ROUTES } from '../shared/model/routes';
import App from './App';
import { protectedLoader } from './protected-loader';
import { ProtectedRoute } from './protected-route';
import { Providers } from './providers';

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      // 🔒 Защищённые маршруты
      {
        loader: protectedLoader,
        element: (
          <AppLayout>
            <ProtectedRoute />
          </AppLayout>
        ),
        children: [
          {
            path: ROUTES.USERS,
            lazy: () => import('@/features/users/users.page'),
          },
          {
            path: ROUTES.SPACES,
            lazy: () => import('@/features/spaces/spaces.page'),
          },
          {
            path: ROUTES.SPACE,
            lazy: () => import('@/features/space/space.page'),
          },
          {
            path: ROUTES.STATISTIC,
            lazy: () => import('@/features/statistic/statistic.page'),
          },
        ],
      },

      // 🔑 Маршруты авторизации с отдельным layout
      {
        element: <AuthLayout />,
        children: [
          {
            path: ROUTES.LOGIN,
            lazy: () => import('@/features/auth/login.page'),
          },
          {
            path: ROUTES.REGISTER,
            lazy: () => import('@/features/auth/register.page'),
          },
        ],
      },

      // 🏠 Редирект
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.SPACES),
      },
    ],
  },
]);
