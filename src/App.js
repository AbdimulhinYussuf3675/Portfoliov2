import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './container/Home/Home';
import About from './container/About/About';
import Work from './container/Project/Projects';

import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
  </div>
);

export default App;
