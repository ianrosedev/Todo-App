import React from 'react';
import { shallow } from 'enzyme';
import UpdateSubTaskForm from './UpdateSubTaskForm';

describe('UpdateSubTaskForm', () => {
  const testProps = {
    _id: 0,
    subId: 0,
    taskTitle: '',
    title: '',
    body: '',
    editSubTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UpdateSubTaskForm {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
