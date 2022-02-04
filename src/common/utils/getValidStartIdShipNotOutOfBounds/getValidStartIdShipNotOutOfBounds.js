export const getValidStartIdShipNotOutOfBounds = (
  id,
  getRowNumberOfIndexTwoDimensionalArray,
  getFirstDigitOfNumber,
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
  shipPlacementDirection,
  horizontalDirectionValue,
  getLastIdInRowTwoDimensionalArray,
  amountOfRows,
  amountOfColumns,
  sortedShipsLengthDescendingOrder,
  currentIndexShipToBePlaced,
  verticalDirectionValue,
  shipLengthPropertyText,
  getLastDigitOfNumber
) => {
  const rowNumber = getRowNumberOfIndexTwoDimensionalArray(id, getFirstDigitOfNumber);
  const currentShip = sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced];
  const lengthOfShip = currentShip[shipLengthPropertyText];
  const isIdShipPlacementNotOutOfBounds = checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, currentShip, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getFirstDigitOfNumber);

  if (isIdShipPlacementNotOutOfBounds) {
    return id;
  } else if (shipPlacementDirection === horizontalDirectionValue) {
    const lastIdInRow = getLastIdInRowTwoDimensionalArray(rowNumber, (amountOfColumns - 1));
    const validStartIdShipNotOutOfBounds = (lastIdInRow - (lengthOfShip - 1));
    return validStartIdShipNotOutOfBounds;
  } else if (shipPlacementDirection === verticalDirectionValue) {
    const columnNumber = getLastDigitOfNumber(id);
    const validStartIdShipNotOutOfBounds = +(((amountOfRows - 1) - (lengthOfShip - 1)).toString() + columnNumber);
    return  validStartIdShipNotOutOfBounds;
  };
};
