import { useQuery } from '@tanstack/react-query';

import { spaceService } from '@/shared/services';

export const useGetAllSpacesQuery = () => {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: () => spaceService.getAll(),
    select: (data) => data.data,
  });
};
