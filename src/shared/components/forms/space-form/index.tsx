import { Form, type FormProps, Input } from 'antd';

export type SpaceFormProps = FormProps & {
  mode: 'edit' | 'create';
};

export const SpaceForm = (props: SpaceFormProps) => {
  return (
    <Form {...props}>
      <Form.Item label="Name">
        <Input />
      </Form.Item>
      <Form.Item label="Address">
        <Input />
      </Form.Item>
    </Form>
  );
};
