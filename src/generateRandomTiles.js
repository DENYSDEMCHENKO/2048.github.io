

export const generateRandomTiles = (generateRandomTile) =>
  Array.from({ length: Math.random() > 0.5 && cells.length > 8 ? 2 : 1 }, () =>
    generateRandomTile()
  ).filter(Boolean)
