import React, { Component } from 'react';
import { Card } from 'semantic-ui-react';

class UserInfo extends Component {
  render() {
    return (
      <Card
        image='http://placekitten.com/209/209'
        header='Elliot'
        meta='User'
        description='Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat.'
      />
    );
  }
}

export default UserInfo;
