import React from 'react';
import './Loading.css';
import { Loader } from 'semantic-ui-react';

const Loading = () => (
  <div id='loading'>
    <Loader
      active
      size='large'
    />
  </div>
);

export default Loading;
