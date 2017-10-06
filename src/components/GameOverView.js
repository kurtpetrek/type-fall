import React from 'react';
import Button from './Button';

import ViewContainer from './ViewContainer';
import InnerContainer from './InnerContainer';
import AnimatedHeader from './AnimatedHeader';

export default function GameOverView(props) {
  return (
    <ViewContainer>
      <InnerContainer>
        <AnimatedHeader>Type Fall</AnimatedHeader>
        <h2>Game Over!</h2>
        <h3>Score: {props.score}</h3>
        <h3>Highscore: {props.highScore}</h3>
        <h3>Options: {props.selectedTextOptions}</h3>
        <h3>Speed: {props.spawnRate}</h3>
        <div style={{textAlign: 'right'}}>
          <Button handleClick={props.onGameRestart}>
              New Game
          </Button>
        </div>
      </InnerContainer>
    </ViewContainer>
  );
}
