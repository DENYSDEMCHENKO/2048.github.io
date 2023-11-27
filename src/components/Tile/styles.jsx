import styled, { keyframes } from 'styled-components'
import { CSS } from '../../cssVariables'

const Animation = keyframes`
    0% {
    opacity: 0.5;
    transform: scale(0);
  }
   100% {
      opacity: 1;
      transform: scale(1);
    }
`
export const StyledTile = styled.div`
  --cell-size: ${CSS.cell_size}; //20vmin
  --cell-gap: ${CSS.cell_gap}; //2vmin
  position: absolute;
  --x: ${(props) => props.x};
  --y: ${(props) => props.y};
  left: calc(var(--x) * (var(--cell-size) + var(--cell-gap)));
  top: calc(var(--y) * (var(--cell-size) + var(--cell-gap)));
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20vmin;
  width: 20vmin;
  border-radius: 1vmin;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 7vmin;
  font-weight: bold;
  background-color: #d2b77d;
  color: #252525;
  transition: 100ms;
  animation: ${Animation} 200ms ease-in-out;
`
