import React from 'react';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

const TaskInnerBody = (props) => {
  return (
    <div id='task-inner-body'>
      <TaskModule
        data={props.data.ISSUES}
        _id={props._id}
        taskType='ISSUES'
        addSubTask={props.addSubTask}
        deleteSubTask={props.deleteSubTask}
      />
      <TaskModule
        data={props.data.QUESTIONS}
        _id={props._id}
        taskType='QUESTIONS'
        addSubTask={props.addSubTask}
        deleteSubTask={props.deleteSubTask}
       />
      <TaskModule
        data={props.data.NOTES}
        _id={props._id}
        taskType='NOTES'
        addSubTask={props.addSubTask}
        deleteSubTask={props.deleteSubTask}
      />
      <TaskModule
        data={props.data.WEBSITES}
        _id={props._id}
        taskType='WEBSITES'
        addSubTask={props.addSubTask}
        deleteSubTask={props.deleteSubTask}
      />
    </div>
  );
};

export default TaskInnerBody;
