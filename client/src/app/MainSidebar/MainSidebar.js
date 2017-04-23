import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './MainSidebar.css';

const MainSidebar = (props) => (
  <div id='main-sidebar'>
    <UserInfo data={props.DATA} />
  </div>
);

export default MainSidebar;
