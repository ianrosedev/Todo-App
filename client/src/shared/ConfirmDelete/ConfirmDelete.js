import React, { Component } from 'react';
import { Confirm } from 'semantic-ui-react';

class ConfirmDelete extends Component {
  state = { isOpen: false };

  show = () => (
    this.setState({isOpen: true})
  );

  handleConfirm = () => {
    this.props.handleDelete();
    this.setState({isOpen: false});
  };

  handleCancel = () => (
    this.setState({isOpen: false})
  );

  render() {
    return (
      <span>
        <span onClick={this.show}>
          {this.props.children}
        </span>
        <Confirm
          open={this.state.isOpen}
          content='Are you sure you want to delete this?'
          confirmButton='Delete'
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
        />
      </span>
    );
  }
};

export default ConfirmDelete;
