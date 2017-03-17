import React from 'react';
import './TaskInnerWebsites.css';
import { Segment, Button, Icon } from 'semantic-ui-react';

const TaskInnerWebsites = () => (
  <Segment.Group>
    <Segment id='task-inner-websites'>
      <Icon name='computer' />
      <strong>Websites</strong>
      <Button
        size='small'
        floated='right'
        color='blue'
        content='Add Website'
        icon='plus'
        labelPosition='left'
      />
    </Segment>
      <Segment.Group>
        <Segment>
          <a href='http://www.google.com' target='_blank'>
            Google
          </a>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />
          <hr />
          <div>
            <p>Google is a good website to find info about anything.</p>
          </div>
        </Segment>
        <Segment>
          <a href='http://www.github.com' target='_blank'>
            Github
          </a>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />
          <hr />
          <div>
            <p>Github is a place to store code from your project.</p>
          </div>
        </Segment>
        <Segment>
          <a href='https://jsfiddle.net/' target='_blank'>
            JSFiddle
          </a>
          <Icon name='expand' />
          <Icon name='remove' />
          <Icon name='checkmark' />
          <Icon name='edit' />
          <hr />
          <div>
            <p>JSFiddle is fun to play with code that you working on.</p>
          </div>
      </Segment>
    </Segment.Group>
  </Segment.Group>
);

export default TaskInnerWebsites;
