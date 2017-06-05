import React from 'react';
import { shallow } from 'enzyme';
import TaskInner from './TaskInner';

describe('TaskInner', () => {
  const testProps = {
    _id: 0,
    data: { TASK_NAME: '' },
    updateStatusView: () => {},
    deleteTask: () => {},
    goBackHome: () => {},
    addSubTask: () => {},
    deleteSubTask: () => {},
    editSubTask: () => {},
    subTaskCompleted: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskInner {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
