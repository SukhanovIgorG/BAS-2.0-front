import { createBrowserRouter, redirect } from 'react-router-dom';

import { Header } from '@/features/header';

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
        loader: protectedLoader,
        element: (
          <>
            <Header />
            <ProtectedRoute />
          </>
        ),
        children: [
          {
            path: ROUTES.ITEMS,
            lazy: () => import('@/features/items-list/items-list.page'),
          },
          {
            path: ROUTES.ITEM,
            lazy: () => import('@/features/item/item.page'),
          },
        ],
      },

      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login.page'),
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register.page'),
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.ITEMS),
      },
    ],
  },
]);
