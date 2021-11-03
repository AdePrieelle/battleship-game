export const generateRandomValidShipPosition = (
  generateRandomShipPosition,
  randomGameboard, 
  ship, 
  horizontalDirectionValue, 
  verticalDirectionValue, 
  getRandomIndexFromArray, 
  getRandomArrayValue, 
  calculateShipCoords,
  isValidShipPosition,
  isEmptyGameboardCell,
  emptyGameboardValue,
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
  getFirstDigitOfNumber,
  checkIfShipIsNotSurroundedByAnotherShip,
  createRandomGameboard,
  ships
) => {
  let randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
  let timesTriedToPlaceShip = 1;

  while (!isValidShipPosition(
    isEmptyGameboardCell(randomGameboard, randomShipPosition.startIndex, emptyGameboardValue),
    checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(randomShipPosition.startIndex, ship, randomShipPosition.direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
    checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, randomShipPosition.shipCoords, emptyGameboardValue) 
  )) {
    if (timesTriedToPlaceShip >= 25) {
      return createRandomGameboard(10, 10, emptyGameboardValue, ships);
    } else {
      randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
      timesTriedToPlaceShip += 1;
    }
  }
  
  return randomShipPosition;
}
