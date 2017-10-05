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
    this.gameTime = 0;
    this.intSpeed = 100;
    this.spawnRate = 2000;
    this.state = {
      selectedCategories: props.textOptions,
      options: options,
      optionsPlaying: [],
      speed: .9
    };

  }

  randomIntInRange = (min, max) => {
     return Math.floor(Math.random() * (max - min)) + min;
  }

  componentDidMount() {
    this.interval = setInterval(this.gameInterval, this.intSpeed);
  }

  addNewItem = () => {
    if (this.state.options.length > 0) {
      const index = this.randomIntInRange(0, this.state.options.length);
      let item = {
        character: this.state.options[index],
        xPosition: this.randomIntInRange(5, 95),
        yPosition: -5,
        active: true,
        remove: false
      };
      this.setState((prevState) => {
        prevState.optionsPlaying.push(item);
        prevState.options.splice(index, 1);
        return prevState;
      });
    }
  }

  updatePositions = () => {
    this.setState((prevState) => {
        prevState.optionsPlaying = prevState.optionsPlaying.map((val) => {
          if (val.active) {
            val.yPosition += prevState.speed;
          }
          if (val.yPosition > 90) {
            val.active = false;
          }
          if (val.remove) {
            return null;
          } else {
            return val;
          }
        });
        return prevState;
    });
  };

  gameInterval = () => {
    if (this.gameTime % this.spawnRate === 0) {
      this.addNewItem();
    }

    this.updatePositions();
    this.gameTime += this.intSpeed;
  }

  render() {
    let targets = this.state.optionsPlaying.map((val)=>{
      const style = {
        position: 'absolute',
        left: `${val.xPosition}vw`,
        top: 0,
        transform: `translate(-50%,${val.yPosition}vh)`,
        transition: `${this.state.speed * this.intSpeed}ms`
      };
      console.log(val.xAxis);
      return (
        <h3 style={style}>{val.character}</h3>
      )
    });

    return (
      <div>
        {targets}
      </div>
    )
  }
}
