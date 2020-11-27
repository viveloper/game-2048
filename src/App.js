import React, { useState, useEffect } from 'react';
import Title from './components/Title';
import Score from './components/Score';
import Intro from './components/Intro';
import Board from './components/Board';

function App() {
  const [cards, setCards] = useState([
    {
      id: 0,
      number: 2,
      pos: [0, 0],
    },
  ]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const handleKeydown = (e) => {
    console.log(e.keyCode);
  };

  const handleNewGameClick = (e) => {};

  const createInitCards = () => {};

  const createNewCard = () => {};

  return (
    <div className="container">
      <header>
        <Title text="2048" />
        <Score score={0} />
        <Intro />
        <button className="btn-newgame" onClick={handleNewGameClick}>
          New Game
        </button>
      </header>
      <Board cards={cards} />
    </div>
  );
}

export default App;
