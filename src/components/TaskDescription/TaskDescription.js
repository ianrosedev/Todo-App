import React from 'react';
import './TaskDescription.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskDescription = (props) => (
  <Segment
    id='task-description'
    clearing
    color={props.color}
  >
    <Icon name={props.icon || 'sticky note outline'} />
    <strong>{props.task}</strong>
    <Button
      basic
      floated='right'
      color='red'
      content='Delete'
      icon='delete'
      labelPosition='left'
    />
    <Button
      basic
      floated='right'
      color='green'
      content='Completed'
      icon='checkmark'
      labelPosition='left'
    />
  </Segment>
);

export default TaskDescription;
