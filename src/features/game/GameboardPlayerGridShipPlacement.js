import { useEffect, useState } from "react";
import { Button } from "./Button/Button";
import { replaceAllSpecificArrayValuesWithNewValue } from './replaceAllSpecificArrayValuesWithNewValue/replaceAllSpecificArrayValuesWithNewValue';
import { createRandomGameboard } from "./createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "./generateRandomValidShipPosition/generateRandomValidShipPosition";
import { ships } from "./ships";
import { createGameboard } from "./createGameboard/createGameboard";
import { sortArrayOfObjectsBasedOnAPropertyValue } from "./sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue";
import { isValidShipPosition } from "./isValidShipPosition/isValidShipPosition";
import { isEmptyGameboardCell } from "./isEmptyGameboardCell/isEmptyGameboardCell";
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from "./checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds";
import { getFirstDigitOfNumber } from "./getFirstDigitOfNumber/getFirstDigitOfNumber";
import { checkIfShipIsNotSurroundedByAnotherShip } from "./checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip";
import { calculateShipCoords } from "./calculateShipCoords/calculateShipCoords";
import { getArrayWithArrayOfIndexValuesReplacedByNewValue } from './getArrayWithArrayOfIndexValuesReplacedByNewValue/getArrayWithArrayOfIndexValuesReplacedByNewValue';
import { getToggleValue } from "./getToggleValue/getToggleValue";
import { getValidStartIdShipNotOutOfBounds } from "./getValidStartIdShipNotOutOfBounds/getValidStartIdShipNotOutOfBounds";
import { getRowNumberOfIndexTwoDimensionalArray } from "./getRowNumberOfIndexTwoDimensionalArray/getRowNumberOfIndexTwoDimensionalArray";
import { getLastIdInRowTwoDimensionalArray } from "./getLastIdInRowTwoDimensionalArray/getLastIdInRowTwoDimensionalArray";
import { getLastDigitOfNumber } from "./getLastDigitOfNumber/getLastDigitOfNumber";
import { GameButtonsShipPlacement } from "./GameButtonsShipPlacement";
import { ButtonsWrapper } from "./ButtonsWrapper/ButtonsWrapper";
import './GameboardPlayerGridShipPlacement.scss';

