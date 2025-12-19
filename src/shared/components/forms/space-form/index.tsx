import type { SpaceType } from '@/shared/types';
import { Form, type FormProps, Input } from 'antd';

export type SpaceFormProps = FormProps & {
  mode: 'edit' | 'create';
  initialData?: SpaceType;
};

export const SpaceForm = ({ mode, initialData, ...props }: SpaceFormProps) => {

  return (
    <Form {...props}>
      <Form.Item label="Name" name="name">
        <Input />
      </Form.Item>
      <Form.Item label="Address">
        <Input />
      </Form.Item>
    </Form>
  );
};
