import React, { Component } from 'react';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import './TaskDescription.css';
import { Segment, Icon } from 'semantic-ui-react';

class TaskDescription extends Component {
  handleGetTaskId = () => (
    this.props.getTaskId(this.props._id)
  );

  handleDeleteTask = () => (
    this.props.deleteTask(this.props._id)
  );

  handleChangeTaskImportance = (color, level) => (
    this.props.changeTaskImportance(this.props._id, color, level)
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
        <Icon name='checkmark' />
        <Icon name='edit' />
      </Segment>
    );
  }
}

export default TaskDescription;
