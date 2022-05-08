import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addFreeMissGameboardValueCellsAroundCellDiagonally } from "../../common/utils/addFreeMissGameboardValueCellsAroundCellDiagonally/addFreeMissGameboardValueCellsAroundCellDiagonally";
import { addFreeMissGameboardValueCellsAroundSunkenShip } from "../../common/utils/addFreeMissGameboardValueCellsAroundSunkenShip/addFreeMissGameboardValueCellsAroundSunkenShip";
import { getAllIndexesOfAnArrayValue } from "../../common/utils/getAllIndexesOfAnArrayValue/getAllIndexesOfAnArrayValue";
import { getArrayOfArrayOfObjectsKeyValues } from "../../common/utils/getArrayOfArrayOfObjectsKeyValues/getArrayOfArrayOfObjectsKeyValues";
import { getGameboardAfterHitLogic } from "../../common/utils/getGameboardAfterHitLogic/getGameboardAfterHitLogic";
import { getGameboardAfterMissLogic } from "../../common/utils/getGameboardAfterMissLogic/getGameboardAfterMissLogic";
import { isAllShipsSunken } from "../../common/utils/isAllShipsSunken/isAllShipsSunken";
import { isEmptyGameboardCell } from "../../common/utils/isEmptyGameboardCell/isEmptyGameboardCell";
import { isHiddenShipGameboardCell } from "../../common/utils/isHiddenShipGameboardCell/isHiddenShipGameboardCell";
import { isSunkenShip } from "../../common/utils/isSunkenShip/isSunkenShip";
import { isSunkenShipAfterHit } from "../../common/utils/isSunkenShipAfterHit/isSunkenShipAfterHit";
import { isValidPlayerTurn } from "../../common/utils/isValidPlayerTurn/isValidPlayerTurn";

