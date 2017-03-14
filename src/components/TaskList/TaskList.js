import React from 'react';
import TaskDescription from '../TaskDescription/TaskDescription'
import './TaskList.css';

const TaskList = () => (
  <div id='task-list'>
    <TaskDescription color='black' task='Clean fish tank' icon='bomb'/>
    <TaskDescription color='red' task='Get butter beans' icon='hourglass full'/>
    <TaskDescription color='orange' task='Play with dog' icon='hourglass end' />
    <TaskDescription color='orange' task='Feed Fish' icon='hourglass end' />
    <TaskDescription color='yellow' task='Finish 1st mockup of app' icon='hourglass half' />
    <TaskDescription color='green' task='Finish 2nd mockup of app' icon='hourglass start' />
    <TaskDescription color='blue' task='Push code to github' />
  </div>
);

export default TaskList;
