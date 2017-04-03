import React from 'react';
import AddTaskForm from '../../shared/AddTaskForm/AddTaskForm';
import './TaskOverviewHeader.css';
import { Menu } from 'semantic-ui-react';

const TaskOverviewHeader = () => (
  <Menu
    id='task-overview-header'
    borderless
  >
    <Menu.Item header>
      <AddTaskForm
        content='Add Task'
      />
    </Menu.Item>
  </Menu>
);

export default TaskOverviewHeader;
