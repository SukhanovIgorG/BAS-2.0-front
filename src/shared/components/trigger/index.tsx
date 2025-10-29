import { type ReactElement, useState } from 'react';

type DialogProps = {
  onClose: () => void;
}; // TODO: add your modal props

export type TriggerProps = {
  children: ReactElement;
  modal: ReactElement<DialogProps>;
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
          onClose={() => {
            setActive(false);
          }}
        />
      ) : null}
    </>
  );
};
