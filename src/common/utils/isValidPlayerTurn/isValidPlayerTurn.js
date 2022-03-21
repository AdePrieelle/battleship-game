export const isValidPlayerTurn = (
  gameboard, 
  id,
  isPlayerTurn, 
  isGameStarted,
  isGameOver,
  emptyGameboardValue, 
  arrayOfShipNames,
  disablePlayerMove,
  isPlayerOne,
  isPlayerTwoComputer
) => {
  if (
       isPlayerTurn 
    && isGameStarted
    && !isGameOver
    && (gameboard[+id] === emptyGameboardValue || arrayOfShipNames.includes(gameboard[+id]))
    && !disablePlayerMove
    && !(!isPlayerOne && isPlayerTwoComputer)
  ) {
    return true;
  }
  return false;
};
