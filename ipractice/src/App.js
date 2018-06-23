import React, { Component } from 'react';
import Projects from './components/Projects';
import Stopwatch from './components/Timer';
import './App.css';
import FormExample from './components/form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>iPractice</h1>
        <Projects />
        <Stopwatch />
        <FormExample />
      </div>
    );
  }
}

export default App;
