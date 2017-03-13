import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'
import './TaskList.css';

const TaskList = () => (
  <div id='task-list'>
    <TaskDescription color='red' task='Get food' />
    <TaskDescription color='orange' task='Wash Dog' />
    <TaskDescription color='orange' task='Feed Fish' />
    <TaskDescription color='yellow' task='Finish 1st mockup of app' />
    <TaskDescription color='green' task='Push to github' />
  </div>
);

export default TaskList;
