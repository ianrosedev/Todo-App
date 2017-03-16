import React from 'react';
import './TaskDescription.css';
import { Segment, Button } from 'semantic-ui-react';

const TaskDescription = (props) => (
  <Segment
    id='task-description'
    clearing
    color={props.color}
  >
    <strong>{props.task}</strong>
    <Button
      basic
      size='small'
      floated='right'
      color='red'
      content='Delete'
      icon='delete'
      labelPosition='left'
    />
    <Button
      basic
      size='small'
      floated='right'
      color='green'
      content='Completed'
      icon='checkmark'
      labelPosition='left'
    />
  </Segment>
);

export default TaskDescription;
