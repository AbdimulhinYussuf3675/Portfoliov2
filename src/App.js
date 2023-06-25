import React from 'react';

import Navbar from './components/Navbar/Navbar';
import Header from './container/Home/Home';
import About from './container/About/About';
import Work from './container/Project/Projects';
import Skills from './container/Skills/Skills';
import Contact from './container/Contact/Contact';
import SocialMedia from './container/social/SocialMedia';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <SocialMedia />
    <Work />
    <Skills />
    <Contact />

  </div>
);

export default App;
