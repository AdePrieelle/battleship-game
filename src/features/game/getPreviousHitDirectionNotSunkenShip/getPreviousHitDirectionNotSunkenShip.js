export const getPreviousHitDirectionNotSunkenShip = (
  previousHitDirectionNotSunkenShipVerticalValue,
  previousHitDirectionNotSunkenShipHorizontalValue,
  previousHitComputerCellsNotSunkenShip,
) => {
  let copyHitComputerCellNumbers = [...previousHitComputerCellsNotSunkenShip];
  let copyHitComputerCellNumbersSortedDescending = copyHitComputerCellNumbers.sort();
  if (copyHitComputerCellNumbersSortedDescending[0] === (copyHitComputerCellNumbersSortedDescending[1] - 10)) {
    // ship is placed vertically
    return (previousHitDirectionNotSunkenShipVerticalValue);
  } else if (copyHitComputerCellNumbersSortedDescending[0] === (copyHitComputerCellNumbersSortedDescending[1] - 1)) {
    // ship is placed horizontally
    return (previousHitDirectionNotSunkenShipHorizontalValue);
  }
}
