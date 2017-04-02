import React from 'react';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

const TaskInnerBody = ({ data }) => {
  return (
    <div id='task-inner-body'>
      <TaskModule data={data.ISSUES} />
      <TaskModule data={data.QUESTIONS} />
      <TaskModule data={data.NOTES} />
      <TaskModule data={data.WEBSITES} />
    </div>
  );
};

export default TaskInnerBody;
