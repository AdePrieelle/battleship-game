import { createSlice } from "@reduxjs/toolkit";
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
import { ships } from "./ships";

const initialState = {
  amountOfRows: 10,
  amountOfColumns: 10,
  emptyGameboardValue: "empty",
  hitGameboardValue: "hit",
  missGameboardValue: "miss",
  freemissGameboardValue: "freemiss",
  horizontalDirectionValue: "horizontal",
  verticalDirectionValue: "vertical",
  buttonNextStepText: "Next",
  shipNamePropertyText: "name",
  shipLengthPropertyText: "shipLength",
  shipIsSunkenPropertyText: "isSunken",
  computerName: "Computer",
  playerOneName: "Player 1",
  playerTwoName: "Player 2",
  
  isPlayerOneTurn: true,
  computerHitTurnAgainCountDefaultValue: 0,
  computerHitTurnAgainCount: 0,
  isGameStarted: false,
  isGameOver: false,
  playerOneWonGame: false,
  playerTwoWonGame: false,
  computerWonGame: false,
  isPlayerTwoComputer: true,

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
  gameboardPlayerOne: [],
  gameboardPlayerTwo: [],

  previousHitComputerCellsNotSunkenShipDefaultValue: [],
  previousHitDirectionNotSunkenShipHorizontalValue: "horizontal",
  previousHitDirectionNotSunkenShipVerticalValue: "vertical",
  previousHitDirectionNotSunkenShipDefaultValue: null,

  previousHitComputerCellsNotSunkenShip: [],
  previousHitDirectionNotSunkenShip: null,


  showGameboards: true,
  showModalGameOver: false,
  showModalPickOpponent: false,
  showModalGameSwitchTurnToPlayerTwo: false,
  showModalGameSwitchTurnToPlayerOne: false,
  disablePlayerMove: false,
  disableButtonGameSwitchPlayerTurn: false,


  // GameLogicModals

  showModalPreGamePlayerOneNameAgainstComputer: false,
  showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer: false,
  showModalPreGamePlayerOneName: false,
  showModalPreGamePlayerTwoName: false,
  showModalPreGameSwitchTurnToPlayerOneGameboard: false,
  showModalPreGameGameboardPlayerOneGridShipPlacement: false,
  showModalPreGameSwitchTurnToPlayerTwoGameboard: false,
  showModalPreGameGameboardPlayerTwoGridShipPlacement: false,
  showModalPreGameSwitchTurnToPlayerOne: false,




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
    updateDisableButtonGameSwitchPlayerTurn: (state, action) => {
      state.disableButtonGameSwitchPlayerTurn = action.payload;
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

    handleButtonGameSwitchPlayerTurn: (state) => {
      state.showGameboards = false;
      state.disablePlayerMove = false;
      state.disableButtonGameSwitchPlayerTurn = true;
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


    // GameLogicModals

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



    handleMove: (state, action) => {
      console.log(state);
      console.log(state.isPlayerTwoComputer);
      console.log(action);
      // only need to know index for action.payload
      let gameboard;
      let gameboardInitialState;
      let updateGameboardPlayer;
      const isComputer = !state.isPlayerOneTurn && state.isPlayerTwoComputer;

      if (state.isPlayerOneTurn) {
        gameboard = state.gameboardPlayerTwo;
        gameboardInitialState = state.gameboardPlayerTwoInitialState;
        updateGameboardPlayer = updateGameboardPlayerTwo;
      } else {
        gameboard = state.gameboardPlayerOne;
        gameboardInitialState = state.gameboardPlayerOneInitialState;
        updateGameboardPlayer = updateGameboardPlayerOne;
      }

      const arrayOfShipNames = getArrayOfArrayOfObjectsKeyValues(ships, state.shipNamePropertyText);
      if (isHiddenShipGameboardCell(gameboard, +action.payload.index, arrayOfShipNames)) {
        const newGameboardStateAfterHitLogicWithFreeMissCells = getGameboardAfterHitLogic(
          gameboard,
          +action.payload.index,
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
          if (isSunkenShipAfterHit(gameboard, +action.payload.index, state.hitGameboardValue, isSunkenShip)) {
            // currently "hit" ship is sunken
            gameSlice.caseReducers.updatePreviousHitComputerCellsNotSunkenShip(state.previousHitComputerCellsNotSunkenShipDefaultValue);
            gameSlice.caseReducers.updatePreviousHitDirectionNotSunkenShip(state.previousHitDirectionNotSunkenShipDefaultValue);
          } else {
            // currently "hit" ship isn't sunken
            let copyPreviousHitComputerCellNumbersInfo = [...state.previousHitComputerCellsNotSunkenShip];
            copyPreviousHitComputerCellNumbersInfo.push(+action.payload.index);
            gameSlice.caseReducers.updatePreviousHitComputerCellsNotSunkenShip(copyPreviousHitComputerCellNumbersInfo);
          };
          gameSlice.caseReducers.incrementComputerHitTurnAgainCount();
        };
        // updated gameboard
        if (state.isPlayerOneTurn) {
          gameSlice.caseReducers.updateGameboardPlayerTwo(newGameboardStateAfterHitLogicWithFreeMissCells);
        } else {
          gameSlice.caseReducers.updateGameboardPlayerOne(newGameboardStateAfterHitLogicWithFreeMissCells);
        }
        // gameSlice.caseReducers[updateGameboardPlayer](newGameboardStateAfterHitLogicWithFreeMissCells);
        // logic for isGameOver
        const allShipsSunken = isAllShipsSunken(newGameboardStateAfterHitLogicWithFreeMissCells, ships, state.shipNamePropertyText);
        if (allShipsSunken) {
          gameSlice.caseReducers.handleIsGameOver({ payload: { computerWon: isComputer } });
        };
      } else if (isEmptyGameboardCell(gameboard, +action.payload.index, state.emptyGameboardValue)) {
        const newGameboardStateAfterMissLogicWithMissCell = getGameboardAfterMissLogic(gameboard, +action.payload.index, state.missGameboardValue);
        if (state.isPlayerOneTurn) {
          gameSlice.caseReducers.updateGameboardPlayerTwo(newGameboardStateAfterMissLogicWithMissCell);
        } else {
          gameSlice.caseReducers.updateGameboardPlayerOne(newGameboardStateAfterMissLogicWithMissCell);
        }
        // gameSlice.caseReducers[updateGameboardPlayer](newGameboardStateAfterMissLogicWithMissCell);
        if (isComputer) {
          gameSlice.caseReducers.resetComputerHitTurnAgainCount();
        };
        if (state.isPlayerTwoComputer) {
          gameSlice.caseReducers.updateIsPlayerOneTurn(!state.isPlayerOneTurn);
        };
        if (!isComputer && !state.isPlayerTwoComputer) {
          gameSlice.caseReducers.updateDisablePlayerMove(true);
          gameSlice.caseReducers.updateDisableButtonGameSwitchPlayerTurn(false);
        };
      };
    },

    handlePlayerMove: (state, action) => {
      // only need to know if isPlayerOne and index in action.payload
      let gameboardPlayer;
      let isPlayerTurn;
      if (action.payload.isPlayerOne) {
        gameboardPlayer = state.gameboardPlayerTwo;
        isPlayerTurn = state.isPlayerOneTurn;
      } else {
        gameboardPlayer = state.gameboardPlayerOne;
        isPlayerTurn = !state.isPlayerOneTurn;
      };

      const arrayOfShipNames = getArrayOfArrayOfObjectsKeyValues(ships, state.shipNamePropertyText);
      if (isValidPlayerTurn(
        gameboardPlayer, 
        +action.payload.index,
        isPlayerTurn, 
        state.isGameStarted,
        state.isGameOver,
        state.emptyGameboardValue,
        arrayOfShipNames
      )) {
        gameSlice.caseReducers.handleMove(state, { payload: { index: +action.payload.index } });
      }
    },

    

  },
});

