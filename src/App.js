import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './container/Home/Home';
import About from './container/About/About';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
  </div>
);

export default App;
