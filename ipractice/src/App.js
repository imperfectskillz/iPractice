import React, { Component } from 'react';
import Stopwatch from './components/Timer';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="stopwatch">iPractice</h1>

        <Stopwatch />

      </div>
    );
  }
}

export default App;
