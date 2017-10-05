import React, { Component } from "react";

import StartView from "./components/StartView";
import GameView from "./components/GameView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "StartView",
      selectedTextOptions: [],
      textOptions: ["letters", "numbers", "symbols"]
    };
  }

  handleGameStart = textOptions => {
    this.setState(prevState => {
      prevState.selectedTextOptions = textOptions;
      prevState.currentView = "GameView";
      return prevState;
    });
  };

  render() {
    if (this.state.currentView === "StartView") {
      return (
        <StartView
          textOptions={this.state.textOptions}
          onGameStart={this.handleGameStart}
        />
      );
    }

    if (this.state.currentView === "GameView") {
      return (
        <GameView
          textOptions={this.state.selectedTextOptions}
        />
      );
    }

  }
}

export default App;