export const { 
  updatePlayerOneName, 
  updatePlayerTwoName,
  updateIsPlayerOneTurn,
  resetComputerHitTurnAgainCount,
  incrementComputerHitTurnAgainCount,
  updateIsGameStarted,
  updateIsGameOver,
  updatePlayerOneWonGame,
  updatePlayerTwoWonGame,
  updateComputerWonGame,
  updateIsPlayerTwoComputer,

  updateGameboardPlayerOneInitialState,
  updateGameboardPlayerTwoInitialState,
  updateGameboardPlayerOne,
  updateGameboardPlayerTwo,

  updatePreviousHitComputerCellsNotSunkenShip,
  updatePreviousHitDirectionNotSunkenShip,

  updateShowGameboards,
  updateShowModalGameOver,
  updateShowModalPickOpponent,
  updateShowModalGameSwitchTurnToPlayerTwo,
  updateShowModalGameSwitchTurnToPlayerOne,
  updateDisablePlayerMove,
  updateDisableButtonGameSwitchPlayerTurn,

  handleIsGameOver,
  handleStartGame,
  handleButtonNewGame,
  handleButtonGameSwitchPlayerTurn,
  handleNewGame,


  // GameLogicModals

  updateShowModalPreGamePlayerOneNameAgainstComputer,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer,
  updateShowModalPreGamePlayerOneName,
  updateShowModalPreGamePlayerTwoName,
  updateShowModalPreGameSwitchTurnToPlayerOneGameboard,
  updateShowModalPreGameGameboardPlayerOneGridShipPlacement,
  updateShowModalPreGameSwitchTurnToPlayerTwoGameboard,
  updateShowModalPreGameGameboardPlayerTwoGridShipPlacement,
  updateShowModalPreGameSwitchTurnToPlayerOne,

  handleModalPickOpponentComputer,
  handleModalPreGamePlayerOneNameAgainstComputer,
  handleModalPickOpponentPlayer,
  handleModalPreGamePlayerOneName,
  handleModalPreGamePlayerTwoName,
  handleModalPreGameSwitchToPlayerOneGameboard,
  handleModalPreGameSwitchTurnToPlayerTwo,
  handleModalPreGameSwitchTurnToPlayerOne,
  handleModalGameSwitchTurnToPlayerTwo,
  handleModalGameSwitchTurnToPlayerOne,

  handleMove,
  handlePlayerMove,



} = gameSlice.actions;

