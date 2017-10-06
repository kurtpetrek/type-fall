import React, { Component } from "react";
import data from "./../data/data.js";

import HealthBar from './HealthBar';

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
    this.onGameOver = props.onGameOver;
    this.state = {
      selectedCategories: props.textOptions,
      options: options,
      optionsPlaying: [],
      speed: .9,
      score: 0,
      health: 100
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
        yPosition: -20,
        active: true,
        hitHealth: false,
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
        if (val.yPosition > 80 && val.active) {
          val.active = false;
          val.deathTimer = 0;
          val.hitHealth = true;
          prevState.health -= 10;
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
    if (this.state.health <= 0) {
      clearInterval(this.interval);
      this.onGameOver(this.state.score);
    } else {
      if (this.gameTime % this.spawnRate === 0) {
        this.addNewItem();
      }
      if (document.querySelector('input')) {
        document.querySelector('input').focus();
      }
      this.updatePositions();
      this.gameTime += this.intSpeed;
    }
  };

  handleUserKeyInput = (e) => {
    let val = e.target.value.toLowerCase();

    this.state.optionsPlaying.forEach((el, index, arr) => {
      if (val === el.character && el.active) {
        this.setState((prevState) => {
          prevState.optionsPlaying[index].active = false;
          prevState.optionsPlaying[index].deathTimer = 0;
          prevState.score++;
          return prevState;
        });
      }
    });
    e.target.value = '';
  }

  render() {
    let targets = this.state.optionsPlaying.map(val => {
      const style = {
        position: "absolute",
        left: `${Math.round(val.xPosition)}vw`,
        top: 0,
        fontSize: '2rem',
        border: '2px solid black',
        padding: '.5rem',
        transform: `translate(-50%,${val.yPosition}vh)`,
        transition: `${this.intSpeed}ms`
      };
      if (!val.active) {
        style.transform = `translate(-50%,${val.yPosition}vh) scale(2) rotate(360deg)`;
        style.opacity = 0;
        style.transition = "500ms";
      }
      if (val.hitHealth) {
        style.color = '#F30A13';
      }
      return (
        <h3 style={style} key={val.character}>
          {val.character}
        </h3>
      );
    });

    return (
      <div>
        <h1>Score: {this.state.score}</h1>
        <input
          type="text"
          autoFocus
          onChange={this.handleUserKeyInput}
          style={{opacity: 0}}
        />
        {targets}
        <HealthBar width={this.state.health}/>
      </div>);
  }
}
