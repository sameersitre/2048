import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card.js';

class App extends Component {
constructor(props){
  super(props);
  this.state={
    matrix:[
      [0,2,0,4],
      [8,0,16,2],
      [0,0,2,4],
      [16,16,2,0]
    ]
  }
}
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

     
<div className='container'>
          <Card />

</div>
      </div>
    );
  }
}

export default App;
