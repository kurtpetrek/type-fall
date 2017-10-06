import React from 'react';
import styled from 'styled-components';

const HealthBarContainer = styled.div`
  width: 80%;
  position: absolute;
  bottom: 0;
  left: 10%;
  height: 50px;
`;

const Title = styled.p`
  position: absolute;
  left: 50%;
  top: -10%;
  transform: translate(-50%, -50%);
  font-size: 30px;
`;

const HealthBarDiv = styled.div`
  position: absolute;
  bottom: 10%;
  left: 0%;
  height: 80%;
  transition: .5s;
  background: #F46652;
`;

export default function HealthBar(props) {
  const style = {
    width: props.width + '%'
  }
  return (
    <HealthBarContainer>
      <HealthBarDiv style={style}/>
      <Title>Health</Title>
    </HealthBarContainer>
  )
}
