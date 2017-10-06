import React, { Component } from "react";

import StyledCheckbox from "./StyledCheckbox";
import Button from "./Button";

export default class StartView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textOptions: props.textOptions,
      selectedTextOptions: []
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

  onStartGame = () => {
    if (this.state.selectedTextOptions.length >= 1) {
      this.handleGameStart(this.state.selectedTextOptions);
    }
  };

  render() {
    let {
      textOptions,
      selectedTextOptions
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
          handleInput={() => {
            this.updateOptions(val);
          }}
        >
          {val}
        </StyledCheckbox>
      );
    });

    const disabled = this.state.selectedTextOptions.length >= 1 ? false : true;

    return (
      <div>
        <h1>Type Fall</h1>
        <p>Select the types of characters you would like to practice.</p>
        {textOptions}
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
