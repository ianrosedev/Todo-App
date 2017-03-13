import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'

class MainSidebar extends Component {
  render() {
    const mainSidebarStyle = {
      position: 'absolute',
      top: 50,
      bottom: 0,
      left: 0,
      width: 250,
      padding: 20,
      borderRight: '1px solid rgba(34, 36, 38, .15)'
    }

    return (
      <div style={mainSidebarStyle}>
        <Card
          image='http://placekitten.com/209/209'
          header='Elliot'
          meta='User'
          description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
        />
      </div>
    );
  }
}

export default MainSidebar;
