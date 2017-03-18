import React from 'react';
import { Segment, Icon } from 'semantic-ui-react';

const Task = (props) => (
  <Segment>
    <strong>{props.title}</strong>
    <Icon name='expand' />
    <Icon name='remove' />
    <Icon name='checkmark' />
    <Icon name='edit' />
    <hr />
    <p>{props.body}</p>
  </Segment>
);

export default Task;
