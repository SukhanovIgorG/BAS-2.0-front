import { Link } from 'react-router-dom';

import { Page } from '@/shared/components';
import { ROUTES } from '@/shared/model/routes';

function SpacesPage() {
  const spaceId = '1'; // пример ID

  return (
    <Page title="Список пространств">
      <ul>
        <li>
          <Link to={ROUTES.SPACE.replace(':spaceId', spaceId)} title="Items">
            item 1
          </Link>
        </li>
      </ul>
    </Page>
  );
}

export const Component = SpacesPage;
