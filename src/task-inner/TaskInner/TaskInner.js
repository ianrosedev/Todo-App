import React from 'react';
import TaskInnerHeader from '../TaskInnerHeader/TaskInnerHeader';
import TaskInnerBody from '../TaskInnerBody/TaskInnerBody';
import './TaskInner.css';

const TaskInner = () => (
  <div id='task-inner'>
    <TaskInnerHeader />
    <TaskInnerBody />
  </div>
);

export default TaskInner;
