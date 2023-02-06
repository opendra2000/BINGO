import React from 'react';
import './App.css';
import Board from './components/Board/BingoBoard';

function App() {
  return (
    <section className="main">
      <article className="board">
        <Board />
      </article>
    </section>
  );
}

export default App;
