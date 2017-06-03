import React from 'react';
import PropTypes from 'prop-types';
import TaskHeader from '../TaskHeader/TaskHeader';
import Task from '../Task/Task';
import { Segment } from 'semantic-ui-react';

const propTypes = {
  data: PropTypes.array.isRequired,
  status: PropTypes.string.isRequired
};

const TaskModule = (props) => {
  const tasks = props.data
    .slice(1)
    .map((task, i) => {
      if (props.status === task.STATUS || props.status === 'ALL') {
        return (
          <Task
            key={props._id + i}
            _id={props._id}
            status={props.status}
            taskTitle={props.taskTitle}
            subId={task.TASK_ID}
            taskType={props.taskType}
            title={task.title}
            body={task.body}
            deleteSubTask={props.deleteSubTask}
            editSubTask={props.editSubTask}
            subTaskCompleted={props.subTaskCompleted}
          />
        );
      } else {
        return null;
      }
    }
  );

  return (
    <Segment.Group>
      <TaskHeader
        _id={props._id}
        name={props.data[0].name}
        icon={props.data[0].icon}
        addSubTask={props.addSubTask}
      />
      <Segment.Group>
        {tasks}
      </Segment.Group>
    </Segment.Group>
  );
};

TaskModule.propTypes = propTypes;

export default TaskModule;
