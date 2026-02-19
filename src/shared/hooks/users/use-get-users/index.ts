import { useQuery } from '@tanstack/react-query';

import { userService } from '@/shared/services/user.service';

export const useGetUsersQuery = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return userService.getAll();
    },
    select: (data) => data.data,
  });
};
