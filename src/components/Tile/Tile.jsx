import React from 'react'
import { StyledTile } from './styles.jsx'

export const Tile = ({ x, y, value }) => (
  <StyledTile x={x} y={y} key={`${x}${y}`}>
    {value}
  </StyledTile>
)
