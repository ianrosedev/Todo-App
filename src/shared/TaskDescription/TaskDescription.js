import React from 'react';
import './TaskDescription.css';
import { Segment, Icon } from 'semantic-ui-react';

const TaskDescription = (props) => (
  <Segment
    id='task-description'
    color={props.color}
  >
    <strong>{props.task}</strong>
    <Icon name='remove' />
    <Icon name='checkmark' />
    <Icon name='edit' />
    <Icon
      name='square'
      color={props.color}
    />
  </Segment>
);

export default TaskDescription;
