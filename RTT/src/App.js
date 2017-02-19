import React, { Component, render } from 'react';
import logo from './logo.svg';
import './App.css';
import Square from 'components';
import Game from 'components';
import Board from 'components';

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
