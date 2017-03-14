import React from 'react';
import './TaskOverviewHeader.css';
import { Menu, Button } from 'semantic-ui-react';

const TaskOverviewHeader = () => (
  <Menu borderless id='task-overview-header'>
    <Menu.Item header>
      <Button
        basic
        color='green'
        content='Add Task'
        icon='plus'
        labelPosition='left'
      />
    </Menu.Item>
  </Menu>
);

export default TaskOverviewHeader;
