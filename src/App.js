import React, { Component } from "react";

import StartView from "./components/StartView";
import GameView from "./components/GameView";
import GameOverView from "./components/GameOverView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "StartView",
      selectedTextOptions: [],
      textOptions: ["letters", "numbers", "symbols"],
      score: 0,
      highScore: 0
    };
  }

  handleGameStart = textOptions => {
    this.setState(prevState => {
      prevState.selectedTextOptions = textOptions;
      prevState.currentView = "GameView";
      return prevState;
    });
  }

  handleGameOver = (score) => {
    this.setState((prevState) => {
      prevState.score = score;
      if (score > prevState.highScore) {
        prevState.highScore = score;
      }
      prevState.currentView = 'GameOverView';
      return prevState;
    });
  }

  handleGameRestart = () => {
    this.setState(prevState => {
      prevState.currentView = "StartView";
      return prevState;
    });
  }

  render() {
    if (this.state.currentView === "StartView") {
      return (
        <StartView
          textOptions={this.state.textOptions}
          onGameStart={this.handleGameStart}
        />
      );
    } else if (this.state.currentView === "GameView") {
      return (
        <GameView
          textOptions={this.state.selectedTextOptions}
          onGameOver={this.handleGameOver}
        />
      );
    } else if (this.state.currentView === "GameOverView") {
      return (
        <GameOverView
          score={this.state.score}
          highScore={this.state.score}
          onGameRestart={this.handleGameRestart}
        />
      );
    } else {
      return (
        <StartView
          textOptions={this.state.textOptions}
          onGameStart={this.handleGameStart}
        />
      );
    }

  }
}

export default App;
