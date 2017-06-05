import React from 'react';
import { shallow } from 'enzyme';
import TaskInnerHeader from './TaskInnerHeader';

describe('TaskInnerHeader', () => {
  const testProps = {
    _id: 0,
    taskName: '',
    status: '',
    goBackHome: () => {},
    deleteTask: () => {},
    updateStatusView: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskInnerHeader {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
