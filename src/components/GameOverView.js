import React from 'react';
import Button from './Button';

import ViewContainer from './ViewContainer';
import InnerContainer from './InnerContainer';
import AnimatedHeader from './AnimatedHeader';

export default function GameOverView(props) {
  let options = props.selectedTextOptions;
  options = options.map((el, i, arr) => {
    let tail = ', ';
    if (i === arr.length - 1) {
      tail = '';
    }
    let text = el.charAt(0).toUpperCase() + el.slice(1) + tail;
    return text;
  })
  return (
    <ViewContainer>
      <InnerContainer>
        <AnimatedHeader>Type Fall</AnimatedHeader>
        <h2>Game Over!</h2>
        <h3>Score: {props.score}</h3>
        <h3>Highscore: {props.highScore}</h3>
        <h3>Options: {options}</h3>
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
