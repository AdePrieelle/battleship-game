import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../../../common/components/Button/Button";
import { ButtonsWrapper } from "../../../../common/components/ButtonsWrapper/ButtonsWrapper";
import { calculateShipCoords } from "../../../../common/utils/calculateShipCoords/calculateShipCoords";
import { checkIfShipIsNotSurroundedByAnotherShip } from "../../../../common/utils/checkIfShipIsNotSurroundedByAnotherShip/checkIfShipIsNotSurroundedByAnotherShip";
import { checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds } from "../../../../common/utils/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds/checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds";
import { createGameboard } from "../../../../common/utils/createGameboard/createGameboard";
import { createRandomGameboard } from "../../../../common/utils/createRandomGameboard/createRandomGameboard";
import { generateRandomValidShipPosition } from "../../../../common/utils/generateRandomValidShipPosition/generateRandomValidShipPosition";
import { getArrayWithArrayOfIndexValuesReplacedByNewValue } from '../../../../common/utils/getArrayWithArrayOfIndexValuesReplacedByNewValue/getArrayWithArrayOfIndexValuesReplacedByNewValue';
import { getFirstDigitOfNumber } from "../../../../common/utils/getFirstDigitOfNumber/getFirstDigitOfNumber";
import { getLastDigitOfNumber } from "../../../../common/utils/getLastDigitOfNumber/getLastDigitOfNumber";
import { getLastIdInRowTwoDimensionalArray } from "../../../../common/utils/getLastIdInRowTwoDimensionalArray/getLastIdInRowTwoDimensionalArray";
import { getRowNumberOfIndexTwoDimensionalArray } from "../../../../common/utils/getRowNumberOfIndexTwoDimensionalArray/getRowNumberOfIndexTwoDimensionalArray";
import { getToggleValue } from "../../../../common/utils/getToggleValue/getToggleValue";
import { getValidStartIdShipNotOutOfBounds } from "../../../../common/utils/getValidStartIdShipNotOutOfBounds/getValidStartIdShipNotOutOfBounds";
import { isEmptyGameboardCell } from "../../../../common/utils/isEmptyGameboardCell/isEmptyGameboardCell";
import { isValidShipPosition } from "../../../../common/utils/isValidShipPosition/isValidShipPosition";
import { replaceAllSpecificArrayValuesWithNewValue } from '../../../../common/utils/replaceAllSpecificArrayValuesWithNewValue/replaceAllSpecificArrayValuesWithNewValue';
import { sortArrayOfObjectsBasedOnAPropertyValue } from "../../../../common/utils/sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue";
import {
  handleStartGame,
  selectAmountOfColumns,
  selectAmountOfRows,
  selectButtonNextStepText,
  selectEmptyGameboardValue,
  selectHorizontalDirectionValue,
  selectIsPlayerTwoComputer,
  selectPlayerOneName,
  selectPlayerTwoName,
  selectShipLengthPropertyText,
  selectShipNamePropertyText,
  selectShips,
  selectVerticalDirectionValue,
  updateGameboardPlayerOneInitialState,
  updateGameboardPlayerTwoInitialState,
  updateShowGameboards,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacement,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer,
  updateShowModalPreGameGameboardPlayerTwoGridShipPlacement,
  updateShowModalPreGameSwitchTurnToPlayerOne,
  updateShowModalPreGameSwitchTurnToPlayerTwoGameboard
} from "../../gameSlice";
import { GameButtonsShipPlacement } from "../GameButtonsShipPlacement/GameButtonsShipPlacement";
import './GameboardPlayerGridShipPlacement.scss';

