import React from 'react';
import './TaskInnerHeader.css'
import { Menu, Button } from 'semantic-ui-react';

const TaskInnerHeader = () => (
  <Menu borderless id='task-inner-header'>
    <Menu.Item header>
      <strong>My Awesome Task</strong>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Button
          basic
          floated='right'
          color='green'
          content='Completed'
          icon='checkmark'
          labelPosition='left'
        />
        <Button
          basic
          floated='right'
          color='red'
          content='Delete'
          icon='delete'
          labelPosition='left'
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default TaskInnerHeader;
