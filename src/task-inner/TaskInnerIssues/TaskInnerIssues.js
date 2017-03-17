import React from 'react';
import './TaskInnerIssues.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskInnerIssues = () => (
  <Segment.Group>
    <Segment id='task-inner-issues'>
      <Icon name='exclamation circle' />
      <strong>Issues</strong>
      <Button
        size='small'
        floated='right'
        color='blue'
        content='Add Issue'
        icon='plus'
        labelPosition='left'
      />
    </Segment>
      <Segment.Group>
        <Segment>
          <strong>Issue 1</strong>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />

          <hr />
          <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vulputate, sem sed finibus varius, nisi magna sollicitudin est, quis eleifend nisl velit sit amet turpis. Curabitur id tortor et sapien bibendum laoreet et sit amet odio.
          </p>
        </Segment>
        <Segment>
          <strong>Issue 2</strong>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />
          <hr />
          <p>
            Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere. Suspendisse viverra dolor id felis auctor tincidunt. Aenean interdum, arcu non elementum egestas, est enim lobortis augue, vitae pellentesque neque nulla vel est.
          </p>
        </Segment>
    </Segment.Group>
  </Segment.Group>
);

export default TaskInnerIssues;
