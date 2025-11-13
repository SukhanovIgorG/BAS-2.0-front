import { type UseQueryResult, useQuery } from '@tanstack/react-query';

import { userService } from '@/shared/services/user.service';
import { type User } from '@/shared/types';

export const useGetUsersQuery = (): UseQueryResult<User[], Error> => {
  return useQuery({
    queryKey: ['users'],
    queryFn: () => {
      return userService.getAll();
    },
    select: (data) => data,
  });
};
