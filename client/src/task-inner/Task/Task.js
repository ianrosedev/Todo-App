import React from 'react';
import ExpandedViewModal from '../../shared/ExpandedViewModal/ExpandedViewModal';
import './Task.css';
import { Segment, Icon } from 'semantic-ui-react';

const Task = (props) => {
  const compactedBodyText = (props.body.length >= 197) ?
        props.body.slice(0, 197) + '...' :
        props.body;

  return (
    <Segment id='task'>
      <ExpandedViewModal {...props} />
      <Icon name='remove' />
      <Icon name='checkmark' />
      <Icon name='edit' />
      <hr />
      <p>{compactedBodyText}</p>
    </Segment>
  );
};

export default Task;
