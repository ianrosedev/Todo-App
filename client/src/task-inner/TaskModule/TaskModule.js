import React from 'react';
import TaskHeader from '../TaskHeader/TaskHeader';
import Task from '../Task/Task';
import { Segment } from 'semantic-ui-react';

const TaskModule = (props) => {
  const tasks = props.data
    .slice(1)
    .map((task, i) => (
      <Task
        key={i}
        _id={props._id}
        taskTitle={props.taskTitle}
        subId={task.TASK_ID}
        taskType={props.taskType}
        title={task.title}
        body={task.body}
        deleteSubTask={props.deleteSubTask}
        editSubTask={props.editSubTask}
      />
    )
  );

  return (
    <Segment.Group>
      <TaskHeader
        name={props.data[0].name}
        icon={props.data[0].icon}
        {...props}
      />
      <Segment.Group>
        {tasks}
      </Segment.Group>
    </Segment.Group>
  );
};

export default TaskModule;
