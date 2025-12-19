import { spaceService } from "@/shared/services";
import type { SpaceType } from "@/shared/types";
import { useMutation } from "@tanstack/react-query";

export const useCreateSpaceMutation = () => {
  return useMutation({
    mutationFn: (data: SpaceType) => {
      return spaceService.create(data);
    },
  });
};