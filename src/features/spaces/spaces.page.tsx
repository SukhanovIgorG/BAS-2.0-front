import { Button, Table, type TableProps } from 'antd';
import { Link } from 'react-router-dom';

import { CreateSpaceModal, Page } from '@/shared/components';
import { useGetAllSpacesQuery } from '@/shared/hooks';
import { ROUTES } from '@/shared/model/routes';
import type { SpaceType } from '@/shared/types';
import { Trigger } from '@/shared/ui';

const columns: TableProps<SpaceType>['columns'] = [
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
  const { data, isLoading } = useGetAllSpacesQuery();

  return (
    <Page title="Список пространств">
      <Trigger modal={<CreateSpaceModal />}>
        <Button style={{ marginBottom: '20px' }}>Создать пространство</Button>
      </Trigger>
      <Table
        dataSource={data?.data}
        columns={columns}
        loading={isLoading}
        rowKey={(record) => record.id}
        pagination={{
          total: data?.pagination.total,
          current: data?.pagination.page,
          pageSize: data?.pagination.size,
        }}
      />
    </Page>
  );
}

export const Component = SpacesPage;
