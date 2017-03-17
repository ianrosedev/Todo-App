import React from 'react';
import './TaskInnerQuestions.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskInnerQuestions = () => (
  <Segment.Group>
    <Segment id='task-inner-questions'>
      <Icon name='question circle outline' />
      <strong>Questions</strong>
      <Button
        basic
        size='small'
        floated='right'
        color='green'
        content='Add Question'
        icon='plus'
        labelPosition='left'
      />
    </Segment>
      <Segment.Group>
        <Segment>
          <strong>Question 1</strong>
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
          <strong>Question 2</strong>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />
          <hr />
          <p>
            Nulla facilisi. Cras hendrerit arcu ut nulla lacinia, ac dapibus eros posuere.
          </p>
        </Segment>
    </Segment.Group>
  </Segment.Group>
);

export default TaskInnerQuestions;
