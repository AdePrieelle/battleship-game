export const getAvailableNextSmartComputerMovesAfterHit = (
  gameboardComputer,
  previousHitComputerCellsNotSunkenShip,
  previousHitDirectionNotSunkenShip,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue,
  previousHitDirectionNotSunkenShipHorizontalValue,
  previousHitDirectionNotSunkenShipVerticalValue,
  isShipOrEmptyGameboardValue
) => {
  let copyGameboardComputer = [...gameboardComputer];
  let availableNextSmartComputerMoves = [];
  // const sortedPreviousHitDirectionNotSunkenShip = previousHitComputerCellsNotSunkenShip.sort((a, b) => a - b);
  
  if (previousHitComputerCellsNotSunkenShip.length === 1) {
    // search for available next computer moves top, right, bottom and left of the previousHitDirectionNotSunkenShip
    const index = Math.min(...previousHitComputerCellsNotSunkenShip);

    if (([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(index) > -1)) {
      // index is on the top border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 10);
      }
    }

    if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(index) > -1)) {
      // index is on the left border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 1);
      }
    }

    if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
      // index is on the right border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 1);
      }
    }

    if (([90, 91, 92, 93, 94, 95, 96, 97, 98, 99].indexOf(index) > -1)) {
      // index is on the bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 10);
      }
    }

    if ( !([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(index) > -1) && !([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(index) > -1) && !([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1) && !(([90, 91, 92, 93, 94, 95, 96, 97, 98, 99].indexOf(index) > -1))) {
      // index isn't on the top, left, right or bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 10);
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 1);
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 1);
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 10);
      }
    }
  }

  
  if (previousHitDirectionNotSunkenShip === previousHitDirectionNotSunkenShipHorizontalValue) {
    // direction of ship that has been hit but isn't sunken yet is horizontal
    const indexMin = Math.min(...previousHitComputerCellsNotSunkenShip);
    const indexMax = Math.max(...previousHitComputerCellsNotSunkenShip);

    if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(indexMin) > -1)) {
      // indexMin is on the left border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 1);
      }
    }

    if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(indexMax) > -1)) {
      // indexMax is on the right border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 1);
      }
    }

    if (!([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(indexMin) > -1) && !([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(indexMin) > -1)) {
      // indexMin isn't on the left border and indexMax isn't on the right border
      availableNextSmartComputerMoves.push(indexMin - 1);
      availableNextSmartComputerMoves.push(indexMax + 1);
    }
  }

  if (previousHitDirectionNotSunkenShip === previousHitDirectionNotSunkenShipVerticalValue) {
    // direction of ship that has been hit but isn't sunken yet is horizontal
    const indexMin = Math.min(...previousHitComputerCellsNotSunkenShip);
    const indexMax = Math.max(...previousHitComputerCellsNotSunkenShip);

    if (([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(indexMin) > -1)) {
      // indexMin is on the top border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 10);
      }
    }

    if (([90, 91, 92, 93, 94, 95, 96, 97, 98, 99].indexOf(indexMax) > -1)) {
      // indexMax is on the bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 10);
      }
    }

    if (!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].indexOf(indexMin) > -1) && !([90, 91, 92, 93, 94, 95, 96, 97, 98, 99].indexOf(indexMin) > -1)) {
      // indexMin isn't on the top border and indexMax isn't on the bottom border
      availableNextSmartComputerMoves.push(indexMin - 10);
      availableNextSmartComputerMoves.push(indexMax + 10);
    }
  }
  
  

  const sortedAvailableNextSmartComputerMoves = availableNextSmartComputerMoves.sort((a, b) => a - b);

  return sortedAvailableNextSmartComputerMoves;
};
