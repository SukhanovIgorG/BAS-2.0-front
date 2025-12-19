import { useSession } from "@/shared/model/session";
import { authService } from "@/shared/services";
import type { LoginDto } from "@/shared/types/dto";
import { useMutation } from "@tanstack/react-query";

export const useLoginMutation = () => {
  const { login } = useSession();

  return useMutation({
    mutationFn: (dto: LoginDto) => authService.login(dto),
    onSuccess: (data) => {
      login(data.data.accessToken);
    },
    onError: (error) => {
      console.log('ошибка авторизации', error);
    },
  });
};