export const GameboardPlayerGridShipPlacement = ({ 
  amountOfColumns, 
  amountOfRows, 
  emptyGameboardValue,
  horizontalDirectionValue,
  verticalDirectionValue,
  setGameboardPlayerInitialState,
  setShowModalPreGameGameboardPlayerGridShipPlacement,
  handleStartGame,
  isPlayerTwoComputer,
  playerName,
  setNextModal = false,
  setShowGameboards = false,
  buttonNextStepText,
  shipNamePropertyText,
  shipLengthPropertyText
}) => {
  const gameboardPlayerShipPlacementInitialState = createGameboard(amountOfRows, amountOfColumns, emptyGameboardValue);
  const [gameboardPlayerShipPlacement, setGameboardPlayerShipPlacement] = useState(gameboardPlayerShipPlacementInitialState);
  const [shipPlacementDirection, setShipPlacementdirection] = useState(horizontalDirectionValue);
  const [currentIndexShipToBePlaced, setCurrentIndexShipToBePlaced] = useState(0);
  const [isAllShipsPlaced, setIsAllShipsPlaced] = useState(false);
  const [hoveredIds, setHoveredIds] = useState([]);
  
  const sortedShipsLengthDescendingOrder = sortArrayOfObjectsBasedOnAPropertyValue(ships, shipLengthPropertyText);

  useEffect(() => {
    if (currentIndexShipToBePlaced === (sortedShipsLengthDescendingOrder.length)) {
      setIsAllShipsPlaced(true);
    } else {
      setIsAllShipsPlaced(false);
    }
  }, [currentIndexShipToBePlaced, sortedShipsLengthDescendingOrder]);

  const toggleShipPlacementDirection = () => {
    const toggledShipPlacementDirectionValue = getToggleValue(shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    setShipPlacementdirection(toggledShipPlacementDirectionValue);
  }

  const resetGameboardPlayerShipPlacement = () => {
    setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementInitialState);
    setShipPlacementdirection(horizontalDirectionValue);
    setCurrentIndexShipToBePlaced(0);
  }

  const removeLastShipPlacementFromGameboard = () => {
    const removedLastShipPlacementFromGameboard = replaceAllSpecificArrayValuesWithNewValue(
      gameboardPlayerShipPlacement, 
      sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced - 1][shipNamePropertyText],
      emptyGameboardValue
    );
    setGameboardPlayerShipPlacement(removedLastShipPlacementFromGameboard);
  }
  
  const undoLastShipPlacement = () => {
    if (currentIndexShipToBePlaced > 0) {
      removeLastShipPlacementFromGameboard();
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced - 1);
    }
  }

  const getAValidStartIdShipNotOutOfBounds = (id) => getValidStartIdShipNotOutOfBounds(
    id,
    getRowNumberOfIndexTwoDimensionalArray,
    getFirstDigitOfNumber,
    checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds,
    shipPlacementDirection,
    horizontalDirectionValue,
    getLastIdInRowTwoDimensionalArray,
    amountOfRows,
    amountOfColumns,
    sortedShipsLengthDescendingOrder,
    currentIndexShipToBePlaced,
    verticalDirectionValue,
    getLastDigitOfNumber
  );
  
  const isAValidShipPlacement = (id, shipCoordsArray) => {
    return (isValidShipPosition(
      isEmptyGameboardCell(gameboardPlayerShipPlacement, id, emptyGameboardValue),
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, getFirstDigitOfNumber),
      checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsArray, emptyGameboardValue) 
    ));
  }

  const handleShipPlacementOnGameboard = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    let shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    // if succesful placement
    if (isAValidShipPlacement(validStartIdShipNotOutOfBounds, shipCoordsShipPlacement)) {
      const gameboardPlayerShipPlacementWithPlacedShip = getArrayWithArrayOfIndexValuesReplacedByNewValue(gameboardPlayerShipPlacement, shipCoordsShipPlacement, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipNamePropertyText]);
      setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementWithPlacedShip);
      setHoveredIds([]);
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced + 1);
    }
  }

  const handleOnMouseEnter = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    const shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    setHoveredIds(shipCoordsShipPlacement);
  };

  const handleOnMouseLeave = () => {
    setHoveredIds([]);
  }

  const randomizeGameboardPlayerShipPlacement = () => {
    setCurrentIndexShipToBePlaced(sortedShipsLengthDescendingOrder.length);
    setGameboardPlayerShipPlacement(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, createRandomGameboard))
  }

  const handleModalGameboardPlayerGridShipPlacement = () => {
    setGameboardPlayerInitialState(gameboardPlayerShipPlacement);
    setShowModalPreGameGameboardPlayerGridShipPlacement(false);
    if (setNextModal) {
      setNextModal(true);
    }
    if (isPlayerTwoComputer) {
      setShowGameboards(true);
      handleStartGame();
    }
  }

  const isShipPlacementFinished = () => {
    return (!((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced));
  }

  return (
    <div className="gameboard-player-grid-ship-placement">
      <h1 className="player-name-title">{`${playerName}'s ship placements`}</h1>
      <div className="ship-placement-message">
        {
            !isShipPlacementFinished()
          ? `Place ship ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipNamePropertyText]} with size ${sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText]}`
          : "All ships have been placed"
        }
      </div>
      <div className="game-buttons-ship-placement-wrapper">
        <ButtonsWrapper>
          <GameButtonsShipPlacement
            resetGameboardPlayerShipPlacement={resetGameboardPlayerShipPlacement}
            isAllShipsPlaced={isAllShipsPlaced}
            currentIndexShipToBePlaced={currentIndexShipToBePlaced}
            randomizeGameboardPlayerShipPlacement={randomizeGameboardPlayerShipPlacement}
            undoLastShipPlacement={undoLastShipPlacement}
            toggleShipPlacementDirection={toggleShipPlacementDirection}
            shipPlacementDirection={shipPlacementDirection}
          />
        </ButtonsWrapper>
      </div>
      <div className="gameboard-placement-wrapper">
        <div 
          className={`gameboard gameboard-player`}
          style={{
            gridTemplateColumns: `repeat(${amountOfColumns}, 1fr)`, 
            gridTemplateRows: `repeat(${amountOfRows}, auto)`,
          }}
          onMouseLeave={() => handleOnMouseLeave()}
        >
          {gameboardPlayerShipPlacement.map((cell, id) => (
            <div 
              key={id} 
              id={id} 
              className={`gameboard-cell ${
                    gameboardPlayerShipPlacement[id] === emptyGameboardValue
                  ? "empty"
                  : "ship"
                } ${
                    (hoveredIds.indexOf(+id) > -1)
                  ? isAValidShipPlacement(hoveredIds[0], hoveredIds)
                  ? "hovered-valid-ship-position"
                  : "hovered-invalid-ship-position"
                  : ""
                }`
              } 
              onClick={
                  !isShipPlacementFinished()
                ? (() => handleShipPlacementOnGameboard(+id))
                : null
              }
              onMouseEnter={
                  !isShipPlacementFinished()
                ? () => handleOnMouseEnter(+id)
                : null
              }
              onMouseLeave={() => handleOnMouseLeave}
            >
            </div>
          ))}
        </div>
      </div>
      <Button 
        buttonOnClick={handleModalGameboardPlayerGridShipPlacement}
        disableButton={isAllShipsPlaced ? false : true}
      >
        {
          isPlayerTwoComputer
          ? "Start game"
          : buttonNextStepText
        }
      </Button>
    </div>
  );
};
