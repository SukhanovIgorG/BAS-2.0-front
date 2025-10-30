import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function SpacesPage() {
  const spaceId = '1'; // пример ID

  return (
    <div>
      <h2>Список пространств</h2>
      <ul>
        <li>
          <Link to={ROUTES.SPACE.replace(':spaceId', spaceId)} title="Items">
            item 1
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const Component = SpacesPage;