const initialState = {
  amountOfColumns: 10,
  amountOfRows: 10,
  buttonNextStepText: "Next",
  computerHitTurnAgainCount: 0,
  computerHitTurnAgainCountDefaultValue: 0,
  computerName: "Computer",
  computerWonGame: false,
  disablePlayerMove: false,
  emptyGameboardValue: "empty",
  freemissGameboardValue: "freemiss",
  gameboardPlayerOne: [],
  gameboardPlayerOneInitialState: [
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "c1", "c1", "c1", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ],
  gameboardPlayerTwo: [],
  gameboardPlayerTwoInitialState: [
    "hit", "miss", "hit", "miss", "hit", "miss", "hit", "miss", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "c1", "c1", "c1", "c1", "miss", "miss", "hit", "hit", "miss", "empty",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "empty",
    "hit", "miss", "hit", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
    "hit", "hit", "miss", "hit", "hit", "miss", "miss", "miss", "miss", "miss",
    "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss", "miss",
  ],
  hitGameboardValue: "hit",
  horizontalDirectionValue: "horizontal",
  isGameOver: false,
  isGameStarted: false,
  isPlayerOneTurn: true,
  isPlayerTwoComputer: true,
  missGameboardValue: "miss",
  playerOneName: "Player 1",
  playerOneWonGame: false,
  playerTwoName: "Player 2",
  playerTwoWonGame: false,
  previousHitComputerCellsNotSunkenShip: [],
  previousHitComputerCellsNotSunkenShipDefaultValue: [],
  previousHitDirectionNotSunkenShip: null,
  previousHitDirectionNotSunkenShipDefaultValue: null,
  previousHitDirectionNotSunkenShipHorizontalValue: "horizontal",
  previousHitDirectionNotSunkenShipVerticalValue: "vertical",
  shipIsSunkenPropertyText: "isSunken",
  shipLengthPropertyText: "shipLength",
  shipNamePropertyText: "name",
  ships: [
    {
      name: "d1",
      shipLength: 1,
    },
    {
      name: "d2",
      shipLength: 1,
    },
    {
      name: "d3",
      shipLength: 1,
    },
    {
      name: "d4",
      shipLength: 1,
    },
    {
      name: "s1",
      shipLength: 2,
    },
    {
      name: "s2",
      shipLength: 2,
    },
    {
      name: "s3",
      shipLength: 2,
    },
    {
      name: "b1",
      shipLength: 3,
    },
    {
      name: "b2",
      shipLength: 3,
    },
    {
      name: "c1",
      shipLength: 4,
    },
  ],
  showGameboards: true,
  showModalGameOver: false,
  showModalGameSwitchTurnToPlayerOne: false,
  showModalGameSwitchTurnToPlayerTwo: false,
  showModalPickOpponent: false,
  showModalPreGameGameboardPlayerOneGridShipPlacement: false,
  showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer: false,
  showModalPreGameGameboardPlayerTwoGridShipPlacement: false,
  showModalPreGamePlayerOneName: false,
  showModalPreGamePlayerOneNameAgainstComputer: false,
  showModalPreGamePlayerTwoName: false,
  showModalPreGameSwitchTurnToPlayerOne: false,
  showModalPreGameSwitchTurnToPlayerOneGameboard: false,
  showModalPreGameSwitchTurnToPlayerTwoGameboard: false,
  verticalDirectionValue: "vertical",
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    updatePlayerOneName: (state, action) => {
      state.playerOneName = action.payload;
    },
    updatePlayerTwoName: (state, action) => {
      state.playerTwoName = action.payload;
    },
    updateIsPlayerOneTurn: (state, action) => {
      state.isPlayerOneTurn = action.payload;
    },
    resetComputerHitTurnAgainCount: (state) => {
      state.computerHitTurnAgainCount = state.computerHitTurnAgainCountDefaultValue;
    },
    incrementComputerHitTurnAgainCount: (state) => {
      state.computerHitTurnAgainCount += 1;
    },
    updateIsGameStarted: (state, action) => {
      state.isGameStarted = action.payload;
    },
    updateIsGameOver: (state, action) => {
      state.isGameOver = action.payload;
    },
    updatePlayerOneWonGame: (state, action) => {
      state.playerOneWonGame = action.payload;
    },
    updatePlayerTwoWonGame: (state, action) => {
      state.playerTwoWonGame = action.payload;
    },
    updateComputerWonGame: (state, action) => {
      state.computerWonGame = action.payload;
    },
    updateIsPlayerTwoComputer: (state, action) => {
      state.isPlayerTwoComputer = action.payload;
    },
    updateGameboardPlayerOneInitialState: (state, action) => {
      state.gameboardPlayerOneInitialState = action.payload;
    },
    updateGameboardPlayerTwoInitialState: (state, action) => {
      state.gameboardPlayerTwoInitialState = action.payload;
    },
    updateGameboardPlayerOne: (state, action) => {
      state.gameboardPlayerOne = action.payload;
    },
    updateGameboardPlayerTwo: (state, action) => {
      state.gameboardPlayerTwo = action.payload;
    },
    updatePreviousHitComputerCellsNotSunkenShip: (state, action) => {
      state.previousHitComputerCellsNotSunkenShip = action.payload;
    },
    updatePreviousHitDirectionNotSunkenShip: (state, action) => {
      state.previousHitDirectionNotSunkenShip = action.payload;
    },
    updateShowGameboards: (state, action) => {
      state.showGameboards = action.payload;
    },
    updateShowModalGameOver: (state, action) => {
      state.showModalGameOver = action.payload;
    },
    updateShowModalPickOpponent: (state, action) => {
      state.showModalPickOpponent = action.payload;
    },
    updateShowModalGameSwitchTurnToPlayerTwo: (state, action) => {
      state.showModalGameSwitchTurnToPlayerTwo = action.payload;
    },
    updateShowModalGameSwitchTurnToPlayerOne: (state, action) => {
      state.showModalGameSwitchTurnToPlayerOne = action.payload;
    },
    updateDisablePlayerMove: (state, action) => {
      state.disablePlayerMove = action.payload;
    },
    handleIsGameOver: (state, action) => {
      state.isGameStarted = false;
      state.isGameOver = true;
      if (action.payload.computerWon) {
        state.computerHitTurnAgainCount = state.computerHitTurnAgainCountDefaultValue;
        state.computerWonGame = true;
      } else if (!action.payload.computerWon) {
        if (state.isPlayerOneTurn) {
          state.playerOneWonGame = true;
        } else if (!state.isPlayerOneTurn) {
          state.playerTwoWonGame = true;
        }
      }
      state.showModalGameOver = true;
    },
    handleStartGame: (state) => {
      state.isGameOver = false;
      state.isPlayerOneTurn = true;
      state.computerHitTurnAgainCount = state.computerHitTurnAgainCountDefaultValue;
      state.disablePlayerMove = false;
      state.isGameStarted = true;
    },
    handleButtonNewGame: (state) => {
      state.showModalGameOver = false;
      state.showModalPickOpponent = true;
    },
    handleGameSwitchPlayerTurn: (state) => {
      state.showGameboards = false;
      state.disablePlayerMove = false;
      if (state.isPlayerOneTurn) {
        state.showModalGameSwitchTurnToPlayerTwo = true;
      } else if (!state.isPlayerOneTurn) {
        state.showModalGameSwitchTurnToPlayerOne = true;
      }
      state.isPlayerOneTurn = !state.isPlayerOneTurn;
    },
    handleNewGame: (state, action) => {
      state.isGameOver = false;
      state.isGameStarted = false;
      state.computerWonGame = false;
      state.playerOneWonGame = false;
      state.playerTwoWonGame = false;
      state.previousHitComputerCellsNotSunkenShip = state.previousHitComputerCellsNotSunkenShipDefaultValue;
      state.previousHitDirectionNotSunkenShip = state.previousHitDirectionNotSunkenShipDefaultValue;
      state.gameboardPlayerOneInitialState = action.payload.generatedRandomGameboardPlayerOneInitialState;
      state.gameboardPlayerTwoInitialState = action.payload.generatedRandomGameboardPlayerTwoInitialState;
    },
    updateShowModalPreGamePlayerOneNameAgainstComputer: (state, action) => {
      state.showModalPreGamePlayerOneNameAgainstComputer = action.payload;
    },
    updateShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer: (state, action) => {
      state.showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer = action.payload;
    },
    updateShowModalPreGamePlayerOneName: (state, action) => {
      state.showModalPreGamePlayerOneName = action.payload;
    },
    updateShowModalPreGamePlayerTwoName: (state, action) => {
      state.showModalPreGamePlayerTwoName = action.payload;
    },
    updateShowModalPreGameSwitchTurnToPlayerOneGameboard: (state, action) => {
      state.showModalPreGameSwitchTurnToPlayerOneGameboard = action.payload;
    },
    updateShowModalPreGameGameboardPlayerOneGridShipPlacement: (state, action) => {
      state.showModalPreGameGameboardPlayerOneGridShipPlacement = action.payload;
    },
    updateShowModalPreGameSwitchTurnToPlayerTwoGameboard: (state, action) => {
      state.showModalPreGameSwitchTurnToPlayerTwoGameboard = action.payload;
    },
    updateShowModalPreGameGameboardPlayerTwoGridShipPlacement: (state, action) => {
      state.showModalPreGameGameboardPlayerTwoGridShipPlacement = action.payload;
    },
    updateShowModalPreGameSwitchTurnToPlayerOne: (state, action) => {
      state.showModalPreGameSwitchTurnToPlayerOne = action.payload;
    },
    handleModalPickOpponentComputer: (state, action) => {
      state.showModalPickOpponent = false;
      gameSlice.caseReducers.handleNewGame(state, action);
      state.isPlayerTwoComputer = true;
      state.showGameboards = false;
      state.showModalPreGamePlayerOneNameAgainstComputer = true;
    },
    handleModalPreGamePlayerOneNameAgainstComputer: (state) => {
      state.showModalPreGamePlayerOneNameAgainstComputer = false;
      state.showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer = true;
    },
    handleModalPickOpponentPlayer: (state, action) => {
      state.showModalPickOpponent = false;
      gameSlice.caseReducers.handleNewGame(state, action);
      state.isPlayerTwoComputer = false;
      state.showGameboards = false;
      state.showModalPreGamePlayerOneName = true;
    },
    handleModalPreGamePlayerOneName: (state) => {
      state.showModalPreGamePlayerOneName = false;
      state.showModalPreGamePlayerTwoName = true;
    },
    handleModalPreGamePlayerTwoName: (state) => {
      state.showModalPreGamePlayerTwoName = false;
      state.showModalPreGameSwitchTurnToPlayerOneGameboard = true;
    },
    handleModalPreGameSwitchToPlayerOneGameboard: (state) => {
      state.showModalPreGameSwitchTurnToPlayerOneGameboard = false;
      state.showModalPreGameGameboardPlayerOneGridShipPlacement = true;
    },
    handleModalPreGameSwitchTurnToPlayerTwo: (state) => {
      state.showModalPreGameSwitchTurnToPlayerTwoGameboard= false;
      state.showModalPreGameGameboardPlayerTwoGridShipPlacement = true;
    },
    handleModalPreGameSwitchTurnToPlayerOne: (state) => {
      state.showModalPreGameSwitchTurnToPlayerOne = false;
      state.showGameboards = true;
      gameSlice.caseReducers.handleStartGame(state);
    },
    handleModalGameSwitchTurnToPlayerTwo: (state) => {
      state.showModalGameSwitchTurnToPlayerTwo = false;
      state.showGameboards = true;
    },
    handleModalGameSwitchTurnToPlayerOne: (state) => {
      state.showModalGameSwitchTurnToPlayerOne = false;
      state.showGameboards = true;
    },
  },
});

