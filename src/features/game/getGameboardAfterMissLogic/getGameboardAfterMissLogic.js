export const getGameboardAfterMissLogic = (gameboard, index, missGameboardValue) => {
  let newGameboardStateWithMissCell = [...gameboard];
  newGameboardStateWithMissCell[index] = missGameboardValue;
  return newGameboardStateWithMissCell;
}
