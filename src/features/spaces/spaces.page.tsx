import { Button, Space, Table, type TableProps } from 'antd';
import { Link } from 'react-router-dom';

import { CreateSpaceModal, Page } from '@/shared/components';
import { ROUTES } from '@/shared/model/routes';
import { Trigger } from '@/shared/ui';

type Space = {
  id: string;
  name: string;
  address: string;
};

const SPACES: Space[] = [
  {
    id: 'first-mock-space',
    name: 'First',
    address: 'planet Saturn',
  },
];

const columns: TableProps<Space>['columns'] = [
  {
    title: 'Название',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Адрес',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Ссылка',
    render: ({ id: spaceId }) => (
      <Link to={ROUTES.SPACE.replace(':spaceId', spaceId)} title="Items">
        Перейти
      </Link>
    ),
  },
];

function SpacesPage() {
  return (
    <Page title="Список пространств">
      <Trigger modal={<CreateSpaceModal />}>
        <Button style={{ marginBottom: '20px' }}>Создать пространство</Button>
      </Trigger>
      <Table
        dataSource={SPACES || []}
        columns={columns}
        loading={false}
        rowKey={(record) => record.id}
      />
    </Page>
  );
}

export const Component = SpacesPage;
