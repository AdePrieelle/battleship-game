export const createRandomGameboard = (amountRows, amountColumns, defaultValue, setShipCoords) => {
  let gameboardState = [];

  // create an one dimensional array with a default value
  for(let i=0; i < amountRows*amountColumns; i++){
    gameboardState.push(defaultValue);
  }

  const copyGameboardState = [...gameboardState];

  let ships = [
    {
      shipName: "d1",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d2",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d3",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "d4",
      directions: {
        horizontal: [0],
        vertical: [0]
      }
    },
    {
      shipName: "s1",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "s2",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "s3",
      directions: {
        horizontal: [0, 1],
        vertical: [0, 10]
      }
    },
    {
      shipName: "b1",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "b2",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "b3",
      directions: {
        horizontal: [0, 1, 2],
        vertical: [0, 10, 20]
      }
    },
    {
      shipName: "c1",
      directions: {
        horizontal: [0, 1, 2, 3],
        vertical: [0, 10, 20, 30]
      }
    },
  ]

  const sortedShipsLengthDescending = ships.sort(function (one, other) {
    //a - b is 
    //   0 when elements are the same
    //  >0 when a > b
    //  <0 when a < b
    return other.directions.horizontal.length - one.directions.horizontal.length;
  });

  // console.log(sortedShipsLengthDescending);


  for (const ship of sortedShipsLengthDescending) {
    // console.log(ship);
    let randomDirection = Math.floor(Math.random() * 2);
    // console.log(randomDirection);
    let direction;
    if (randomDirection === 0) {
      direction = "horizontal";
    } else {
      direction = "vertical";
    }
    // direction = "horizontal";
    // console.log(direction);


    let randomStartIndex = Math.floor(Math.random() * copyGameboardState.length);
    console.log(randomStartIndex);

    // random index must be max 6 with ship length 4
    const checkIfRandomStartIndexIsValid = (randomStartIndex, ship, direction) => {
      if (direction === "horizontal") {
        const lastDigitOfRandomStartIndex = randomStartIndex % 10;
        if (lastDigitOfRandomStartIndex + (ship.directions.horizontal.length - 1) <= 9) {
          return true;
        }
        return false;
      }

      if (direction === "vertical") {
        let firstDigitOfRandomStartIndex;
        if (randomStartIndex < 10) {
          firstDigitOfRandomStartIndex = randomStartIndex;
        } else {
          const strRandomStartIndex = randomStartIndex.toString();
          const firstCharacterRandomStartIndex = strRandomStartIndex.slice(0, 1);
          firstDigitOfRandomStartIndex = +firstCharacterRandomStartIndex;
        }
        if (firstDigitOfRandomStartIndex + (ship.directions.vertical.length - 1) <= 9) {
          return true;
        }
        return false;
      }
    }

    // let isValidRandomStartIndex = checkIfRandomStartIndexIsValid(randomStartIndex, ship);


    // let timesTriedToPlaceShip = 1;

    // Maybe at a max timesTriedToPlaceShip variable to restart createRandomGameboard function
    // if it takes too long to find a valid random start index 
    while (!checkIfRandomStartIndexIsValid(randomStartIndex, ship, direction)) {
      // if (timesTriedToPlaceShip >= 10) {
        // createRandomGameboard(10, 10, "empty");
      // }
      randomStartIndex = Math.floor(Math.random() * copyGameboardState.length);
      console.log("newRandomNumer" + randomStartIndex + ship.shipName);
      // timesTriedToPlaceShip += 1;
    }

    // console.log("times tried to place ship " + ship.shipName + " : " + timesTriedToPlaceShip);

    const shipDirectionCoordsOfShip = ship.directions[direction];
    // console.log(shipDirectionCoordsOfShip);

    const generatedRandomShipDirectionCoordsOfShip = shipDirectionCoordsOfShip.map(coord => coord + randomStartIndex);

    for (let coord of generatedRandomShipDirectionCoordsOfShip) {
      // console.log(generatedRandomShipDirectionCoordsOfShip);
      // console.log(ship.shipName);
      copyGameboardState[coord] = ship.shipName;
    }

    

  }

  console.table(copyGameboardState);




  return true;
}
