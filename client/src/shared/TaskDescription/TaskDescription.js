import React, { Component } from 'react';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import UpdateTaskForm from '../../shared/UpdateTaskForm/UpdateTaskForm';
import './TaskDescription.css';
import { Segment, Icon } from 'semantic-ui-react';

class TaskDescription extends Component {
  handleGetTaskId = () => (
    this.props.getTaskId(this.props._id)
  );

  handleChangeTaskImportance = (color, level) => (
    this.props.changeTaskImportance(this.props._id, color, level)
  );

  handleDeleteTask = () => (
    this.props.deleteTask(this.props._id)
  );

  render() {
    return (
      <Segment
        id='task-description'
        color={this.props.color}
      >
        <ImportanceDropdown
          icon={
            <Icon
              name='square'
              color={this.props.color}
            />
          }
          handleChangeTaskImportance={
            this.handleChangeTaskImportance
          }
        />
        <strong onClick={this.handleGetTaskId}>
          {this.props.task}
        </strong>
        <Icon
          name='remove'
          onClick={this.handleDeleteTask}
        />
        <UpdateTaskForm
          taskTitle={this.props.task}
          color={this.props.color}
          editTask={this.props.editTask}
          _id={this.props._id}
        />
      </Segment>
    );
  }
}

export default TaskDescription;
