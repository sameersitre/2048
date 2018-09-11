import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
 
  render() {
     const Box = posed.div({
      left: { x: -100 },
      right: { x: 100 }
    })
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>


          const Component = ({position}) =>
  <Box pose={position} />
        </div>
      </div>
    );
  }
}

export default App;
