export const getGameboardAfterHitLogic = (
  gameboard, 
  index, 
  hitGameboardValue, 
  isSunkenShip,
  getAllIndexesOfAnArrayValue, 
  gameboardInitialState,
  addFreeMissGameboardValueCellsAroundSunkenShip, 
  freemissGameboardValue, 
  emptyGameboardValue,
  addFreeMissGameboardValueCellsAroundCellDiagonally
) => {
  let newState = [...gameboard];
  const shipName = newState[index];
  newState[index] = hitGameboardValue;
  const isShipNameSunken = isSunkenShip(newState, shipName);
  let newStateWithFreeMissCells = newState;
  // add freemiss cell values around all the cells of a ship if they are empty and the ship is sunken
  if (isShipNameSunken) {
    const shipCoordsShipName = getAllIndexesOfAnArrayValue(gameboardInitialState, shipName);
    newStateWithFreeMissCells = addFreeMissGameboardValueCellsAroundSunkenShip(newState, shipCoordsShipName, freemissGameboardValue, emptyGameboardValue);
  } else {
    // add diagonally freemiss cell values around a single hit cell if the cell is empty
    newStateWithFreeMissCells = addFreeMissGameboardValueCellsAroundCellDiagonally(newState, index, freemissGameboardValue, emptyGameboardValue);
  }
  return newStateWithFreeMissCells;
}
