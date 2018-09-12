import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div class="stage">
          <figure class="ball"></figure>
        </div>

        <div id="axis" class="one">
          <img class="object van move-right" src="images/van-to-right.png" />
        </div>
<div>
          <Card/>

</div>
      </div>
    );
  }
}

export default App;
