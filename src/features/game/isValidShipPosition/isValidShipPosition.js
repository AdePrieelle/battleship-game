export const isValidShipPosition = (
  gameboard, 
  emptyGameboardValue, 
  randomShipPosition, 
  ship, 
  horizontalDirectionValue, 
  verticalDirectionValue, 
  getFirstDigitOfNumber, 
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds, 
  checkIfShipIsNotSurroundedByAnotherShip
) => {
  if (
       gameboard[(randomShipPosition.startIndex)] === emptyGameboardValue 
    && checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(randomShipPosition.startIndex, ship, randomShipPosition.direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber)
    && checkIfShipIsNotSurroundedByAnotherShip(gameboard, randomShipPosition.shipCoords, emptyGameboardValue) 
  ) {
    return true;
  }
  return false;
}
