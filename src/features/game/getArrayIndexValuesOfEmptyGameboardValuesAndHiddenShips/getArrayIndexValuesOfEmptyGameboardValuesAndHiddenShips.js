export const getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips = (gameboard, hitGameboardValue, missGameboardValue, freemissGameboardValue) => {
  let arrayIndexValuesOfEmptyGameboardValuesAndHiddenShips = [];

  for (const index of gameboard.keys()) {
    if (gameboard[index] !== hitGameboardValue && gameboard[index] !== missGameboardValue && gameboard[index] !== freemissGameboardValue) {
      arrayIndexValuesOfEmptyGameboardValuesAndHiddenShips.push(index)
    }
  }

  return arrayIndexValuesOfEmptyGameboardValuesAndHiddenShips;
}
