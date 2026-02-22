import { Button, message } from 'antd';

import { Page } from '@/shared/components';

function StatisticPage() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    messageApi.info('Я - сообщение!');
  };

  return (
    <Page title="Статистика">
      {contextHolder}
      <Button type="dashed" onClick={info}>
        Показать всплывающее сообщение
      </Button>
    </Page>
  );
}

export const Component = StatisticPage;
