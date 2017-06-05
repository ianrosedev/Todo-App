import React from 'react';
import { shallow } from 'enzyme';
import Task from './Task';

describe('Task', () => {
  const testProps = {
    _id: 0,
    subId: 0,
    taskType: '',
    taskTitle: '',
    title: '',
    body: '',
    deleteSubTask: () => {},
    subTaskCompleted: () => {},
    editSubTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Task {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
