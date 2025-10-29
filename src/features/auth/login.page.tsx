import { type SubmitHandler, useForm } from 'react-hook-form';

import { instance } from '@/shared/api/instance';
import { ROUTES } from '@/shared/model/routes';
import { useSession } from '@/shared/model/session';
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Label,
} from '@/shared/ui/kit';

interface RegisterFormType {
  email: string;
  password: string;
  confirmPassword: string;
}

function LoginPage() {
  const { login } = useSession();
  const { handleSubmit, register } = useForm<RegisterFormType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
    };
    const res = await instance.post('auth/login', dto);
    login(res.data.accessToken);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Вход в аккаунт</CardTitle>
          <CardDescription>Введите свои данные для входа.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} id="login-form">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  {...register('email', { required: true })}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </a>
                </div>
                <Input
                  {...register('password', { required: true })}
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full" form="login-form">
            Войти
          </Button>
          <Button variant="outline" className="w-full">
            Войти через Google
          </Button>
          <CardDescription>
            Если нет аккаунта, вы можете{' '}
            <a href={ROUTES.REGISTER} className="underline-offset-4 underline">
              зарегистрироваться
            </a>
            .
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export const Component = LoginPage;
