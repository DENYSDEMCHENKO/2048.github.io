const generateRandomTile = (cells) => {
  const emptyCells = cells.filter((el) => el.isEmpty)
  const randomIndex = Math.floor(Math.random() * emptyCells.length)
  const newValue = Math.random() > 0.5 ? 2 : 4

  const randomTile =
    emptyCells.length > 0
      ? {
          x: emptyCells[randomIndex].x,
          y: emptyCells[randomIndex].y,
          value: newValue,
        }
      : null

 
  const updatedCells = cells.map((cell) =>
    randomTile && cell.x === randomTile.x && cell.y === randomTile.y
      ? { ...cell, isEmpty: false }
      : cell
  )

  return { randomTile, updatedCells }
}

export default generateRandomTile
