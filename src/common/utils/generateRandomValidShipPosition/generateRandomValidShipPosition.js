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
  shipLengthPropertyText,
  maxAmountTimesTriedToPlaceShip
) => {
  let randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
  let timesTriedToPlaceShip = 1;

  while (!isValidShipPosition(
    isEmptyGameboardCell(randomGameboard, randomShipPosition.startIndex, emptyGameboardValue),
    checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(randomShipPosition.startIndex, ship, randomShipPosition.direction, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getFirstDigitOfNumber),
    checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, randomShipPosition.shipCoords, emptyGameboardValue) 
  )) {
    // return false if it takes too long to find a valid ship position, to prevent an infinite loop
    if (timesTriedToPlaceShip >= maxAmountTimesTriedToPlaceShip) {
      return false;
    } else {
      randomShipPosition = generateRandomShipPosition(randomGameboard, ship, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getRandomIndexFromArray, getRandomArrayValue, calculateShipCoords);
      timesTriedToPlaceShip += 1;
    }
  }
  return randomShipPosition;
}
