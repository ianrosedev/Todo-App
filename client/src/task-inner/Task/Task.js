import React, { Component } from 'react';
import ExpandedViewModal from '../../shared/ExpandedViewModal/ExpandedViewModal';
import './Task.css';
import { Segment, Icon } from 'semantic-ui-react';

class Task extends Component {
  handleDeleteSubTask = () => (
    this.props.deleteSubTask(this.props._id, this.props.taskType, this.props.subId)
  );

  render() {
    const compactedBodyText = (this.props.body.length >= 197) ?
          this.props.body.slice(0, 197) + '...' :
          this.props.body;

    return (
      <Segment id='task'>
        <ExpandedViewModal {...this.props} />
        <Icon
          name='remove'
          onClick={this.handleDeleteSubTask}
        />
        <Icon name='checkmark' />
        <Icon name='edit' />
        <hr />
        <p>{compactedBodyText}</p>
      </Segment>
    );
  }
};

export default Task;
