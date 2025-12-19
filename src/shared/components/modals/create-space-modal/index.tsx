import { Modal, type ModalProps } from 'antd';

import { SpaceForm } from '../../forms';

export type CreateSpaceModalProps = ModalProps;

export const CreateSpaceModal = (props: CreateSpaceModalProps) => {
  return (
    <Modal title="Создать пространство" {...props}>
      <SpaceForm mode="create" />
    </Modal>
  );
};
