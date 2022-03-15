export const isValidPlayerTurn = (
  gameboard, 
  id,
  isPlayerTurn, 
  isGameStarted,
  isGameOver,
  emptyGameboardValue, 
  arrayOfShipNames
) => {
  if (
       isPlayerTurn 
    && isGameStarted
    && !isGameOver
    && (gameboard[+id] === emptyGameboardValue || arrayOfShipNames.includes(gameboard[+id]))
  ) {
    return true;
  }
  return false;
};
