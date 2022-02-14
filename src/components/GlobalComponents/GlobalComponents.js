import styled from 'styled-components'

export const ArrowBox = styled.div`
  //width: 130px;
  width: ${({width}) => width};
  height: ${({height}) => height};;
  max-width: 20vw;
  max-height: 20vw;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  outline: none;
  background: ${({right}) => right ? 'linear-gradient(to right, black 50%, white 50%)' : 'linear-gradient(to left, black 50%, white 50%)'};
  background-position: ${({right}) => right ? 'right bottom' : 'left bottom'};
  background-size: 220% 100%;
  transition: all .3s ease-out;
  color: black;
  z-index: 1;

  svg {
    height: 40%;
    width: auto;
  }

  &:hover {
    background-position: ${({right}) => right ? 'left bottom' : 'right bottom'};
    color: white;
  }
`;
