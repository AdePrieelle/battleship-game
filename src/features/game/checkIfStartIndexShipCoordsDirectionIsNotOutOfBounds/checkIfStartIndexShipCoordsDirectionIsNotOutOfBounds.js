export const checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds = (startIndex, ship, direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber) => {
  if (direction === horizontalDirectionValue) {
    const lastDigitOfstartIndex = startIndex % 10;
    if (lastDigitOfstartIndex + (ship.shipLength - 1) <= 9) {
      return true;
    }
    return false;
  }

  if (direction === verticalDirectionValue) {
    let firstDigitOfStartIndex;
    if (startIndex < 10) {
      firstDigitOfStartIndex = 0;
    } else {
      firstDigitOfStartIndex = getFirstDigitOfNumber(startIndex)
    }
    if (firstDigitOfStartIndex + (ship.shipLength - 1) <= 9) {
      return true;
    }
    return false;
  }
  return false;
}
