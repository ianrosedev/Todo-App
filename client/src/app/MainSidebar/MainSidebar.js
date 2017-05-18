import React from 'react';
import UserInfo from '../UserInfo/UserInfo';
import './MainSidebar.css';

const MainSidebar = (props) => (
  <div id='main-sidebar'>
    <UserInfo
      data={props.data}
      editProfile={props.editProfile}
    />
  </div>
);

export default MainSidebar;
