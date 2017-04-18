import React, { Component } from 'react';
import StatusViewDropdown from '../../shared/StatusViewDropdown/StatusViewDropdown';
import './TaskInnerHeader.css'
import { Menu, Button } from 'semantic-ui-react';

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
          <h3>{this.props.data.TASK_NAME}</h3>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <StatusViewDropdown
              updateStatusView={this.props.updateStatusView}
              status={this.props.status}
            />
            <Button
              icon='level up'
              onClick={this.handleGoBackHome}
            />
            <Button
              color='red'
              icon='delete'
              onClick={this.handleDeleteTask}
            />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }
};

export default TaskInnerHeader;
