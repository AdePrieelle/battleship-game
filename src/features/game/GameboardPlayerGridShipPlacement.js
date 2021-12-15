import { useState } from "react";

export const GameboardPlayerGridShipPlacement = ({ 
  gameboardPlayer, 
  amountOfColumns, 
  amountOfRows, 
  hitGameboardValue, 
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  handlePlayerMove,
  isPlayerTurn,
  isPlayerOne,
  isPlayerTwoComputer,
  isGameStarted,
  isGameOver,
  gameboardPreGameActive,
  disablePlayerMove,
  ships,
  createGameboard,
  gameboardPlayerInitialState,
  setGameboardPlayerInitialState,
  sortArrayOfObjectsBasedOnAPropertyValue,
  isValidShipPosition,
  isEmptyGameboardCell,
  checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
  horizontalDirectionValue,
  verticalDirectionValue,
  getFirstDigitOfNumber,
  checkIfShipIsNotSurroundedByAnotherShip,
  calculateShipCoords
}) => {
  const gameboardPlayerShipPlacementInitialState = createGameboard(amountOfRows, amountOfColumns, "empty");

  const [gameboardPlayerShipPlacement, setGameboardPlayerShipPlacement] = useState(gameboardPlayerShipPlacementInitialState);
  const [shipPlacementDirection, setShipPlacementdirection] = useState(horizontalDirectionValue);

  // setGameboardPlayerInitialState(gameboardShipPlacement);
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  console.log(sortedShipsLengthDescendingOrder);
  const [currentIndexShipToBePlaced, setCurrentIndexShipToBePlaced] = useState(0);

  const placeShipOnGameboard = (gameboard, id, shipName) => {
    let copyGameboard = [...gameboard];
    copyGameboard[id] = shipName;
    return copyGameboard;
  }

  const toggleShipPlacementDirection = () => {
    if (shipPlacementDirection === horizontalDirectionValue) {
      setShipPlacementdirection(verticalDirectionValue);
    } else if (shipPlacementDirection === verticalDirectionValue) {
      setShipPlacementdirection(horizontalDirectionValue);
    }
  }

  // !isValidShipPosition(
  //   isEmptyGameboardCell(randomGameboard, randomShipPosition.startIndex, emptyGameboardValue),
  //   checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(randomShipPosition.startIndex, ship, randomShipPosition.direction, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
  //   checkIfShipIsNotSurroundedByAnotherShip(randomGameboard, randomShipPosition.shipCoords, emptyGameboardValue) 
  // )

  const handleShipPlacementOnGameboard = (id) => {
    let shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength, id, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);

    // check if ship with id is valid ship position
    const shipPlacementIsValid = isValidShipPosition(
      isEmptyGameboardCell(gameboardPlayerShipPlacement, id, emptyGameboardValue),
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
      checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsShipPlacement, emptyGameboardValue) 
    )

    // if succesful placement
    if (shipPlacementIsValid) {
      // setGameboardPlayerShipPlacement(placeShipOnGameboard(gameboardPlayerShipPlacement, id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name));
      
      
      let copyGameboardPlayerShipPlacement = [...gameboardPlayerShipPlacement];
      
      for (const coord of shipCoordsShipPlacement) {
        copyGameboardPlayerShipPlacement[coord] = sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name;
      }
      setGameboardPlayerShipPlacement(copyGameboardPlayerShipPlacement);
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced + 1);

    } else if (currentIndexShipToBePlaced === sortedShipsLengthDescendingOrder.length) {
      // set initial gameboard to this gameboard for player
      // go to next screen
    }
  }

  console.log(currentIndexShipToBePlaced);
  console.log(sortedShipsLengthDescendingOrder);

  return (
    <>
      <div>Place your Ships</div>
      {/* {
        ships.map((ship, id) => (
          <div key={id}>{`Place ship ${ship.name} with size ${ship.shipLength}`}</div>
        ))
      } */}
      <div>
        {
            (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length)
          ? `Place ship ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].name} with size ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced].shipLength}`
          : "All ships have been placed"
        }
      </div>
      <button onClick={toggleShipPlacementDirection}>{shipPlacementDirection}</button>
      <div 
        className={`gameboard gameboard-player`}
        style={{
          gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
          gridTemplateRows: `repeat(${amountOfRows}, auto)`,
        }}
      >
        {gameboardPlayerShipPlacement.map((cell, id) => (
          <div 
            key={id} 
            id={id} 
            className={`gameboard-cell ${
                  gameboardPlayerShipPlacement[id] === hitGameboardValue 
                ? "hit" 
                : gameboardPlayerShipPlacement[id] === missGameboardValue 
                ? "miss" 
                : gameboardPlayerShipPlacement[id] === freemissGameboardValue 
                ? "freemiss" 
                : gameboardPlayerShipPlacement[id] === emptyGameboardValue
                ? "empty"
                // : "ship"
                : isGameOver
                ? "ship"
                : isPlayerOne && isPlayerTwoComputer 
                ? "" 
                : !isPlayerOne && isPlayerTwoComputer 
                ? "ship" 
                : !isPlayerTurn 
                ? "ship" 
                : !isGameStarted && !isGameOver
                ? "ship"
                : ""
              }`
            } 
            onClick={
                (currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length)
              ? (() => handleShipPlacementOnGameboard(id))
              : null
            }
          >
          </div>
        ))}
      </div>
    </>
  );
};
