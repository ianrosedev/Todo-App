import React from 'react';
import './ExpandedViewModal.css';
import { Modal, Icon } from 'semantic-ui-react';

const ExpandedViewModal = (props) => (
  <Modal
    id='expanded-view-modal'
    trigger={<Icon name='expand' />}
  >
    <Modal.Header>
      {props.title}
      <Icon name='remove' />
      <Icon name='checkmark' />
      <Icon name='edit' />
    </Modal.Header>
    <Modal.Content>
      <Modal.Description>
        {props.body}
      </Modal.Description>
    </Modal.Content>
  </Modal>
);

export default ExpandedViewModal;
