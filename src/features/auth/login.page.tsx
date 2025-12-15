import { styled } from 'styled-components';

import { Card, Flex, Form, type FormProps, Typography } from 'antd';

import { instance } from '@/shared/api/instance';
import { ROUTES } from '@/shared/model/routes';
import { useSession } from '@/shared/model/session';
import { Button, Input } from '@/shared/ui/kit';

const defaultValues = {
  email: '',
  password: '',
};

interface LoginFormType {
  email: string;
  password: string;
}

function LoginPage() {
  const { login } = useSession();

  const onFinish: FormProps<LoginFormType>['onFinish'] = async (data) => {
    const dto = {
      email: data.email,
      password: data.password,
    };
    const res = await instance.post('auth/login', dto);
    login(res.data.accessToken);
  };

  const onFinishFailed: FormProps<LoginFormType>['onFinishFailed'] = (
    errorInfo,
  ) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledCard title="Вход в аккаунт" className="w-full max-w-sm">
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        id="login-form"
        initialValues={defaultValues}
        validateTrigger="onChange"
      >
        <Form.Item
          label="Email"
          name="email"
          className="grid gap-2"
          rules={[{ pattern: /\S+@\S+\.\S+/, message: 'Некорректный email' }]}
        >
          <Input
            type="email"
            size="large"
            placeholder="m@example.com"
            required
          />
        </Form.Item>
        <Form.Item
          label="Пароль"
          name="password"
          className="grid gap-2"
          rules={[
            {
              min: 8,
              message: 'Пароль должен содержать не менее 8 символов',
            },
          ]}
        >
          <Input type="password" size="large" required />
        </Form.Item>
        <Card
          size="small"
          extra={
            <Button
              type="link"
              href="#"
              className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
            >
              Забыли пароль?
            </Button>
          }
        >
          <Flex vertical gap="small" style={{ width: '100%' }}>
            <Button
              htmlType="submit"
              variant="filled"
              className="w-full"
              form="login-form"
              type="primary"
              size="large"
            >
              Войти
            </Button>
            <Button disabled className="w-full">
              Войти через Google
            </Button>
          </Flex>
        </Card>
        <Typography>
          Если нет аккаунта, вы можете{' '}
          <Button
            type="link"
            href={ROUTES.REGISTER}
            className="underline-offset-4 underline "
          >
            зарегистрироваться
          </Button>
        </Typography>
      </Form>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  border: 3px solid #252424;
  border-radius: 3px;
  box-shadow: 4px 4px 0 0 #221b19;
`;

export const Component = LoginPage;
