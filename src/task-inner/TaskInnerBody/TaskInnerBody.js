import React from 'react';
import './TaskInnerBody.css';
import { Segment } from 'semantic-ui-react';

const TaskInnerBody = () => (
  <Segment.Group id='task-inner-body'>
    <Segment>
      <strong>Websites</strong>
    </Segment>
      <Segment.Group>
        <Segment><a href='http://www.google.com' target='_blank'>Google</a></Segment>
        <Segment><a href='http://www.github.com' target='_blank'>Github</a></Segment>
        <Segment><a href='https://jsfiddle.net/' target='_blank'>JSFiddle</a></Segment>
    </Segment.Group>
  </Segment.Group>
);

export default TaskInnerBody;
