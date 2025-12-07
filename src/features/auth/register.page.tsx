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
    const res = await instance.post('api/auth/register', dto);
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
            type="email"
            placeholder="m@example.com"
            required
          />
        </Form.Item>
        <Form.Item label="Пароль" name="password">
          <Input size="large" type="password" required />
        </Form.Item>
        <Form.Item
          label="Подтвердите пароль"
          name="confirmPassword"
          dependencies={['password']}
          rules={[
            { required: true, message: 'Пожалуйста, подтвердите пароль!' },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('Пароли не совпадают!'));
              },
            }),
          ]}
        >
          <Input size="large" type="password" required />
        </Form.Item>
      </Form>
      <Button
        type="primary"
        size="large"
        form="register-form"
        htmlType="submit"
        className="w-full"
      >
        Зарегистрироваться
      </Button>
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
