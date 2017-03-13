import React from 'react';
import UserInfo from './UserInfo';

const mainSidebarStyle = {
  float: 'left',
  height: '100vh',
  width: 250,
  padding: 20,
  borderRight: '1px solid rgba(34, 36, 38, .15)'
};

const MainSidebar = () => (
  <div style={mainSidebarStyle}>
    <UserInfo />
  </div>
);


export default MainSidebar;
