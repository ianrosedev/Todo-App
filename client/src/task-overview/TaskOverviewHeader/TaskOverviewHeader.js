import React from 'react';
import AddNewTaskForm from '../../shared/AddNewTaskForm/AddNewTaskForm';
import './TaskOverviewHeader.css';
import { Menu } from 'semantic-ui-react';

const TaskOverviewHeader = (props) => (
  <Menu
    id='task-overview-header'
    borderless
  >
    <Menu.Item header>
      <AddNewTaskForm
        content='Task'
        {...props}
      />
    </Menu.Item>
  </Menu>
);

export default TaskOverviewHeader;
