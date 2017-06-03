import React, { Component } from 'react';
import TaskInnerHeader from '../TaskInnerHeader/TaskInnerHeader';
import TaskInnerBody from '../TaskInnerBody/TaskInnerBody';
import './TaskInner.css';

class TaskInner extends Component {
  state = { status: 'OPEN' };

  updateStatusView = (newStatus) => (
    this.setState({status: newStatus})
  );

  render() {
    return (
      <div id='task-inner'>
        <TaskInnerHeader
          _id={this.props._id}
          taskName={this.props.data.TASK_NAME}
          status={this.state.status}
          updateStatusView={this.updateStatusView}
          deleteTask={this.props.deleteTask}
          goBackHome={this.props.goBackHome}
        />

        <TaskInnerBody
          data={this.props.data}
          _id={this.props._id}
          status={this.state.status}
          addSubTask={this.props.addSubTask}
          deleteSubTask={this.props.deleteSubTask}
          editSubTask={this.props.editSubTask}
          subTaskCompleted={this.props.subTaskCompleted}
        />
      </div>
    );
  }
};

export default TaskInner;
