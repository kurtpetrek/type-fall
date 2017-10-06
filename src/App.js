import React, { Component } from "react";

import StartView from "./components/StartView";
import GameView from "./components/GameView";
import GameOverView from "./components/GameOverView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "StartView",
      selectedTextOptions: ['letters'],
      textOptions: ["letters", "numbers", "symbols"],
      spawnRate: 20,
      hardcore: false,
      score: 0,
      highScore: 0
    };
  }

  handleGameStart = (textOptions, spawnRate, hardcore) => {
    const rate = spawnRate;

    this.setState(prevState => {
      prevState.selectedTextOptions = textOptions;
      prevState.currentView = "GameView";
      prevState.spawnRate = rate;
      prevState.hardcore = hardcore;
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
          selectedTextOptions={this.state.selectedTextOptions}
          spawnRate={this.state.spawnRate}
          onGameStart={this.handleGameStart}
          hardcore={this.state.hardcore}
        />
      );
    } else if (this.state.currentView === "GameView") {
      return (
        <GameView
          textOptions={this.state.selectedTextOptions}
          spawnRate={this.state.spawnRate}
          onGameOver={this.handleGameOver}
          hardcore={this.state.hardcore}
        />
      );
    } else if (this.state.currentView === "GameOverView") {
      return (
        <GameOverView
          score={this.state.score}
          highScore={this.state.highScore}
          selectedTextOptions={this.state.selectedTextOptions}
          spawnRate={this.state.spawnRate}
          onGameRestart={this.handleGameRestart}
          hardcore={this.state.hardcore}
        />
      );
    } else {
      return (
        <StartView
          textOptions={this.state.textOptions}
          selectedTextOptions={this.state.selectedTextOptions}
          spawnRate={this.state.spawnRate}
          onGameStart={this.handleGameStart}
        />
      );
    }

  }
}

export default App;
