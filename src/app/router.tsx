import { Navigate, createBrowserRouter } from 'react-router-dom';

import { AppLayout, AuthLayout, RouteFallback } from '@/shared/components';

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
      {
        index: true, // изменили path на index
        element: <Navigate to={ROUTES.SPACES} replace />,
      },
      // 🔒 Защищённые маршруты
      {
        loader: protectedLoader,
        element: (
          <AppLayout>
            <ProtectedRoute />
          </AppLayout>
        ),
        HydrateFallback: RouteFallback,
        children: [
          {
            path: ROUTES.USERS,
            lazy: () => import('@/features/users/users.page'),
            HydrateFallback: RouteFallback,
          },
          {
            path: ROUTES.SPACES,
            lazy: () => import('@/features/spaces/spaces.page'),
            HydrateFallback: RouteFallback,
          },
          {
            path: ROUTES.SPACE,
            lazy: () => import('@/features/space/space.page'),
            HydrateFallback: RouteFallback,
          },
          {
            path: ROUTES.STATISTIC,
            lazy: () => import('@/features/statistic/statistic.page'),
            HydrateFallback: RouteFallback,
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
            HydrateFallback: RouteFallback,
          },
          {
            path: ROUTES.REGISTER,
            lazy: () => import('@/features/auth/register.page'),
            HydrateFallback: RouteFallback,
          },
        ],
      },
    ],
  },
]);
