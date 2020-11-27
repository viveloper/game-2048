import React from 'react';

export default function Card({ number, pos }) {
  const [row, col] = pos;
  const getBackgroundColor = (number) => {
    if (number === 2) return '#eee4da';
    else return '#eee4da59';
  };
  return (
    <div
      className="card"
      style={{
        top: `${row * (107 + 14)}px`,
        left: `${col * (107 + 14)}px`,
        backgroundColor: getBackgroundColor(number),
      }}
    >
      {number}
    </div>
  );
}
