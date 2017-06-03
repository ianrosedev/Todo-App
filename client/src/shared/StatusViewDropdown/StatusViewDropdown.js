import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';

const propTypes = {
  status: PropTypes.string.isRequired,
  updateStatusView: PropTypes.func.isRequired
};

class StatusViewDropdown extends Component {
  handleUpdateStatusView = (status) => (
    this.props.updateStatusView(status)
  );

  render() {
    return (
      <Dropdown
        text={this.props.status[0] + this.props.status.slice(1).toLowerCase()}
        labeled
        button
        className='icon'
      >
        <Dropdown.Menu>
          <Dropdown.Item
            text='Open'
            onClick={() => this.handleUpdateStatusView('OPEN')}
          />
          <Dropdown.Item
            text='Completed'
            onClick={() => this.handleUpdateStatusView('COMPLETED')}
          />
          <Dropdown.Item
            text='All'
            onClick={() => this.handleUpdateStatusView('ALL')}
          />
        </Dropdown.Menu>
      </Dropdown>
    );
  }
};

StatusViewDropdown.propTypes = propTypes;

export default StatusViewDropdown;
