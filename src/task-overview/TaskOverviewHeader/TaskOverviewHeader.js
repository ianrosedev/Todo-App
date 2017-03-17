import React from 'react';
import './TaskOverviewHeader.css';
import { Menu, Button } from 'semantic-ui-react';

const TaskOverviewHeader = () => (
  <Menu
    id='task-overview-header'
    borderless
  >
    <Menu.Item header>
      <Button
        color='blue'
        content='Add Task'
        icon='plus'
        labelPosition='left'
      />
    </Menu.Item>
  </Menu>
);

export default TaskOverviewHeader;
