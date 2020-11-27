import React from 'react';
import Card from './Card';

export default function Board({ cards }) {
  const backgroundCards = [];

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      backgroundCards.push({
        id: `${i}${j}`,
        number: '',
        pos: [i, j],
      });
    }
  }

  return (
    <div className="board">
      <div className="board-container">
        {backgroundCards.map((card) => (
          <Card key={card.id} number={card.number} pos={card.pos} />
        ))}
        {cards.map((card) => (
          <Card key={card.id} number={card.number} pos={card.pos} />
        ))}
      </div>
    </div>
  );
}
