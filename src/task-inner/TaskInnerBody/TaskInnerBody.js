import React from 'react';
import TaskList from '../../shared/TaskList/TaskList';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

import FAKE_DATA from '../../FAKE_DATA';

// add props to get id from TaskDescription ? //

const TaskInnerBody = (props) => {
  const TASK_INNER = FAKE_DATA.TASK_LIST[0].TASK_INNER;

  return (
    <div id='task-inner-body'>
      <TaskList data={TASK_INNER.TASK_LIST} />
      <TaskModule data={TASK_INNER.ISSUES} />
      <TaskModule data={TASK_INNER.QUESTIONS} />
      <TaskModule data={TASK_INNER.NOTES} />
      <TaskModule data={TASK_INNER.WEBSITES} />
    </div>
  );
};

export default TaskInnerBody;
