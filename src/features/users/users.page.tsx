import { Page } from '@/shared/components';
import { useGetUsersQuery } from '@/shared/hooks';

function UsersPage() {
  const userList = useGetUsersQuery();

  return (
    <Page title="Список пользователей">
      <ul>
        {userList.data?.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </Page>
  );
}

export const Component = UsersPage;
