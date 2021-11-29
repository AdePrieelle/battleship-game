export const getPreviousHitDirectionNotSunkenShip = (
  previousHitDirectionNotSunkenShipVerticalValue,
  previousHitDirectionNotSunkenShipHorizontalValue,
  previousHitComputerCellsNotSunkenShip,
) => {
  let copyHitComputerCellNumbers = [...previousHitComputerCellsNotSunkenShip];
  let copyHitComputerCellNumbersSortedAscending = copyHitComputerCellNumbers.sort();
  if (copyHitComputerCellNumbersSortedAscending[0] === (copyHitComputerCellNumbersSortedAscending[1] - 10)) {
    // ship is placed vertically
    return (previousHitDirectionNotSunkenShipVerticalValue);
  } else if (copyHitComputerCellNumbersSortedAscending[0] === (copyHitComputerCellNumbersSortedAscending[1] - 1)) {
    // ship is placed horizontally
    return (previousHitDirectionNotSunkenShipHorizontalValue);
  }
}
