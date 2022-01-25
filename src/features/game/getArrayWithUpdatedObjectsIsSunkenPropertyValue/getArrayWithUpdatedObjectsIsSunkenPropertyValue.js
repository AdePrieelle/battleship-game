export const getArrayWithUpdatedObjectsIsSunkenPropertyValue = (array, isSunkenKeyValue, shipNameValue, gameboard, isSunkenShip) => {
  let copyArray = [...array];
  for (const obj of copyArray) {
    const shipName = obj[shipNameValue];
    if (isSunkenShip(gameboard, shipName)) {
      obj[isSunkenKeyValue] = true;
    }
  }
  return copyArray
};
