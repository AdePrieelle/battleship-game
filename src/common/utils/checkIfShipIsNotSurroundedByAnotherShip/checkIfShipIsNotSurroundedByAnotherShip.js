export const checkIfShipIsNotSurroundedByAnotherShip = (gameboard, shipCoordsArray, emptyGameboardValue) => {
  for (const shipCoord of shipCoordsArray) {
    if ((shipCoord >= 0 && shipCoord <= 9)) {
      if (gameboard[shipCoord + 10] !== emptyGameboardValue) {
        return false;
      }
      if (shipCoord > 0) {
        if (gameboard[shipCoord + 9] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord - 1] !== emptyGameboardValue) {
          return false;
        }
      }
      if (shipCoord < 9) {
        if (gameboard[shipCoord + 1] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord + 11] !== emptyGameboardValue) {
          return false;
        }
      }
    }
    if (shipCoord >= 90 && shipCoord <= 99) {
      if (gameboard[shipCoord - 10] !== emptyGameboardValue) {
        return false;
      }
      if (shipCoord > 90) {
        if (gameboard[shipCoord - 1] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord - 11] !== emptyGameboardValue) {
          return false;
        }
      }
      if (shipCoord < 99) {
        if (gameboard[shipCoord + 1] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord - 9] !== emptyGameboardValue) {
          return false;
        }
      }
    }
    if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(shipCoord) > -1)) {
      if (gameboard[shipCoord + 1] !== emptyGameboardValue) {
        return false;
      }
      if (shipCoord > 0) {
        if (gameboard[shipCoord - 9] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord - 10] !== emptyGameboardValue) {
          return false;
        }
      }
      if (shipCoord < 90) {
        if (gameboard[shipCoord + 10] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord + 11] !== emptyGameboardValue) {
          return false;
        }
      }
    }
    if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(shipCoord) > -1)) {
      if (gameboard[shipCoord - 1] !== emptyGameboardValue) {
        return false;
      }
      if (shipCoord > 9) {
        if (gameboard[shipCoord - 10] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord - 11] !== emptyGameboardValue) {
          return false;
        }
      }
      if (shipCoord < 99) {
        if (gameboard[shipCoord + 9] !== emptyGameboardValue) {
          return false;
        }
        if (gameboard[shipCoord + 10] !== emptyGameboardValue) {
          return false;
        }
      }
    }
    if(!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(shipCoord) > -1)) {
      if (gameboard[shipCoord + 1] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord - 1] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord + 10] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord - 10] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord - 11] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord - 9] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord + 9] !== emptyGameboardValue) {
        return false;
      }
      if (gameboard[shipCoord + 11] !== emptyGameboardValue) {
        return false;
      }
    }
  }

  return true;
  
};
