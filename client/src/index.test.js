import React from 'react';
import { shallow } from 'enzyme';
import App from './app/App/App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders without crashing', () => {
    wrapper;
  });
});
