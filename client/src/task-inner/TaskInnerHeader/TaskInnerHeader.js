import React, { Component } from 'react';
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
          <strong>{this.props.data.TASK_NAME}</strong>
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button
              icon='level up'
              onClick={this.handleGoBackHome}
            />
            <Button
              color='green'
              icon='checkmark'
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
