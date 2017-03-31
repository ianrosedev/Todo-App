import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './MainSidebar.css';

const MainSidebar = (props) => (
  <div id='main-sidebar'>
    <UserInfo {...props} />
  </div>
);

export default MainSidebar;
