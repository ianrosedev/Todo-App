import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('Loading', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Loading />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