// Selector functions
export const selectAmountOfRows = (state) => state.game.amountOfRows;
export const selectAmountOfColumns = (state) => state.game.amountOfColumns;
export const selectEmptyGameboardValue = (state) => state.game.emptyGameboardValue;
export const selectHitGameboardValue = (state) => state.game.hitGameboardValue;
export const selectMissGameboardValue = (state) => state.game.missGameboardValue;
export const selectFreemissGameboardValue = (state) => state.game.freemissGameboardValue;
export const selectHorizontalDirectionValue = (state) => state.game.horizontalDirectionValue;
export const selectVerticalDirectionValue = (state) => state.game.verticalDirectionValue;
export const selectButtonNextStepText = (state) => state.game.buttonNextStepText;
export const selectShipNamePropertyText = (state) => state.game.shipNamePropertyText;
export const selectShipLengthPropertyText = (state) => state.game.shipLengthPropertyText;
export const selectShipIsSunkenPropertyText = (state) => state.game.shipIsSunkenPropertyText;
export const selectComputerName = (state) => state.game.computerName;
export const selectPlayerOneName = (state) => state.game.playerOneName;
export const selectPlayerTwoName = (state) => state.game.playerTwoName;

export const selectIsPlayerOneTurn = (state) => state.game.isPlayerOneTurn;
// export const selectComputerHitTurnAgainCountDefaultValue = (state) => state.game.computerHitTurnAgainCountDefaultValue;
export const selectComputerHitTurnAgainCount = (state) => state.game.computerHitTurnAgainCount;
export const selectIsGameStarted = (state) => state.game.isGameStarted;
export const selectIsGameOver = (state) => state.game.isGameOver;
export const selectPlayerOneWonGame = (state) => state.game.playerOneWonGame;
export const selectPlayerTwoWonGame = (state) => state.game.playerTwoWonGame;
export const selectComputerWonGame = (state) => state.game.computerWonGame;
export const selectIsPlayerTwoComputer = (state) => state.game.isPlayerTwoComputer;

