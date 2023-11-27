const GRID_SIZE = 4
const CELLS_COUNT = GRID_SIZE * GRID_SIZE

const generateInitialCells = () =>
  Array.from({ length: CELLS_COUNT }, (_, i) => ({
    x: i % GRID_SIZE,
    y: Math.floor(i / GRID_SIZE),
    isEmpty: true,
  }))

export default generateInitialCells
