import React from 'react';
import { shallow } from 'enzyme';
import MainHeader from './MainHeader';

describe('MainHeader', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainHeader />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
