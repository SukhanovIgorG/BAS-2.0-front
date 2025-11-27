import type { ModalProps } from 'antd';
import { type ReactElement, useState } from 'react';

export type TriggerProps = {
  children: ReactElement;
  modal: ReactElement<ModalProps>;
};

export const Trigger = ({ children, modal }: TriggerProps) => {
  const [isActive, setActive] = useState(false);

  return (
    <>
      <children.type
        onClick={() => setActive(true)}
        {...(children.props as object)}
      />
      {isActive ? (
        <modal.type
          {...modal.props}
          open={isActive}
          onCancel={() => {
            setActive(false);
          }}
        />
      ) : null}
    </>
  );
};
