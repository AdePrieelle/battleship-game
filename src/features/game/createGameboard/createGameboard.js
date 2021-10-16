export const createGameboard = (amountRows, amountColumns, defaultValue) => {
  let gameboardState = [];

  // create an one dimensional array with a default value
  for(let i=0; i < amountRows*amountColumns; i++){
    gameboardState.push(defaultValue);
  }

  return gameboardState;
}
