import React, { Component } from "react";
import data from "./../data/data.js";

export default class GameView extends Component {
  constructor(props) {
    super(props);
    let options = props.textOptions.map(val => {
      if (data[val]) {
        return data[val];
      } else {
        return null;
      }
    });
    options = [].concat.apply([], options);
    this.gameTime = 0;
    this.intSpeed = 50;
    this.spawnRate = this.intSpeed * 20;
    this.state = {
      selectedCategories: props.textOptions,
      options: options,
      optionsPlaying: [],
      speed: 1.3
    };
  }

  randomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  };

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
      this.setState(prevState => {
        prevState.optionsPlaying.push(item);
        prevState.options.splice(index, 1);
        return prevState;
      });
    }
  };

  updatePositions = () => {
    this.setState(prevState => {
      let options = [];
      prevState.optionsPlaying.forEach(function(val) {
        if (val.active) {
          val.yPosition += prevState.speed;
        }
        if (val.yPosition > 90 && val.active) {
          val.active = false;
          val.deathTimer = 0;
        }
        if (!val.active) {
          val.deathTimer++;
        }
        if (val.deathTimer > 20) {
          val.remove = true;
        }
        if (val.remove) {
          prevState.options.push(val.character);
        } else {
          options.push(val);
        }
      });
      prevState.optionsPlaying = options;
      return prevState;
    });
  };

  gameInterval = () => {
    if (this.gameTime % this.spawnRate === 0) {
      this.addNewItem();
    }
    document.querySelector('input').focus();
    this.updatePositions();
    this.gameTime += this.intSpeed;
  };

  handleUserKeyInput = (e) => {
    let val = e.target.value.toLowerCase();
    console.log(val);
    e.target.value = '';
  }

  render() {
    let targets = this.state.optionsPlaying.map(val => {
      let style = {
        position: "absolute",
        left: `${val.xPosition}vw`,
        top: 0,
        transform: `translate(-50%,${val.yPosition}vh)`,
        transition: `${this.state.speed * this.intSpeed}ms`
      };
      if (!val.active) {
        style.transform = `translate(-50%,${val.yPosition}vh) scale(2) rotate(360deg)`;
        style.opacity = 0;
        style.transition = "500ms";
      }
      return (
        <h3 style={style} key={val.character}>
          {val.character}
        </h3>
      );
    });

    return (
      <div>
        <input
          type="text"
          autoFocus
          onChange={this.handleUserKeyInput}
          style={{opacity: 0}}
        />
        {targets}
      </div>);
  }
}
