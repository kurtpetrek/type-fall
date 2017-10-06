import styled from 'styled-components';

const InnerContainer = styled.div`
  max-width: 750px;
  width: 100%;
  border: 5px double #C6C6CB;
  padding: 1rem;
  position: relative;
  background: white;
  margin: 1rem;

  &::after{
    content: '';
    position: absolute;
    height: 40%;
    background: #888;
    width: 100%;
    bottom: 0;
    left: 1.3rem;
    z-index: -1;
    transform: skewX(-20deg);
  }

  h1 {
    font-family: 'Bungee Shade', cursive;
    text-align: center;
    font-size: 4rem;
  }
`;

export default InnerContainer;
