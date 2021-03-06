import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StatusViewDropdown from '../../shared/StatusViewDropdown/StatusViewDropdown';
import ConfirmDelete from '../../shared/ConfirmDelete/ConfirmDelete';
import './TaskInnerHeader.css'
import { Menu, Button } from 'semantic-ui-react';

const propTypes = {
  _id: PropTypes.number.isRequired,
  taskName: PropTypes.string.isRequired,
  goBackHome: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

class TaskInnerHeader extends Component {
  handleGoBackHome = () => (
    this.props.goBackHome()
  );

  handleDeleteTask = () => {
    this.props.deleteTask(this.props._id);
    this.handleGoBackHome();
  };

  render() {
    return (
      <Menu borderless id='task-inner-header'>
        <Menu.Item header>
          <h3>{this.props.taskName}</h3>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <StatusViewDropdown
              updateStatusView={this.props.updateStatusView}
              status={this.props.status}
            />
            <Button
              icon='level up'
              color='blue'
              onClick={this.handleGoBackHome}
            />
            <ConfirmDelete handleDelete={this.handleDeleteTask}>
              <Button
                color='red'
                icon='delete'
              />
            </ConfirmDelete>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
};

TaskInnerHeader.propTypes = propTypes;

export default TaskInnerHeader;
