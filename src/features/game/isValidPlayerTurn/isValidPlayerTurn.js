export const isValidPlayerTurn = (
  gameboard, 
  id,
  isPlayerTurn, 
  hitGameboardValue, 
  missGameboardValue, 
  freemissGameboardValue,
  isGameStarted,
  isGameOver
) => {
  if (
       isPlayerTurn 
    && isGameStarted
    && !isGameOver
    && gameboard[+id] !== hitGameboardValue 
    && gameboard[+id] !== missGameboardValue 
    && gameboard[+id] !== freemissGameboardValue 
  ) {
    return true;
  }
  return false;
};
