import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ExpandedViewModal from '../../shared/ExpandedViewModal/ExpandedViewModal';
import UpdateSubTaskForm from '../../shared/UpdateSubTaskForm/UpdateSubTaskForm';
import ConfirmDelete from '../../shared/ConfirmDelete/ConfirmDelete';
import './Task.css';
import { Segment, Icon } from 'semantic-ui-react';

const propTypes = {
  _id: PropTypes.number.isRequired,
  subId: PropTypes.number.isRequired,
  taskType: PropTypes.string.isRequired,
  taskTitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  deleteSubTask: PropTypes.func.isRequired,
  subTaskCompleted: PropTypes.func.isRequired
};

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

    const testForHTTP =
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;

    return (
      <Segment id='task'>
        <ExpandedViewModal
          title={this.props.title}
          body={this.props.body}
        />
        <strong>
          {
            (this.props.taskType !== 'WEBSITES') ?
            this.props.title :
            <a href={
              (testForHTTP.test(this.props.title)) ?
                this.props.title :
                'http://' + this.props.title
            } target='_blank' rel='noopener noreferrer'>
              {this.props.title}
            </a>
          }
        </strong>
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
          editSubTask={this.props.editSubTask}
        />
        <hr />
        <p>{compactedBodyText}</p>
      </Segment>
    );
  }
};

Task.propTypes = propTypes;

export default Task;
