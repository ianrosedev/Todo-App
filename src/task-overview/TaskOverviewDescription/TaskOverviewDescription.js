import React from 'react';
import './TaskOverviewDescription.css';
import { Segment, Button } from 'semantic-ui-react';

const TaskOverviewDescription = (props) => (
  <Segment
    id='task-overview-description'
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

export default TaskOverviewDescription;
