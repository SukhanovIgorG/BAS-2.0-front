import { ConfigProvider } from 'antd';
import { App as AntdApp } from 'antd';

import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { queryClient } from '@/shared/api/query-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdApp>
      <ConfigProvider
        modal={{
          mask: {
            blur: true,
          },
        }}
        drawer={{
          mask: {
            blur: true,
          },
        }}
        theme={{
          token: {
            // Seed Token
            // Alias Token
            borderRadius: 3,
          },
          components: {
            Button: {},
            Menu: {},
          },
        }}
      >
        <QueryClientProvider client={queryClient}>
          {children}
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </ConfigProvider>
    </AntdApp>
  );
}
