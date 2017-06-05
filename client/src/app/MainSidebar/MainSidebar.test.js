import React from 'react';
import { shallow } from 'enzyme';
import MainSidebar from './MainSidebar';

describe('MainSidebar', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainSidebar />);
  });

  it('renders without crashing', () => {
    wrapper;
  });

  it('creates a div with the id `main-sidebar`', () => {
    expect(
      wrapper.find('#main-sidebar').exists()
    ).toBe(true);
  });
});
