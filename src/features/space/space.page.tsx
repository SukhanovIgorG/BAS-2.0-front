import { Link, useParams } from 'react-router-dom';

import { Page } from '@/shared/components';
import { ROUTES } from '@/shared/model/routes';

function SpacePage() {
  const { spaceId } = useParams();

  return (
    <Page title={`Пространство ${spaceId}`}>
      <Link to={ROUTES.SPACES} title="Items">
        Все пространства
      </Link>
      <div
        className="grid grid-flow-dense auto-rows-max gap-4"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(60px, 1fr))',
        }}
      >
        <div className="w-[60px] h-[60px] bg-amber-300 rounded-lg flex items-center justify-center text-white font-semibold">
          1
        </div>
        <div className="w-[60px] h-[60px] bg-amber-300 rounded-lg flex items-center justify-center text-white font-semibold">
          2
        </div>
        <div className="w-[140px] h-[140px] bg-amber-400 rounded-lg flex items-center justify-center text-white font-semibold row-span-2 col-span-2">
          3
        </div>
        <div className="w-[140px] h-[140px] bg-amber-400 rounded-lg flex items-center justify-center text-white font-semibold row-span-2 col-span-2">
          4
        </div>
        <div className="w-[140px] h-[60px] bg-amber-500 rounded-lg flex items-center justify-center text-white font-semibold col-span-2">
          5
        </div>
        <div className="w-[140px] h-[60px] bg-amber-500 rounded-lg flex items-center justify-center text-white font-semibold col-span-2">
          6
        </div>
        <div className="w-[300px] h-[300px] bg-amber-600 rounded-lg flex items-center justify-center text-white font-semibold row-span-4 col-span-4">
          7
        </div>
        <div className="w-[300px] h-[300px] bg-amber-600 rounded-lg flex items-center justify-center text-white font-semibold row-span-4 col-span-4">
          8
        </div>
        <div className="w-[60px] h-[60px] bg-amber-300 rounded-lg flex items-center justify-center text-white font-semibold">
          9
        </div>
        <div className="w-[60px] h-[60px] bg-amber-300 rounded-lg flex items-center justify-center text-white font-semibold">
          10
        </div>
        <div className="w-[140px] h-[60px] bg-amber-500 rounded-lg flex items-center justify-center text-white font-semibold col-span-2">
          11
        </div>
        <div className="w-[140px] h-[60px] bg-amber-500 rounded-lg flex items-center justify-center text-white font-semibold col-span-2">
          12
        </div>
      </div>
    </Page>
  );
}

export const Component = SpacePage;
