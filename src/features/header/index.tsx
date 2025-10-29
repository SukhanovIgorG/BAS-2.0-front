import { useSession } from '@/shared/model/session';
import { Button } from '@/shared/ui/kit';

export const Header = () => {
  const { logout } = useSession();
  return (
    <div className="flex justify-between p-4 ">
      <h1>header</h1>
      <Button
        onClick={logout}
        className="bg-red-500 text-white hover:bg-red-600"
        variant={'outline'}
      >
        Logout
      </Button>
    </div>
  );
};
