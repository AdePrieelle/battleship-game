export const getAvailableRandomGameboardComputerCellNumber = (
  getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips,
  gameboardComputer,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue,
  getRandomIndexFromArray,
) => {
  // array of indexes of computercells that are either "empty" or a hidden ship
  const gameboardComputerCellsAvailable = getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips(gameboardComputer, hitGameboardValue, missGameboardValue, freemissGameboardValue);
  // pick a random index from the gameboardComputerCellsAvailable
  const randomIndexGameboardComputerCellsAvailable = getRandomIndexFromArray(gameboardComputerCellsAvailable);
  // random gameboardComputer cell value that gets picked with the random index
  const randomGameboardComputerCellNumber = gameboardComputerCellsAvailable[randomIndexGameboardComputerCellsAvailable];
  
  return randomGameboardComputerCellNumber;
}
