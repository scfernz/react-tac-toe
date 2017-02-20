import React, { Component } from 'react';
import { render } from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Square from './components/Square';
import Game from './components/Game';
import Board from './components/Board';

class App extends Component {
  render() {
    return (
      <div className="App">

        ReactDOM.render(
          <Game />,
          document.getElementById('container')
        );

      </div>
    );
  }
}

export default App;
