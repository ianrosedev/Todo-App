import React from 'react';
import './TaskInnerHeader.css'
import { Menu, Button } from 'semantic-ui-react';

const TaskInnerHeader = () => (
  <Menu borderless id='task-inner-header'>
    <Menu.Item header>
      <strong>My Awesome Task Overview</strong>
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Button
          icon='level up'
        />  
        <Button
          color='blue'
          icon='plus'
        />
        <Button
          color='green'
          icon='checkmark'
        />
        <Button
          color='red'
          icon='delete'
        />
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default TaskInnerHeader;
