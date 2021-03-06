import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ImportanceDropdown from '../../shared/ImportanceDropdown/ImportanceDropdown';
import UpdateTaskForm from '../../shared/UpdateTaskForm/UpdateTaskForm';
import ConfirmDelete from '../../shared/ConfirmDelete/ConfirmDelete';
import './TaskDescription.css';
import { Segment, Icon } from 'semantic-ui-react';

const propTypes = {
  _id: PropTypes.number.isRequired,
  task: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  viewTaskBody: PropTypes.func.isRequired,
  changeTaskImportance: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired
};

class TaskDescription extends Component {
  handleViewTaskBody = () => (
    this.props.viewTaskBody(this.props._id)
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
          handleChangeTaskImportance={
            this.handleChangeTaskImportance
          }
        >
          <Icon
            name='square'
            color={this.props.color}
          />
        </ImportanceDropdown>
        <strong onClick={this.handleViewTaskBody}>
          {this.props.task}
        </strong>
        <ConfirmDelete handleDelete={this.handleDeleteTask}>
          <Icon name='remove' />
        </ConfirmDelete>
        <UpdateTaskForm
          _id={this.props._id}
          taskTitle={this.props.task}
          color={this.props.color}
          editTask={this.props.editTask}
        />
      </Segment>
    );
  }
};

TaskDescription.propTypes = propTypes;

export default TaskDescription;
