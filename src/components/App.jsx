import React, { Component } from 'react';
import logo from '../media/logo.svg';
import '../styles/App.css';
import Nav from '../containers/Nav'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
