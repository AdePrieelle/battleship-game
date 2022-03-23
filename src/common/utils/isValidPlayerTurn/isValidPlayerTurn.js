export const isValidPlayerTurn = (
  gameboard, 
  id,
  isPlayerTurn, 
  isGameStarted,
  isGameOver,
  emptyGameboardValue, 
  arrayOfShipNames,
  disablePlayerMove,
  isPlayerOneTurn,
  isPlayerTwoComputer
) => {
  if (
       isPlayerTurn 
    && isGameStarted
    && !isGameOver
    && (gameboard[+id] === emptyGameboardValue || arrayOfShipNames.includes(gameboard[+id]))
    && !disablePlayerMove
    && !(!isPlayerOneTurn && isPlayerTwoComputer)
  ) {
    return true;
  }
  return false;
};