export const handleMove = createAsyncThunk('game/handleMove', async(index, { dispatch, getState }) => {
  let gameboard;
  let gameboardInitialState;
  const state = (() => (getState().game))();
  const isComputer = !state.isPlayerOneTurn && state.isPlayerTwoComputer;

  if (state.isPlayerOneTurn) {
    gameboard = state.gameboardPlayerTwo;
    gameboardInitialState = state.gameboardPlayerTwoInitialState;
  } else {
    gameboard = state.gameboardPlayerOne;
    gameboardInitialState = state.gameboardPlayerOneInitialState;
  };

  const arrayOfShipNames = getArrayOfArrayOfObjectsKeyValues(state.ships, state.shipNamePropertyText);
  if (isHiddenShipGameboardCell(gameboard, +index, arrayOfShipNames)) {
    const newGameboardStateAfterHitLogicWithFreeMissCells = getGameboardAfterHitLogic(
      gameboard,
      +index,
      state.hitGameboardValue,
      isSunkenShip,
      getAllIndexesOfAnArrayValue,
      gameboardInitialState,
      addFreeMissGameboardValueCellsAroundSunkenShip,
      state.freemissGameboardValue,
      state.emptyGameboardValue,
      addFreeMissGameboardValueCellsAroundCellDiagonally
    );
    if (isComputer) {
      if (isSunkenShipAfterHit(gameboard, +index, state.hitGameboardValue, isSunkenShip)) {
        // currently "hit" ship is sunken
        dispatch(updatePreviousHitComputerCellsNotSunkenShip(state.previousHitComputerCellsNotSunkenShipDefaultValue));
        dispatch(updatePreviousHitDirectionNotSunkenShip(state.previousHitDirectionNotSunkenShipDefaultValue));
      } else {
        // currently "hit" ship isn't sunken
        let copyPreviousHitComputerCellNumbersInfo = [...state.previousHitComputerCellsNotSunkenShip];
        copyPreviousHitComputerCellNumbersInfo.push(+index);
        dispatch(updatePreviousHitComputerCellsNotSunkenShip(copyPreviousHitComputerCellNumbersInfo));
      };
      dispatch(incrementComputerHitTurnAgainCount());
    };
    // updated gameboard
    if (state.isPlayerOneTurn) {
      dispatch(updateGameboardPlayerTwo(newGameboardStateAfterHitLogicWithFreeMissCells));
    } else {
      dispatch(updateGameboardPlayerOne(newGameboardStateAfterHitLogicWithFreeMissCells));
    };
    // logic for isGameOver
    const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, state.ships, state.shipNamePropertyText);
    if (allShipsSunken) {
      dispatch(handleIsGameOver({ computerWon: isComputer }));
    };
  } else if (isEmptyGameboardCell(gameboard, +index, state.emptyGameboardValue)) {
    // logic for miss
    const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, +index, state.missGameboardValue);
    if (state.isPlayerOneTurn) {
      dispatch(updateGameboardPlayerTwo(newGameboardStateAfterMissLogicWithMissCell));
    } else {
      dispatch(updateGameboardPlayerOne(newGameboardStateAfterMissLogicWithMissCell));
    };
    if (isComputer) {
      dispatch(resetComputerHitTurnAgainCount());
    };
    if (state.isPlayerTwoComputer) {
      dispatch(updateIsPlayerOneTurn(!state.isPlayerOneTurn));
    };
    if (!isComputer && !state.isPlayerTwoComputer) {
      dispatch(updateDisablePlayerMove(true));
      setTimeout(() => {
        dispatch(handleGameSwitchPlayerTurn());
      }, 600)
    };
  };
});

