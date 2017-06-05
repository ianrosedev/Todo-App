import React from 'react';
import { shallow } from 'enzyme';
import AddSubTaskForm from './AddSubTaskForm';

describe('AddSubTaskForm', () => {
  const testProps = {
    _id: 0,
    name: '',
    addSubTask: () => {}
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<AddSubTaskForm {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
