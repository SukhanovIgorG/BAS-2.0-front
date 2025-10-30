import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function SpacesPage() {
  return (
    <div>
      <h2>Список пространств</h2>
      <ul>
        <li>
          <Link
            to={{
              pathname: `${ROUTES.SPACES}`,
            }}
            title="Items"
          >
            item 1
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SPACES} title="Items">
            item 2
          </Link>
        </li>
        <li>
          <Link to={ROUTES.SPACES} title="Items">
            item 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const Component = SpacesPage;
