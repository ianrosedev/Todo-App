import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

import FAKE_DATA from '../../FAKE_DATA';

const TaskInnerBody = () => (
  <div id='task-inner-body'>
    <TaskList />
    <TaskModule data={FAKE_DATA.ISSUES} />
    <TaskModule data={FAKE_DATA.QUESTIONS} />
    <TaskModule data={FAKE_DATA.NOTES} />
    <TaskModule data={FAKE_DATA.WEBSITES} />
  </div>
);

export default TaskInnerBody;
