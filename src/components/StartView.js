import React, { Component } from "react";

import StyledCheckbox from "./StyledCheckbox";
import Button from "./Button";

export default class StartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOptions: props.textOptions,
      selectedTextOptions: props.selectedTextOptions,
      spawnRate: props.spawnRate
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
      console.log(rate);
      return prevState;
    });
  }

  onStartGame = () => {
    if (this.state.selectedTextOptions.length >= 1) {
      this.handleGameStart(this.state.selectedTextOptions, this.state.spawnRate);
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
      if (this.state.spawnRate ===  value){
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
      <div>
        <h1>Type Fall</h1>
        <p>Select the types of characters you would like to practice.</p>
        <div style={{display: 'flex'}}>
          <div>
              {textOptions}
          </div>
          <div>
              {speedOptions}
          </div>
        </div>

        <Button
          handleClick={this.onStartGame}
          disabled={disabled}
          >
            Start Game
        </Button>
      </div>
    );
  }
}
