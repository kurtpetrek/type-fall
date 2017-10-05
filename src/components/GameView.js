import React, { Component } from 'react';

export default class GameView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      textOptions: props.textOptions
    };
  }

  render() {
    return (
      <div>
        {this.state.textOptions}
      </div>
    )
  }
}
