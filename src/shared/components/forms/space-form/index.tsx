import { Form, type FormProps, Input } from 'antd';

import type { SpaceType } from '@/shared/types';

export type SpaceFormProps = FormProps & {
  mode: 'edit' | 'create';
  initialData?: SpaceType;
};

export const SpaceForm = ({ mode, initialData, ...props }: SpaceFormProps) => {
  const onSubmit = (values: SpaceType) => {
    console.log(mode, values);
  };
  return (
    <Form
      initialValues={{
        ...initialData,
      }}
      onFinish={onSubmit}
      {...props}
    >
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Address">
        <Input />
      </Form.Item>
    </Form>
  );
};
