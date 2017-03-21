import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import './TaskOverviewBody.css';

import FAKE_DATA from '../../FAKE_DATA';
const { TASK_LIST } = FAKE_DATA;

const TaskOverviewBody = () => (
  <div id='task-overview-body'>
    <TaskList data={TASK_LIST} />
  </div>
);

export default TaskOverviewBody;
