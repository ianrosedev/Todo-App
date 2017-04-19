import React, { Component } from 'react';
import ExpandedViewModal from '../../shared/ExpandedViewModal/ExpandedViewModal';
import UpdateSubTaskForm from '../../shared/UpdateSubTaskForm/UpdateSubTaskForm';
import ConfirmDelete from '../../shared/ConfirmDelete/ConfirmDelete';
import './Task.css';
import { Segment, Icon } from 'semantic-ui-react';

class Task extends Component {
  handleDeleteSubTask = () => (
    this.props.deleteSubTask(this.props._id, this.props.taskType, this.props.subId)
  );

  handleSubTaskCompleted = () => (
    this.props.subTaskCompleted(this.props._id, this.props.taskType, this.props.subId)
  );

  render() {
    const compactedBodyText = (this.props.body.length >= 200) ?
          this.props.body.slice(0, 197) + '...' :
          this.props.body;

    return (
      <Segment id='task'>
        <ExpandedViewModal {...this.props} />
        <strong>{this.props.title}</strong>
        <ConfirmDelete handleDelete={this.handleDeleteSubTask}>
          <Icon name='remove' />
        </ConfirmDelete>
        <Icon
          name='checkmark'
          onClick={this.handleSubTaskCompleted}
        />
        <UpdateSubTaskForm
          _id={this.props._id}
          subId={this.props.subId}
          taskTitle={this.props.taskTitle}
          title={this.props.title}
          body={this.props.body}
          color={this.props.color}
          editSubTask={this.props.editSubTask}
        />
        <hr />
        <p>{compactedBodyText}</p>
      </Segment>
    );
  }
};

export default Task;
