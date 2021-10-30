export const checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds = (startIndex, ship, direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber) => {
  if (direction === horizontalDirectionValue) {
    const lastDigitOfstartIndex = startIndex % 10;
    if (lastDigitOfstartIndex + (ship.shipLength - 1) <= 9) {
      return true;
    }
    return false;
  }

  if (direction === verticalDirectionValue) {
    const firstDigitOfStartIndex = getFirstDigitOfNumber(startIndex)
    if (firstDigitOfStartIndex + (ship.shipLength - 1) <= 9) {
      return true;
    }
    return false;
  }
  return false;
}
