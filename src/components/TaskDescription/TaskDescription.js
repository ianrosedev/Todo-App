import React from 'react';
import './TaskDescription.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskDescription = (props) => (
  <Segment
    id='task-description'
    clearing
    color={props.color}
  >
    <Icon name='sticky note outline' />
    <strong>{props.task}</strong>
    <Button
      basic
      floated='right'
      color='red'
      content='Delete'
      icon='delete'
      labelPosition='left'
    />
</Segment>
);

export default TaskDescription;