export const handlePlayerMove = createAsyncThunk('game/handlePlayerMove', async(index, { dispatch, getState }) => {
  let gameboardPlayer;
  let isPlayerTurn;
  const state = (() => getState().game)();
  if (state.isPlayerOneTurn) {
    gameboardPlayer = state.gameboardPlayerTwo;
    isPlayerTurn = state.isPlayerOneTurn;
  } else {
    gameboardPlayer = state.gameboardPlayerOne;
    isPlayerTurn = !state.isPlayerOneTurn;
  };

  const arrayOfShipNames = getArrayOfArrayOfObjectsKeyValues(state.ships, state.shipNamePropertyText);
  if (isValidPlayerTurn(
    gameboardPlayer, 
    +index,
    isPlayerTurn, 
    state.isGameStarted,
    state.isGameOver,
    state.emptyGameboardValue,
    arrayOfShipNames,
    state.disablePlayerMove,
    state.isPlayerOneTurn,
    state.isPlayerTwoComputer
  )) {
    dispatch(handleMove(+index));
  };
});

export const { 
  handleGameSwitchPlayerTurn,
  handleButtonNewGame,
  handleIsGameOver,
  handleModalGameSwitchTurnToPlayerOne,
  handleModalGameSwitchTurnToPlayerTwo,
  handleModalPickOpponentComputer,
  handleModalPickOpponentPlayer,
  handleModalPreGamePlayerOneName,
  handleModalPreGamePlayerOneNameAgainstComputer,
  handleModalPreGamePlayerTwoName,
  handleModalPreGameSwitchToPlayerOneGameboard,
  handleModalPreGameSwitchTurnToPlayerOne,
  handleModalPreGameSwitchTurnToPlayerTwo,
  handleNewGame,
  handleStartGame,
  incrementComputerHitTurnAgainCount,
  resetComputerHitTurnAgainCount,
  updateComputerWonGame,
  updateDisablePlayerMove,
  updateGameboardPlayerOne,
  updateGameboardPlayerOneInitialState,
  updateGameboardPlayerTwo,
  updateGameboardPlayerTwoInitialState,
  updateIsGameOver,
  updateIsGameStarted,
  updateIsPlayerOneTurn,
  updateIsPlayerTwoComputer,
  updatePlayerOneName, 
  updatePlayerOneWonGame,
  updatePlayerTwoName,
  updatePlayerTwoWonGame,
  updatePreviousHitComputerCellsNotSunkenShip,
  updatePreviousHitDirectionNotSunkenShip,
  updateShowGameboards,
  updateShowModalGameOver,
  updateShowModalGameSwitchTurnToPlayerOne,
  updateShowModalGameSwitchTurnToPlayerTwo,
  updateShowModalPickOpponent,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacement,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer,
  updateShowModalPreGameGameboardPlayerTwoGridShipPlacement,
  updateShowModalPreGamePlayerOneName,
  updateShowModalPreGamePlayerOneNameAgainstComputer,
  updateShowModalPreGamePlayerTwoName,
  updateShowModalPreGameSwitchTurnToPlayerOne,
  updateShowModalPreGameSwitchTurnToPlayerOneGameboard,
  updateShowModalPreGameSwitchTurnToPlayerTwoGameboard,
} = gameSlice.actions;

