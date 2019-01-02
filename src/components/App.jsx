import React, { Component } from 'react';
import logo from '../media/logo.svg';
import '../styles/App.css';
import Nav from '../containers/Nav'
import Feed from '../containers/Feed'

const App = (props) => {
    return (
      <div className="App">
        <Nav></Nav>
        <Feed></Feed>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
    );
}

export default App;
