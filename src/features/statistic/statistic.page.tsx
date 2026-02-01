import { Button, message } from 'antd';

import { Page } from '@/shared/components';

function StatisticPage() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Hello, Ant Design!');
  };

  return (
    <Page title="Статистика">
      {contextHolder}
      <Button type="primary" onClick={info}>
        Display normal message
      </Button>
    </Page>
  );
}

export const Component = StatisticPage;
