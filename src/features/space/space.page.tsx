import { Link } from 'react-router-dom';

import { ROUTES } from '@/shared/model/routes';

function SpacePage() {
  return (
    <div>
      <h2>Пространство</h2>
      <Link to={ROUTES.SPACES} title="Items">
        Все пространства
      </Link>
    </div>
  );
}

export const Component = SpacePage;
