export const isValidPlayerTurn = (
  gameboard, 
  id,
  isPlayerTurn, 
  hitGameboardValue, 
  missGameboardValue, 
  freemissGameboardValue
) => {
  if (
       isPlayerTurn 
    && gameboard[+id] !== hitGameboardValue 
    && gameboard[+id] !== missGameboardValue 
    && gameboard[+id] !== freemissGameboardValue 
  ) {
    return true;
  }
  return false;
};