export const selectGameboardPlayerOneInitialState = (state) => state.game.gameboardPlayerOneInitialState;
export const selectGameboardPlayerTwoInitialState = (state) => state.game.gameboardPlayerTwoInitialState;
export const selectGameboardPlayerOne = (state) => state.game.gameboardPlayerOne;
export const selectGameboardPlayerTwo = (state) => state.game.gameboardPlayerTwo;

export const selectPreviousHitComputerCellsNotSunkenShipDefaultValue = (state) => state.game.previousHitComputerCellsNotSunkenShipDefaultValue;
export const selectPreviousHitDirectionNotSunkenShipHorizontalValue = (state) => state.game.previousHitDirectionNotSunkenShipHorizontalValue;
export const selectPreviousHitDirectionNotSunkenShipVerticalValue = (state) => state.game.previousHitDirectionNotSunkenShipVerticalValue;
export const selectPreviousHitDirectionNotSunkenShipDefaultValue = (state) => state.game.previousHitDirectionNotSunkenShipDefaultValue;

export const selectPreviousHitComputerCellsNotSunkenShip = (state) => state.game.previousHitComputerCellsNotSunkenShip;
export const selectPreviousHitDirectionNotSunkenShip = (state) => state.game.previousHitDirectionNotSunkenShip;

export const selectShowGameboards = (state) => state.game.showGameboards;
export const selectShowModalGameOver = (state) => state.game.showModalGameOver;
export const selectShowModalPickOpponent = (state) => state.game.showModalPickOpponent;
export const selectShowModalGameSwitchTurnToPlayerTwo = (state) => state.game.showModalGameSwitchTurnToPlayerTwo;
export const selectShowModalGameSwitchTurnToPlayerOne = (state) => state.game.showModalGameSwitchTurnToPlayerOne;
export const selectDisablePlayerMove = (state) => state.game.disablePlayerMove;
export const selectDisableButtonGameSwitchPlayerTurn = (state) => state.game.disableButtonGameSwitchPlayerTurn;

// GameLogicModals

export const selectShowModalPreGamePlayerOneNameAgainstComputer = (state) => state.game.showModalPreGamePlayerOneNameAgainstComputer;
export const selectShowModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer = (state) => state.game.showModalPreGameGameboardPlayerOneGridShipPlacementAgainstComputer;
export const selectShowModalPreGamePlayerOneName = (state) => state.game.showModalPreGamePlayerOneName;
export const selectShowModalPreGamePlayerTwoName = (state) => state.game.showModalPreGamePlayerTwoName;
export const selectShowModalPreGameSwitchTurnToPlayerOneGameboard = (state) => state.game.showModalPreGameSwitchTurnToPlayerOneGameboard;
export const selectShowModalPreGameGameboardPlayerOneGridShipPlacement = (state) => state.game.showModalPreGameGameboardPlayerOneGridShipPlacement;
export const selectShowModalPreGameSwitchTurnToPlayerTwoGameboard = (state) => state.game.showModalPreGameSwitchTurnToPlayerTwoGameboard;
export const selectShowModalPreGameGameboardPlayerTwoGridShipPlacement = (state) => state.game.showModalPreGameGameboardPlayerTwoGridShipPlacement;
export const selectShowModalPreGameSwitchTurnToPlayerOne = (state) => state.game.showModalPreGameSwitchTurnToPlayerOne;


export default gameSlice.reducer;
