import React from 'react';
import styled from 'styled-components';

import Button from './Button';
import ViewContainer from './ViewContainer';
import InnerContainer from './InnerContainer';
import AnimatedHeader from './AnimatedHeader';

const GameOverContainer = styled.div`
  @keyframes scale-in {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
  }

  h2 {
    text-align: center;
    font-size: 2.5rem;
    animation: scale-in 2s forwards;
  }
  h3 {
    font-size: 1.5rem;
  }
`;

export default class GameOverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animatingOut: false
    };
    this.props = props;
  }

  restartGame = () => {
    this.setState(prevState =>{
      prevState.animatingOut = true;
      return prevState;
    });

    setTimeout(()=>{
      this.props.onGameRestart();
    }, 600)

  }

  render(){
    let props = this.props;
    let options = props.selectedTextOptions.map((el, i, arr) => {
      let tail = ', ';
      if (i === arr.length - 1) {
        tail = '';
      }
      let text = el.charAt(0).toUpperCase() + el.slice(1) + tail;
      return text;
    });

    const highScoretext = props.score === props.highScore ? 'New Highscore!' : '';

    let spawnSpeedText = '';
    switch (props.spawnRate) {
      case 10:
        spawnSpeedText = 'Faster';
        break;
      case 15:
        spawnSpeedText = 'Fast';
        break;
      case 20:
        spawnSpeedText = 'Normal';
        break;
      case 25:
        spawnSpeedText = 'Slow';
        break;
      case 30:
        spawnSpeedText = 'Slower';
        break;
      default:
        spawnSpeedText = '';
        break;
    }

    const hardcoreText = props.hardcore ? 'Hardcore' : '';

    const containerStyle = this.state.animatingOut ? {top: '-150vh'} : {};

    return (
      <ViewContainer>
          <InnerContainer style={containerStyle}>
            <AnimatedHeader>Type Fall</AnimatedHeader>
            <GameOverContainer>
              <h2>Game Over!</h2>
              <h2>{highScoretext}</h2>
              <h3>Score: {props.score}</h3>
              <h3>Highscore: {props.highScore}</h3>
              <h3>{hardcoreText}</h3>
              <h3>Characters: {options}</h3>
              <h3>Speed: {spawnSpeedText}</h3>
              <div style={{textAlign: 'right'}}>
                <Button handleClick={this.restartGame}>
                    New Game
                </Button>
              </div>
            </GameOverContainer>
          </InnerContainer>
      </ViewContainer>
    );
  }
}
