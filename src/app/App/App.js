import React from 'react';
import MainHeader from '../MainHeader/MainHeader';
import MainSidebar from '../MainSidebar/MainSidebar';
import MainContent from '../MainContent/MainContent';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

const App = () => (
  <div>
    <MainHeader />
    <MainSidebar />
    <MainContent />
  </div>
);

export default App;
