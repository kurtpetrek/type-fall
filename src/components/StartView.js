import React, { Component } from "react";
import styled from "styled-components";

import StyledCheckbox from "./StyledCheckbox";
import Button from "./Button";
import AnimatedHeader from './AnimatedHeader';

const ViewContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  background: #AAB5C5;
`;

const InnerContainer = styled.div`
  max-width: 750px;
  border: 5px double #C6C6CB;
  padding: 1rem;
  position: relative;
  background: white;
  margin: 1rem;

  &::after{
    content: '';
    position: absolute;
    height: 40%;
    background: #888;
    width: 100%;
    bottom: 0;
    left: 1.3rem;
    z-index: -1;
    transform: skewX(-20deg);
  }

  h1 {
    font-family: 'Bungee Shade', cursive;
    text-align: center;
    font-size: 4rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media(max-width: 750px) {
    & {
      display: block;
    }
  }
`;

const OptionsList = styled.div`
  width: 30%;
  margin: 1rem;
  @media(max-width: 750px) {
    & {
      border-top: 2px solid #888;
      width: 100%;
    }
  }
`;

export default class StartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOptions: props.textOptions,
      selectedTextOptions: props.selectedTextOptions,
      spawnRate: props.spawnRate,
      hardcore: props.hardcore
    };
    this.handleGameStart = props.onGameStart;
  }

  updateOptions = val => {
    if (!this.state.selectedTextOptions.includes(val)) {
      this.setState(prevState => {
        prevState.selectedTextOptions.push(val);
        return prevState;
      });
    } else {
      this.setState(prevState => {
        const index = prevState.selectedTextOptions.indexOf(val);
        prevState.selectedTextOptions.splice(index, 1);
        return prevState;
      });
    }
  };

  handleSpeedUpdate = (value) => {
    // const rate = e.target.value
    const rate = value;
    this.setState(prevState => {
      prevState.spawnRate = rate;
      return prevState;
    });
  }

  handleHardcore = () => {
    this.setState(prevState => {
      prevState.hardcore = !prevState.hardcore;
      return prevState;
    });
  }

  onStartGame = () => {
    const {
      selectedTextOptions,
      spawnRate,
      hardcore
    } = this.state;
    if (this.state.selectedTextOptions.length >= 1) {
      this.handleGameStart(selectedTextOptions, spawnRate, hardcore);
    }
  };

  render() {
    let {
      textOptions,
      selectedTextOptions,
      spawnRate
    } = this.state;

    textOptions = textOptions.map(val => {
      let checked = false;
      if (selectedTextOptions.includes(val)) {
        checked = true;
      }
      return (
        <StyledCheckbox
          key={val}
          value={val}
          checked={checked}
          tabindex="0"
          handleInput={() => {
            this.updateOptions(val);
          }}
        >
          {val}
        </StyledCheckbox>
      );
    });

    const speedOptions = ['Really Fast', 'Fast', 'Medium', 'Slow'].map((el, i)=>{
      let checked = false;
      let value = 15 + (i * 5)
      if (spawnRate ===  value){
        checked = true;
      }
      return (
        <StyledCheckbox
          key={value}
          value={value}
          checked={checked}
          handleInput={() => {
            this.handleSpeedUpdate(value);
          }}
        >
          {el}
        </StyledCheckbox>
      );
    });

    const disabled = this.state.selectedTextOptions.length >= 1 ? false : true;

    return (
      <ViewContainer>
        <InnerContainer>
          <AnimatedHeader>Type Fall</AnimatedHeader>
          <p>Select the types of characters you would like to practice, the rate and whether you are penalized for mistakes.</p>
          <OptionsContainer>
            <OptionsList>
                {textOptions}
            </OptionsList>
            <OptionsList>
                {speedOptions}
            </OptionsList>
            <OptionsList>
              <StyledCheckbox
                value={'hardcore'}
                checked={this.state.hardcore}
                handleInput={() => {
                  this.handleHardcore();
                }}
              >
                Hardcore
              </StyledCheckbox>
            </OptionsList>
          </OptionsContainer>
          <div style={{textAlign: 'right'}}>
            <Button
              handleClick={this.onStartGame}
              disabled={disabled}
              >
                Start Game
            </Button>
          </div>
        </InnerContainer>
      </ViewContainer>
    );
  }
}
