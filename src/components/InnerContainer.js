import styled from "styled-components";

const InnerContainer = styled.div`
  max-width: 750px;
  width: 100%;
  border: 5px double #c6c6cb;
  padding: 1rem;
  top: 0;
  position: relative;
  background: white;
  margin: 1rem;
  animation: slide-in forwards 0.5s;
  transition: 0.5s;

  @keyframes slide-in {
    0% {
      transform: translateY(-150vh);
    }
    100% {
      transform: translateY(0);
    }
  }

  &.reverse-animate-slide-in {
    transform: translateY(-100vw);
  }
`;

export default InnerContainer;
