import styled, { keyframes } from 'styled-components'
import { CSS } from '../../cssVariables'

export const Wrapper = styled.div`
  --cell-size: ${CSS.cell_size}; //20vmin
  --cell-gap: ${CSS.cell_gap}; //2vmin
  border-radius: 4px;
  background-color: #a28e63;
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, var(--cell-size));
  grid-template-rows: repeat(4, var(--cell-size));
  gap: var(--cell-gap);
  border-radius: 1vmin;
`
// export const Cell = styled.div`
//   background-color: #434141;
//   border-radius: 1vmin;
// `

// const Animation = keyframes`
//     0% {
//     opacity: 0.5;
//     transform: scale(0);
//   }
//    100% {
//       opacity: 1;
//       transform: scale(1);
//     }
// `
// export const Tile = styled.div`
//   --cell-size: ${CSS.cell_size}; //20vmin
//   --cell-gap: ${CSS.cell_gap}; //2vmin
//   position: absolute;
//   --x: ${(props) => props.x};
//   --y: ${(props) => props.y};
//   left: calc(var(--x) * (var(--cell-size) + var(--cell-gap)));
//   top: calc(var(--y) * (var(--cell-size) + var(--cell-gap)));
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 20vmin;
//   width: 20vmin;
//   border-radius: 1vmin;
//   font-family: Arial, Helvetica, sans-serif;
//   font-size: 7vmin;
//   font-weight: bold;
//   background-color: #d2b77d;
//   color: #252525;
//   transition: 100ms;
//   animation: ${Animation} 200ms ease-in-out;
// `
