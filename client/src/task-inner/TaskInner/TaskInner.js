import React, { Component } from 'react';
import TaskInnerHeader from '../TaskInnerHeader/TaskInnerHeader';
import TaskInnerBody from '../TaskInnerBody/TaskInnerBody';
import './TaskInner.css';

class TaskInner extends Component {
  state = {status: 'OPEN'};

  updateStatusView = (newStatus) => (
    this.setState({status: newStatus})
  );

  render() {
    return (
      <div id='task-inner'>
        <TaskInnerHeader
          updateStatusView={this.updateStatusView}
          status={this.state.status}
          {...this.props}
        />

        <TaskInnerBody
          status={this.state.status}
          {...this.props}
        />
      </div>
    );
  }
};

export default TaskInner;