// Selector functions
export const selectAmountOfColumns = (state) => state.game.amountOfColumns;
export const selectAmountOfRows = (state) => state.game.amountOfRows;
export const selectButtonNextStepText = (state) => state.game.buttonNextStepText;
export const selectComputerHitTurnAgainCount = (state) => state.game.computerHitTurnAgainCount;
export const selectComputerName = (state) => state.game.computerName;
export const selectComputerWonGame = (state) => state.game.computerWonGame;
export const selectDisablePlayerMove = (state) => state.game.disablePlayerMove;
export const selectEmptyGameboardValue = (state) => state.game.emptyGameboardValue;
export const selectFreemissGameboardValue = (state) => state.game.freemissGameboardValue;
export const selectGameboardPlayerOne = (state) => state.game.gameboardPlayerOne;
export const selectGameboardPlayerOneInitialState = (state) => state.game.gameboardPlayerOneInitialState;
export const selectGameboardPlayerTwo = (state) => state.game.gameboardPlayerTwo;
export const selectGameboardPlayerTwoInitialState = (state) => state.game.gameboardPlayerTwoInitialState;
export const selectHitGameboardValue = (state) => state.game.hitGameboardValue;
export const selectHorizontalDirectionValue = (state) => state.game.horizontalDirectionValue;
export const selectIsGameOver = (state) => state.game.isGameOver;
export const selectIsGameStarted = (state) => state.game.isGameStarted;
export const selectIsPlayerOneTurn = (state) => state.game.isPlayerOneTurn;
export const selectIsPlayerTwoComputer = (state) => state.game.isPlayerTwoComputer;
export const selectMissGameboardValue = (state) => state.game.missGameboardValue;
export const selectPlayerOneName = (state) => state.game.playerOneName;
export const selectPlayerOneWonGame = (state) => state.game.playerOneWonGame;
export const selectPlayerTwoName = (state) => state.game.playerTwoName;
export const selectPlayerTwoWonGame = (state) => state.game.playerTwoWonGame;
export const selectPreviousHitComputerCellsNotSunkenShip = (state) => state.game.previousHitComputerCellsNotSunkenShip;
export const selectPreviousHitComputerCellsNotSunkenShipDefaultValue = (state) => state.game.previousHitComputerCellsNotSunkenShipDefaultValue;
export const selectPreviousHitDirectionNotSunkenShip = (state) => state.game.previousHitDirectionNotSunkenShip;
export const selectPreviousHitDirectionNotSunkenShipDefaultValue = (state) => state.game.previousHitDirectionNotSunkenShipDefaultValue;
export const selectPreviousHitDirectionNotSunkenShipHorizontalValue = (state) => state.game.previousHitDirectionNotSunkenShipHorizontalValue;
export const selectPreviousHitDirectionNotSunkenShipVerticalValue = (state) => state.game.previousHitDirectionNotSunkenShipVerticalValue;
export const selectShipIsSunkenPropertyText = (state) => state.game.shipIsSunkenPropertyText;
export const selectShipLengthPropertyText = (state) => state.game.shipLengthPropertyText;
export const selectShipNamePropertyText = (state) => state.game.shipNamePropertyText;
export const selectShips = (state) => state.game.ships;
export const selectShowGameboards = (state) => state.game.showGameboards;
export const selectShowModalGameOver = (state) => state.game.showModalGameOver;
export const selectShowModalGameSwitchTurnToPlayerOne = (state) => state.game.showModalGameSwitchTurnToPlayerOne;
export const selectShowModalGameSwitchTurnToPlayerTwo = (state) => state.game.showModalGameSwitchTurnToPlayerTwo;
export const selectShowModalPickOpponent = (state) => state.game.showModalPickOpponent;
export const selectShowModalPreGameGameboardPlayerOneGridShipPlacement = (state) => state.game.showModalPreGameGameboardPlayerOneGridShipPlacement;
export const selectShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer = (state) => state.game.showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer;
export const selectShowModalPreGameGameboardPlayerTwoGridShipPlacement = (state) => state.game.showModalPreGameGameboardPlayerTwoGridShipPlacement;
export const selectShowModalPreGamePlayerOneName = (state) => state.game.showModalPreGamePlayerOneName;
export const selectShowModalPreGamePlayerOneNameAgainstComputer = (state) => state.game.showModalPreGamePlayerOneNameAgainstComputer;
export const selectShowModalPreGamePlayerTwoName = (state) => state.game.showModalPreGamePlayerTwoName;
export const selectShowModalPreGameSwitchTurnToPlayerOne = (state) => state.game.showModalPreGameSwitchTurnToPlayerOne;
export const selectShowModalPreGameSwitchTurnToPlayerOneGameboard = (state) => state.game.showModalPreGameSwitchTurnToPlayerOneGameboard;
export const selectShowModalPreGameSwitchTurnToPlayerTwoGameboard = (state) => state.game.showModalPreGameSwitchTurnToPlayerTwoGameboard;
export const selectVerticalDirectionValue = (state) => state.game.verticalDirectionValue;

export default gameSlice.reducer;
