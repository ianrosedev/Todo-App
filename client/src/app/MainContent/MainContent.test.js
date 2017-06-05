import React from 'react';
import { shallow } from 'enzyme';
import MainContent from './MainContent';

describe('MainContent', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainContent />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
