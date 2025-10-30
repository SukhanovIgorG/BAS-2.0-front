import { ConfigProvider } from 'antd';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/shared/api/query-client';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          borderRadius: 8,

          // Alias Token
          colorBgContainer: '#fff',
        },
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ConfigProvider>
  );
}
