import React, { Component } from 'react';
import './TaskDescription.css';
import { Segment, Icon } from 'semantic-ui-react';

class TaskDescription extends Component {
  handleGetTaskId = () => (
    this.props.getTaskId(this.props._id)
  );

  render() {
    return (
      <Segment
        id='task-description'
        color={this.props.color}
        onClick={this.handleGetTaskId}
      >
        <strong>{this.props.task}</strong>
        <Icon name='remove' />
        <Icon name='checkmark' />
        <Icon name='edit' />
        <Icon
          name='square'
          color={this.props.color}
        />
      </Segment>
    );
  }
}

export default TaskDescription;
