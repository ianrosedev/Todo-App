import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'
import './TaskList.css';

const TaskList = () => (
  <div id='task-list'>
    <TaskDescription color='black' task='Clean fish tank' timeLeft='bomb'/>
    <TaskDescription color='red' task='Get butter beans' timeLeft='hourglass full'/>
    <TaskDescription color='orange' task='Play with dog' timeLeft='hourglass end' />
    <TaskDescription color='orange' task='Feed Fish' timeLeft='hourglass end' />
    <TaskDescription color='yellow' task='Finish 1st mockup of app' timeLeft='hourglass half' />
    <TaskDescription color='green' task='Finish 2nd mockup of app' timeLeft='hourglass start' />
    <TaskDescription color='blue' task='Push code to github' />
  </div>
);

export default TaskList;
