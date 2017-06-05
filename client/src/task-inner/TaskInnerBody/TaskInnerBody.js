import React from 'react';
import TaskModule from '../TaskModule/TaskModule';
import './TaskInnerBody.css';

const TaskInnerBody = (props) => {
  const taskTypes =['ISSUES', 'QUESTIONS', 'NOTES', 'WEBSITES'];

  const taskModules = taskTypes.map((item, i) => (
    <TaskModule
      key={props._id + i}
      _id={props._id}
      data={props.data[item]}
      status={props.status}
      taskTitle={item}
      taskType={item}
      addSubTask={props.addSubTask}
      deleteSubTask={props.deleteSubTask}
      editSubTask={props.editSubTask}
      subTaskCompleted={props.subTaskCompleted}
    />
  ));

  return (
    <div id='task-inner-body'>
      {taskModules}
    </div>
  );
};

export default TaskInnerBody;
