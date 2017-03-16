import React from 'react';
import ContentHeader from '../TaskOverviewHeader/TaskOverviewHeader';
import TaskOverviewBody from '../TaskOverviewBody/TaskOverviewBody';
import './TaskOverview.css';

const TaskOverview = () => (
  <div id='task-overview'>
    <ContentHeader />
    <TaskOverviewBody />
  </div>
);

export default TaskOverview;
