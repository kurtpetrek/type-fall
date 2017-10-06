import styled from 'styled-components';

const AnimatedHeader = styled.h1`
  animation: header-animation 2s infinite linear;
  font-family: 'Bungee Shade', cursive;
  text-align: center;
  font-size: 4rem;

  @keyframes header-animation {
    0% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #fff,
      -7px 7px #fff,
      -8px 8px #fff,
      -9px 9px #fff,
      -10px 10px #fff;
    }
    10% {
      text-shadow: -1px 1px #fff,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #ddd,
      -7px 7px #fff,
      -8px 8px #fff,
      -9px 9px #fff,
      -10px 10px #fff;
    }
    20% {
      text-shadow: -1px 1px #fff,
      -2px 2px #fff,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #ddd,
      -7px 7px #ddd,
      -8px 8px #fff,
      -9px 9px #fff,
      -10px 10px #fff;
    }
    30% {
      text-shadow: -1px 1px #fff,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #ddd,
      -7px 7px #ddd,
      -8px 8px #ddd,
      -9px 9px #fff,
      -10px 10px #fff;
    }
    40% {
      text-shadow: -1px 1px #fff,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #ddd,
      -6px 6px #ddd,
      -7px 7px #ddd,
      -8px 8px #ddd,
      -9px 9px #ddd,
      -10px 10px #fff;
    }
    50% {
      text-shadow: -1px 1px #fff,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff,
      -6px 6px #ddd,
      -7px 7px #ddd,
      -8px 8px #ddd,
      -9px 9px #ddd,
      -10px 10px #ddd;
    }
    60% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff,
      -6px 6px #fff,
      -7px 7px #ddd,
      -8px 8px #ddd,
      -9px 9px #ddd,
      -10px 10px #ddd;
    }
    70% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff,
      -6px 6px #fff,
      -7px 7px #fff,
      -8px 8px #ddd,
      -9px 9px #ddd,
      -10px 10px #ddd;
    }
    80% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #fff,
      -5px 5px #fff,
      -6px 6px #fff,
      -7px 7px #fff,
      -8px 8px #fff,
      -9px 9px #ddd,
      -10px 10px #ddd;
    }
    90% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #fff,
      -6px 6px #fff,
      -7px 7px #fff,
      -8px 8px #fff,
      -9px 9px #fff,
      -10px 10px #ddd;
    }
    100% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #fff,
      -7px 7px #fff,
      -8px 8px #fff,
      -9px 9px #fff,
      -10px 10px #fff;
    }
  }

  @keyframes header-animation-2 {
    0% {
      text-shadow: -1px 1px #fff,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff;
    }
    20% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #fff,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff;
    }
    40% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #fff,
      -4px 4px #fff,
      -5px 5px #fff;
    }
    60% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #fff,
      -5px 5px #fff;
    }
    80% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #fff;
    }
    100% {
      text-shadow: -1px 1px #ddd,
      -2px 2px #ddd,
      -3px 3px #ddd,
      -4px 4px #ddd,
      -5px 5px #ddd,
      -6px 6px #fff;
    }
  }
`;

export default AnimatedHeader;
