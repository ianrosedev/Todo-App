import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import './TaskOverviewBody.css';

import FAKE_DATA from '../../FAKE_DATA';
const { TASK_OVERVIEW } = FAKE_DATA;

const TaskOverviewBody = () => (
  <div id='task-overview-body'>
    <TaskList data={TASK_OVERVIEW.TASK_LIST} />
  </div>
);

export default TaskOverviewBody;
