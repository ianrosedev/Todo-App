import React from 'react';
import TaskInnerHeader from '../TaskInnerHeader/TaskInnerHeader';
import TaskInnerBody from '../TaskInnerBody/TaskInnerBody';
import './TaskInner.css';

const TaskInner = (props) => (
  <div id='task-inner'>
    <TaskInnerHeader {...props} />
    <TaskInnerBody {...props} />
  </div>
);

export default TaskInner;
