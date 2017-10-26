import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.25rem 0.75rem;
  font-size: 1.3rem;
  background: ${props => props.background || "transparent"};
  border-radius: 3px;
  display: inline-block;
  border: 2px solid #000;
  cursor: pointer;
  transition: 0.25s;
  will-change: transform;
  ${props =>
    props.italic && "font-style: italic;"} box-shadow: -1px 1px 0px #333,
    -2px 2px 0px #333,
    -3px 3px 0px #333,
    -4px 4px 0px #333;

  &:hover,
  &:focus {
    transform: scale(1.05);
    outline: none;
    box-shadow: -1px 1px 0px #333, -2px 2px 0px #333, -3px 3px 0px #333,
      -4px 4px 0px #333, -5px 5px 0px #333, -6px 6px 0px #333;
  }

  &:active {
    transform: scale(0.95);
    box-shadow: -1px 1px 0px #222, -2px 2px 0px #222;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    box-shadow: -1px 1px 0px #333, -2px 2px 0px #333, -3px 3px 0px #333,
      -4px 4px 0px #333;
  }
`;

export default function Button(props) {
  return (
    <StyledButton onClick={props.handleClick} {...props}>
      {props.children}
    </StyledButton>
  );
}
