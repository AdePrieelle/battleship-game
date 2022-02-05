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
  const indexesTop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const indexesLeft = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];
  const indexesRight = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99];
  const indexesBottom = [90, 91, 92, 93, 94, 95, 96, 97, 98, 99];
  
  if (previousHitComputerCellsNotSunkenShip.length === 1) {
    // search for available next computer moves top, right, bottom and left of the previousHitDirectionNotSunkenShip
    const index = Math.min(...previousHitComputerCellsNotSunkenShip);

    if ((indexesTop.indexOf(index) > -1)) {
      // index is on the top border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 10);
      }
      if (index > indexesTop[0]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 1);
        }
      }
      if (index < indexesTop[(indexesTop.length - 1)]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 1);
        }
      }
    }

    if ((indexesLeft.indexOf(index) > -1)) {
      // index is on the left border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 1);
      }
      if (index > indexesLeft[0]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 10);
        }
      }
      if (index < indexesLeft[(indexesLeft.length - 1)]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 10);
        }
      }
    }

    if ((indexesRight.indexOf(index) > -1)) {
      // index is on the right border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 1);
      }
      if (index > indexesRight[0]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 10);
        }
      }
      if (index < indexesRight[(indexesRight.length - 1)]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 10);
        }
      }
    }

    if ((indexesBottom.indexOf(index) > -1)) {
      // index is on the bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 10);
      }
      if (index > indexesBottom[0]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 1);
        }
      }
      if (index < indexesBottom[(indexesBottom.length - 1)]) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 1);
        }
      }
    }

    if ( !(indexesTop.indexOf(index) > -1) && !(indexesLeft.indexOf(index) > -1) && !(indexesRight.indexOf(index) > -1) && !((indexesBottom.indexOf(index) > -1))) {
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

    if ((indexesLeft.indexOf(indexMin) > -1)) {
      // indexMin is on the left border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 1);
      }
    }

    if ((indexesRight.indexOf(indexMax) > -1)) {
      // indexMax is on the right border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 1);
      }
    }

    if (!(indexesLeft.indexOf(indexMin) > -1) && !(indexesRight.indexOf(indexMax) > -1)) {
      // indexMin isn't on the left border and indexMax isn't on the right border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 1);
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 1);
      }
    }
  }

  if (previousHitDirectionNotSunkenShip === previousHitDirectionNotSunkenShipVerticalValue) {
    // direction of ship that has been hit but isn't sunken yet is horizontal
    const indexMin = Math.min(...previousHitComputerCellsNotSunkenShip);
    const indexMax = Math.max(...previousHitComputerCellsNotSunkenShip);

    if ((indexesTop.indexOf(indexMin) > -1)) {
      // indexMin is on the top border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 10);
      }
    }

    if ((indexesBottom.indexOf(indexMax) > -1)) {
      // indexMax is on the bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 10);
      }
    }

    if (!(indexesTop.indexOf(indexMin) > -1) && !(indexesBottom.indexOf(indexMax) > -1)) {
      // indexMin isn't on the top border and indexMax isn't on the bottom border
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMin - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMin - 10);
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (indexMax + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(indexMax + 10);
      }
    }
  }
  
  const sortedAvailableNextSmartComputerMoves = availableNextSmartComputerMoves.sort((a, b) => a - b);
  const sortedUniqueAvailableNextSmartComputerMoves = [...new Set(sortedAvailableNextSmartComputerMoves)];

  return sortedUniqueAvailableNextSmartComputerMoves;
};
