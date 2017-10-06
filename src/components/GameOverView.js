import React from 'react';
import Button from './Button';

export default function GameOverView(props) {
  return (
    <div>
      <h1>Game Over!</h1>
      <h2>Score: {props.score}</h2>
      <Button handleClick={props.onGameRestart}>
          New Game
      </Button>
    </div>
  );
}
