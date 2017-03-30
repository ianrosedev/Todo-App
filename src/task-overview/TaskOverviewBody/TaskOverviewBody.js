import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import './TaskOverviewBody.css';

const TaskOverviewBody = (props) => (
  <div id='task-overview-body'>
    <TaskList {...props} />
  </div>
);

export default TaskOverviewBody;
