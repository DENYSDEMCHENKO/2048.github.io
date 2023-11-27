import React from 'react'
import { StyledCell } from './styles.jsx'

export const Cell = ({ x, y }) => <StyledCell key={`${x}${y}`} />
