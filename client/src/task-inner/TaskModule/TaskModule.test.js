import React from 'react';
import { shallow } from 'enzyme';
import TaskModule from './TaskModule';

describe('TaskModule', () => {
  const testProps = {
    data: [{ name: '', icon: '' }],
    status: ''
  };

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskModule {...testProps} />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
