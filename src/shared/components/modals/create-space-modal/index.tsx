import { Modal, type ModalProps } from 'antd';

import { SpaceForm } from '../../forms';

export type CreateSpaceModalProps = ModalProps;

export const CreateSpaceModal = (props: CreateSpaceModalProps) => {
  return (
    <Modal title="Modal create space" {...props}>
      <SpaceForm mode="create" />
    </Modal>
  );
};
