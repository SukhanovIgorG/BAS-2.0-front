import { useSession } from '@/shared/model/session';
import { Button } from '@/shared/ui/kit';

export const LogoutButton = () => {
  const { logout } = useSession();
  return (
    <Button onClick={logout} className="bg-red-500 text-white hover:bg-red-600">
      Logout
    </Button>
  );
};
