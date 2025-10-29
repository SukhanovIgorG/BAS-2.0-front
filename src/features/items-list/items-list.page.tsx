import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function ItemsListPage() {
  return (
    <div>
      <h2>Items List Page</h2>
      <h1>Welcome to evolution design template</h1>
      <ul>
        <li>
          <Link to={ROUTES.ITEM} title="Items">
            item 1
          </Link>
        </li>
        <li>
          <Link to={ROUTES.ITEMS} title="Items">
            item 2
          </Link>
        </li>
        <li>
          <Link to={ROUTES.ITEMS} title="Items">
            item 3
          </Link>
        </li>
      </ul>
    </div>
  );
}

export const Component = ItemsListPage;
