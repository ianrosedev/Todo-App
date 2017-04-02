import React from 'react';
import TaskOverviewHeader from '../TaskOverviewHeader/TaskOverviewHeader';
import TaskOverviewBody from '../TaskOverviewBody/TaskOverviewBody';
import './TaskOverview.css';

const TaskOverview = (props) => (
  <div id='task-overview'>
    <TaskOverviewHeader />
    <TaskOverviewBody {...props} />
  </div>
);

export default TaskOverview;