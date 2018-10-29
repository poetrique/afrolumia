import React, { Component } from 'react';

import Intro from './components/views/intro';
import Footer from './components/Footer';

import './components/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Intro />
        <Footer />
      </div>
    );
  }
}

export default App;
