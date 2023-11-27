import React, { useState, useEffect } from 'react'
import { Cell } from '../Cell/Cells.jsx'
import { Tile } from '../Tile/Tile.jsx'
import { Wrapper } from './styles.jsx'
import generateInitialCells from '../../generateInitialCells.js'
import generateRandomTile from '../../generateRandomTile.js'

export const NettingNew = () => {
  const [cells, setCells] = useState(generateInitialCells())
  const [tiles, setTiles] = useState([])

  const setupInputOnce = () => {
    window.removeEventListener('keydown', handleInput)
    window.addEventListener('keydown', handleInput, { once: true })
  }

  useEffect(() => {
    const { randomTile, updatedCells } = generateRandomTile(cells)
    setTiles((prevTiles) => [...prevTiles, randomTile].filter(Boolean))
    setCells(updatedCells)

    setupInputOnce()
  }, [])

  const handleInput = (event) => {
    console.log(event.key)
    setupInputOnce()
  }

  return (
    <Wrapper>
      {cells.map((el) => (
        <Cell key={`${el.x}${el.y}`} x={el.x} y={el.y} />
      ))}
      {tiles.map((el) => (
        <Tile key={`${el.x}${el.y}`} x={el.x} y={el.y} value={el.value} />
      ))}
    </Wrapper>
  )
}
