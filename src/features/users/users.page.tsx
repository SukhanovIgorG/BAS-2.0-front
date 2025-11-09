import { Page } from '@/shared/components';

function UsersPage() {
  return (
    <Page title="Список пользователей">
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </Page>
  );
}

export const Component = UsersPage;
