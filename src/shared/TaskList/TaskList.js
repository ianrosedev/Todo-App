import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'
import './TaskList.css';

const TaskList = () => (
  <div id='task-list'>
    <TaskDescription color='black' task='Clean fish tank' />
    <TaskDescription color='red' task='Get butter beans' />
    <TaskDescription color='orange' task='Play with dog' />
    <TaskDescription color='yellow' task='Finish 1st mockup of app' />
    <TaskDescription color='green' task='Finish 2nd mockup of app' />
    <TaskDescription color='blue' task='Push code to github' />
  </div>
);

export default TaskList;
