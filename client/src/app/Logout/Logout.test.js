import React from 'react';
import { shallow } from 'enzyme';
import Logout from './Logout';

describe('Logout', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Logout />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
