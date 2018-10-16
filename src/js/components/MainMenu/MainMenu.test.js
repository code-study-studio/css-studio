import React from 'react';
import MainMenu from './MainMenu';

describe('MainMenu', () => {

  it('should be defined', () => {
    expect(MainMenu).toBeDefined();
  });

  it('should render correctly', () => {
    const wrapper = shallow(<MainMenu />);
    expect(wrapper).toMatchSnapshot();
  });

});
