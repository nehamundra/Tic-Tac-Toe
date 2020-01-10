import React, { Component } from 'react';
import './App.css';
import Square from "./square.js";
import Board from "./board.js"

class App extends Component {

  render() {
    return (
      <div className="game">
        <div className="game-board">
        <h2>Tic-Tac-Toe</h2>
          <Board />
        </div>
        
      </div>
    );
  }
}

export default App


