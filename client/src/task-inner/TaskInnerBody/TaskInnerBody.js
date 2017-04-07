import React from 'react';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

const TaskInnerBody = (props) => {
  return (
    <div id='task-inner-body'>
      <TaskModule
        data={props.data.ISSUES}
        _id={props._id}
        addSubTask={props.addSubTask}
      />
      <TaskModule
        data={props.data.QUESTIONS}
        _id={props._id}
        addSubTask={props.addSubTask}
       />
      <TaskModule
        data={props.data.NOTES}
        _id={props._id}
        addSubTask={props.addSubTask}
      />
      <TaskModule
        data={props.data.WEBSITES}
        _id={props._id}
        addSubTask={props.addSubTask}
      />
    </div>
  );
};

export default TaskInnerBody;
