import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  amountOfRows: 10,
  amountOfColumns: 10,
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

}

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
} = gameSlice.actions;

// Selector functions
export const selectAmountOfRows = (state) => state.game.amountOfRows;
export const selectAmountOfColumns = (state) => state.game.amountOfColumns;
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

export default gameSlice.reducer;
