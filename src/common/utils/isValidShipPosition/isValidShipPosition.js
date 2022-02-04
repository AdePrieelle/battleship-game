export const isValidShipPosition = (
  isEmptyGameboardCell,
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds, 
  checkIfShipIsNotSurroundedByAnotherShip
) => {
  if (
       isEmptyGameboardCell
    && checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds
    && checkIfShipIsNotSurroundedByAnotherShip
  ) {
    return true;
  }
  return false;
}
