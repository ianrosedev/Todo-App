import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainSidebar from '../MainSidebar/MainSidebar';
import MainContent from '../MainContent/MainContent';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import FAKE_DATA from '../../FAKE_DATA';

const App = () => (
  <div>
    <MainHeader />
    <MainSidebar DATA={FAKE_DATA.USER_INFO} />
    <MainContent DATA={FAKE_DATA.TASK_LIST} />
  </div>
);

export default App;
