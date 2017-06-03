import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ExpandedViewModal.css';
import { Modal, Icon } from 'semantic-ui-react';

const propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string
};

class ExpandedViewModal extends Component {
  state = {
    isOpen: false
  };

  render() {
    return (
      <Modal
        id='expanded-view-modal'
        open={this.state.isOpen}
        trigger={
          <Icon
            name='expand'
            onClick={() => this.setState({
              isOpen: true
            })}
          />
        }
        closeIcon={
          <Icon
            name='close'
            onClick={() => {this.setState({isOpen: false})}}
          />
        }
      >
        <Modal.Header>
          {this.props.title}
        </Modal.Header>
        <Modal.Content>
          <Modal.Description>
            {this.props.body}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    );
  }
};

ExpandedViewModal.propTypes = propTypes;

export default ExpandedViewModal;
