import React from 'react'
import { Wrapper, Cell, Tile } from './styled.jsx'
import { useState } from 'react'
import { useEffect } from 'react'

const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE * GRID_SIZE

const initialCells = []

for (let i = 0; i < CELLS_COUNT; i++) {
  initialCells.push({
    x: i % GRID_SIZE,
    y: Math.floor(i / GRID_SIZE),
    isEmpty: true,
  })
}

const cellElements = initialCells.map((el) => <Cell key={`${el.x}${el.y}`} />)

export const Netting = () => {
  const [cells, setCells] = useState(initialCells)
  const [tiles, setTiles] = useState([])

  useEffect(() => {
    const emptyCells = cells.filter((el) => el.isEmpty)

    const numberOfTiles = Math.random() < 0.5 ? 1 : 2

    for (let i = 0; i < numberOfTiles; i++) {
      if (emptyCells.length === 0) {
        break
      } else {
        const randomIndex = Math.floor(Math.random() * emptyCells.length)
        const newValue = Math.random() > 0.5 ? 2 : 4
        const tile = {
          x: emptyCells[randomIndex].x,
          y: emptyCells[randomIndex].y,
          value: newValue,
        }
        setTiles((prevTiles) => [...prevTiles, tile])
        setCells((prevCells) =>
          prevCells.map((el) => {
            if (el.x === tile.x && el.y === tile.y) {
              return { ...el, isEmpty: false }
            }
            return el
          })
        )
      }
    }
    setupInputonce()
  }, [])


  const setupInputonce = () => {
    window.addEventListener('keydown', handleInput, { once: true })
  }
 const handleInput = (event) => {
   console.log(event.key)
   
   setupInputonce()
 }

  return (
    <Wrapper>
      {cellElements}
      {tiles.map((el) => (
        <Tile x={el.x} y={el.y} key={`${el.x}${el.y}`}>
          {el.value}
        </Tile>
      ))}
    </Wrapper>
  )
}
