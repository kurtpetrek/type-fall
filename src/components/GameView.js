import React, { Component } from 'react';
import data from './../data/data.js';

export default class GameView extends Component {
  constructor(props) {
    super(props);
    let options = props.textOptions.map( (val) => {
      if (data[val]) {
        return data[val];
      } else {
        return null;
      }
    });
    options = [].concat.apply([], options);

    this.state = {
      selectedCategories: props.textOptions,
      options: options
    };
  }

  render() {
    return (
      <div>
        {this.state.selectedCategories}
        {this.state.options}
      </div>
    )
  }
}