export const GameboardPlayerGridShipPlacement = ({ isPlayerOne }) => {
  const dispatch = useDispatch();
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const buttonNextStepText = useSelector(selectButtonNextStepText);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);
  const horizontalDirectionValue = useSelector(selectHorizontalDirectionValue);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const playerOneName = useSelector(selectPlayerOneName);
  const playerTwoName = useSelector(selectPlayerTwoName);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const ships = useSelector(selectShips);
  const verticalDirectionValue = useSelector(selectVerticalDirectionValue);

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
  };

  const resetGameboardPlayerShipPlacement = () => {
    setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementInitialState);
    setShipPlacementdirection(horizontalDirectionValue);
    setCurrentIndexShipToBePlaced(0);
  };

  const removeLastShipPlacementFromGameboard = () => {
    const removedLastShipPlacementFromGameboard = replaceAllSpecificArrayValuesWithNewValue(
      gameboardPlayerShipPlacement, 
      sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced - 1][shipNamePropertyText],
      emptyGameboardValue
    );
    setGameboardPlayerShipPlacement(removedLastShipPlacementFromGameboard);
  };
  
  const undoLastShipPlacement = () => {
    if (currentIndexShipToBePlaced > 0) {
      removeLastShipPlacementFromGameboard();
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced - 1);
    };
  };

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
    shipLengthPropertyText,
    getLastDigitOfNumber
  );
  
  const isAValidShipPlacement = (id, shipCoordsArray) => {
    return (isValidShipPosition(
      isEmptyGameboardCell(gameboardPlayerShipPlacement, id, emptyGameboardValue),
      checkIfStartIndexShipCoordsDirectionIsNotOutOfBounds(id, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced], shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue, shipLengthPropertyText, getFirstDigitOfNumber),
      checkIfShipIsNotSurroundedByAnotherShip(gameboardPlayerShipPlacement, shipCoordsArray, emptyGameboardValue) 
    ));
  };

  const handleShipPlacementOnGameboard = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    let shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    if (isAValidShipPlacement(validStartIdShipNotOutOfBounds, shipCoordsShipPlacement)) {
      const gameboardPlayerShipPlacementWithPlacedShip = getArrayWithArrayOfIndexValuesReplacedByNewValue(gameboardPlayerShipPlacement, shipCoordsShipPlacement, sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipNamePropertyText]);
      setGameboardPlayerShipPlacement(gameboardPlayerShipPlacementWithPlacedShip);
      setHoveredIds([]);
      setCurrentIndexShipToBePlaced(currentIndexShipToBePlaced + 1);
    };
  };

  const handleOnMouseEnter = (id) => {
    const validStartIdShipNotOutOfBounds = getAValidStartIdShipNotOutOfBounds(id);
    const shipCoordsShipPlacement = calculateShipCoords(sortedShipsLengthDescendingOrder[currentIndexShipToBePlaced][shipLengthPropertyText], validStartIdShipNotOutOfBounds, shipPlacementDirection, horizontalDirectionValue, verticalDirectionValue);
    setHoveredIds(shipCoordsShipPlacement);
  };

  const handleOnMouseLeave = () => {
    setHoveredIds([]);
  };

  const randomizeGameboardPlayerShipPlacement = () => {
    setCurrentIndexShipToBePlaced(sortedShipsLengthDescendingOrder.length);
    setGameboardPlayerShipPlacement(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard))
  };

  const handleModalGameboardPlayerGridShipPlacement = () => {
    if (isPlayerOne) {
      dispatch(updateGameboardPlayerOneInitialState(gameboardPlayerShipPlacement));
      if (isPlayerTwoComputer) {
        dispatch(updateShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer(false));
        dispatch(handleStartGame());
        dispatch(updateShowGameboards(true));
      } else {
        dispatch(updateShowModalPreGameGameboardPlayerOneGridShipPlacement(false));
        dispatch(updateShowModalPreGameSwitchTurnToPlayerTwoGameboard(true));
      };
    } else {
      dispatch(updateGameboardPlayerTwoInitialState(gameboardPlayerShipPlacement));
      dispatch(updateShowModalPreGameGameboardPlayerTwoGridShipPlacement(false));
      dispatch(updateShowModalPreGameSwitchTurnToPlayerOne(true));
    };
  };

  const isShipPlacementFinished = () => {
    return (!((currentIndexShipToBePlaced < sortedShipsLengthDescendingOrder.length) && !isAllShipsPlaced));
  };

  return (
    <div className="gameboard-player-grid-ship-placement">
      <h1 className="player-name-title">{`${isPlayerOne ? playerOneName : playerTwoName}'s ship placements`}</h1>
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
            currentIndexShipToBePlaced={currentIndexShipToBePlaced}
            isAllShipsPlaced={isAllShipsPlaced}
            randomizeGameboardPlayerShipPlacement={randomizeGameboardPlayerShipPlacement}
            resetGameboardPlayerShipPlacement={resetGameboardPlayerShipPlacement}
            shipPlacementDirection={shipPlacementDirection}
            toggleShipPlacementDirection={toggleShipPlacementDirection}
            undoLastShipPlacement={undoLastShipPlacement}
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
