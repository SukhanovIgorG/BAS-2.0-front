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

function RegisterPage() {
  const { login } = useSession();
  const {
    handleSubmit,
    register,
    formState: { errors, isValid },
  } = useForm<RegisterFormType>({
    mode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  console.log('isValid :>> ', isValid);
  console.log('errors :>> ', errors);

  const onSubmit: SubmitHandler<RegisterFormType> = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
    };
    const res = await instance.post('auth/register', dto);
    console.log('res :>> ', res);
    login(res.data.accessToken);
    console.log(res);
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Регистрация</CardTitle>
          <CardDescription>Создайте новый аккаунт.</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="register-form" onSubmit={handleSubmit(onSubmit)}>
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
                </div>
                <Input
                  {...register('password', { required: true })}
                  id="password"
                  type="password"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="confirm">Повторите пароль</Label>
                </div>
                <Input
                  {...register('confirmPassword', { required: true })}
                  id="confirm"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button form="register-form" type="submit" className="w-full">
            Зарегистрироваться
          </Button>
          <CardDescription>
            Уже зарегистрированы?{' '}
            <a href={ROUTES.LOGIN} className="underline-offset-4 underline">
              Войдите в аккаунт
            </a>
            .
          </CardDescription>
        </CardFooter>
      </Card>
    </div>
  );
}

export const Component = RegisterPage;
