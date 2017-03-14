import React from 'react';
import TaskOverviewDescription from '../TaskOverviewDescription/TaskOverviewDescription'
import './TaskOverviewList.css';

const TaskOverviewList = () => (
  <div id='task-overview-list'>
    <TaskOverviewDescription color='black' task='Clean fish tank' />
    <TaskOverviewDescription color='red' task='Get butter beans' />
    <TaskOverviewDescription color='orange' task='Play with dog' />
    <TaskOverviewDescription color='orange' task='Feed Fish' />
    <TaskOverviewDescription color='yellow' task='Finish 1st mockup of app' />
    <TaskOverviewDescription color='green' task='Finish 2nd mockup of app' />
    <TaskOverviewDescription color='blue' task='Push code to github' />
  </div>
);

export default TaskOverviewList;
