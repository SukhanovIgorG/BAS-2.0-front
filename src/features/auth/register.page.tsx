import { Card, Form, type FormProps, Typography } from 'antd';

import { instance } from '@/shared/api/instance';
import { ROUTES } from '@/shared/model/routes';
import { useSession } from '@/shared/model/session';
import { Button, Input } from '@/shared/ui/kit';

const defaultValues = {
  email: '',
  password: '',
  confirmPassword: '',
};

interface RegisterFormType {
  email: string;
  password: string;
  confirmPassword: string;
}

function RegisterPage() {
  const { login } = useSession();

  const onFinish: FormProps<RegisterFormType>['onFinish'] = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
    };
    const res = await instance.post('auth/register', dto);
    login(res.data.accessToken);
  };

  const onFinishFailed: FormProps<RegisterFormType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Card title="Регистрация">
      <Form
        id="register-form"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout="vertical"
        initialValues={defaultValues}
        autoComplete="off"
      >
        <Form.Item label="Email" name="email">
          <Input
            size="large"
            id="email"
            type="email"
            placeholder="m@example.com"
            required
          />
        </Form.Item>
        <Form.Item label="Пароль">
          <Input size="large" id="password" type="password" required />
        </Form.Item>
        <Form.Item label="Подтвердите пароль">
          <Input size="large" id="confirm" type="password" required />
        </Form.Item>
      </Form>
      <Card className="flex-col gap-2">
        <Button
          type="primary"
          size="large"
          form="register-form"
          htmlType="submit"
          className="w-full"
        >
          Зарегистрироваться
        </Button>
      </Card>
      <Typography>
        Уже зарегистрированы?{' '}
        <Button
          type="link"
          href={ROUTES.LOGIN}
          className="underline-offset-4 underline"
        >
          Войдите в аккаунт
        </Button>
        .
      </Typography>
    </Card>
  );
}

export const Component = RegisterPage;
