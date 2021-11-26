export const getAvailableNextSmartComputerMovesAfterHit = (
  gameboardComputer,
  previousHitComputerCellsNotSunkenShip,
  previousHitDirectionNotSunkenShip,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue
) => {
  let copyGameboardComputer = [...gameboardComputer];
  let availableNextSmartComputerMoves = [];
  const sortedPreviousHitDirectionNotSunkenShip = previousHitComputerCellsNotSunkenShip.sort();

  const isShipOrEmptyGameboardValue = (gameboard, index, hitGameboardValue, missGameboardValue, freemissGameboardValue) => {
    if (!([hitGameboardValue, missGameboardValue, freemissGameboardValue].indexOf(gameboard[index]) > -1)) {
      return true;
    }
    return false;
  }
  
  if (sortedPreviousHitDirectionNotSunkenShip.length === 1) {
    // search for available next computer moves top, right, bottom and left of the previousHitDirectionNotSunkenShip
    const index = sortedPreviousHitDirectionNotSunkenShip[0];
    if ((index >= 0 && index <= 9)) {
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 10);
      }
      if (index > 0) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 1);
        }
      }
      if (index < 9) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 1);
        }
      }
    }
    
    if (index >= 90 && index <= 99) {
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 10);
      }
      if (index > 90) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 1);
        }
      }
      if (index < 99) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 1);
        }
      }
    }

    if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(index) > -1)) {
      if (index > 0) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 10);
        }
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index + 1);
      }
      if (index < 90) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 10);
        }
      }
    }

    if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
      if (index > 9) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index - 10);
        }
      }
      if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index - 1), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
        availableNextSmartComputerMoves.push(index - 1);
      }
      if (index < 99) {
        if (isShipOrEmptyGameboardValue(copyGameboardComputer, (index + 10), hitGameboardValue, missGameboardValue, freemissGameboardValue)) {
          availableNextSmartComputerMoves.push(index + 10);
        }
      }
    }

    if(!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
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

  // === previousHitDirectionNotSunkenShipHorizontalValue instead
  if (previousHitDirectionNotSunkenShip === "horizontal") {

  }
  
  



  return (availableNextSmartComputerMoves.sort());
};
