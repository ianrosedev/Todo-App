import React from 'react';
import { shallow } from 'enzyme';
import TaskOverview from './TaskOverview';

describe('TaskOverview', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<TaskOverview />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
