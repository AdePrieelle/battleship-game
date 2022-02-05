export const addFreeMissGameboardValueCellsAroundSunkenShip = (array, shipCoordsArray, freemissGameboardValue, emptyGameboardValue) => {
  let copyArray = [...array];

  for (const shipCoord of shipCoordsArray) {
    if ((shipCoord >= 0 && shipCoord <= 9)) {
      if (copyArray[shipCoord + 10] === emptyGameboardValue) {
        copyArray[shipCoord + 10] = freemissGameboardValue;
      }
      if (shipCoord > 0) {
        if (copyArray[shipCoord + 9] === emptyGameboardValue) {
          copyArray[shipCoord + 9] = freemissGameboardValue;
        }
        if (copyArray[shipCoord - 1] === emptyGameboardValue) {
          copyArray[shipCoord - 1] = freemissGameboardValue;
        }
      }
      if (shipCoord < 9) {
        if (copyArray[shipCoord + 1] === emptyGameboardValue) {
          copyArray[shipCoord + 1] = freemissGameboardValue;
        }
        if (copyArray[shipCoord + 11] === emptyGameboardValue) {
          copyArray[shipCoord + 11] = freemissGameboardValue;
        }
      }
    }
    if (shipCoord >= 90 && shipCoord <= 99) {
      if (copyArray[shipCoord - 10] === emptyGameboardValue) {
        copyArray[shipCoord - 10] = freemissGameboardValue;
      }
      if (shipCoord > 90) {
        if (copyArray[shipCoord - 1] === emptyGameboardValue) {
          copyArray[shipCoord - 1] = freemissGameboardValue;
        }
        if (copyArray[shipCoord - 11] === emptyGameboardValue) {
          copyArray[shipCoord - 11] = freemissGameboardValue;
        }
      }
      if (shipCoord < 99) {
        if (copyArray[shipCoord + 1] === emptyGameboardValue) {
          copyArray[shipCoord + 1] = freemissGameboardValue;
        }
        if (copyArray[shipCoord - 9] === emptyGameboardValue) {
          copyArray[shipCoord - 9] = freemissGameboardValue;
        }
      }
    }
    if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(shipCoord) > -1)) {
      if (copyArray[shipCoord + 1] === emptyGameboardValue) {
        copyArray[shipCoord + 1] = freemissGameboardValue;
      }
      if (shipCoord > 0) {
        if (copyArray[shipCoord - 9] === emptyGameboardValue) {
          copyArray[shipCoord - 9] = freemissGameboardValue;
        }
        if (copyArray[shipCoord - 10] === emptyGameboardValue) {
          copyArray[shipCoord - 10] = freemissGameboardValue;
        }
      }
      if (shipCoord < 90) {
        if (copyArray[shipCoord + 10] === emptyGameboardValue) {
          copyArray[shipCoord + 10] = freemissGameboardValue;
        }
        if (copyArray[shipCoord + 11] === emptyGameboardValue) {
          copyArray[shipCoord + 11] = freemissGameboardValue;
        }
      }
    }
    if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(shipCoord) > -1)) {
      if (copyArray[shipCoord - 1] === emptyGameboardValue) {
        copyArray[shipCoord - 1] = freemissGameboardValue;
      }
      if (shipCoord > 9) {
        if (copyArray[shipCoord - 10] === emptyGameboardValue) {
          copyArray[shipCoord - 10] = freemissGameboardValue;
        }
        if (copyArray[shipCoord - 11] === emptyGameboardValue) {
          copyArray[shipCoord - 11] = freemissGameboardValue;
        }
      }
      if (shipCoord < 99) {
        if (copyArray[shipCoord + 9] === emptyGameboardValue) {
          copyArray[shipCoord + 9] = freemissGameboardValue;
        }
        if (copyArray[shipCoord + 10] === emptyGameboardValue) {
          copyArray[shipCoord + 10] = freemissGameboardValue;
        }
      }
    }
    if(!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(shipCoord) > -1)) {
      if (copyArray[shipCoord + 1] === emptyGameboardValue) {
        copyArray[shipCoord + 1] = freemissGameboardValue;
      }
      if (copyArray[shipCoord - 1] === emptyGameboardValue) {
        copyArray[shipCoord - 1] = freemissGameboardValue;
      }
      if (copyArray[shipCoord + 10] === emptyGameboardValue) {
        copyArray[shipCoord + 10] = freemissGameboardValue;
      }
      if (copyArray[shipCoord - 10] === emptyGameboardValue) {
        copyArray[shipCoord - 10] = freemissGameboardValue;
      }
      if (copyArray[shipCoord - 11] === emptyGameboardValue) {
        copyArray[shipCoord - 11] = freemissGameboardValue;
      }
      if (copyArray[shipCoord - 9] === emptyGameboardValue) {
        copyArray[shipCoord - 9] = freemissGameboardValue;
      }
      if (copyArray[shipCoord + 9] === emptyGameboardValue) {
        copyArray[shipCoord + 9] = freemissGameboardValue;
      }
      if (copyArray[shipCoord + 11] === emptyGameboardValue) {
        copyArray[shipCoord + 11] = freemissGameboardValue;
      }
    }
  }

  return (
    copyArray
  );
};
