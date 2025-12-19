import { spaceService } from "@/shared/services";
import { useQuery } from "@tanstack/react-query";

export const useGetAllSpacesQuery = () => {
  return useQuery({
    queryKey: ['spaces'],
    queryFn: () => spaceService.getAll(),
  });
};