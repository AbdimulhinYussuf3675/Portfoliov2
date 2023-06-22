import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './container/Home/Home';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
  </div>
);

export default App;
