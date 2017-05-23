import React from 'react';
import { Redirect } from 'react-router-dom';
import { client } from '../../utils/Client';

const Logout = () => {
  client.logout();

  return (
    <Redirect to='/login' />
  );
};

export default Logout;
