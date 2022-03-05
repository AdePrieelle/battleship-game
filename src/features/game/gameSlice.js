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
    }



    // const resetRandomGameboards = () => {
    //   setGameboardPlayerOneInitialState([...gameboardPlayerOneInitialState]);
    //   setGameboardPlayerTwoInitialState([...gameboardPlayerTwoInitialState]);
    //   // setGameboardPlayerOneInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
    //   // setGameboardPlayerTwoInitialState(() => createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard));
    // } 
    
    
    // const handleNewGame = () => {
    //   setIsGameOver(false);
    //   setIsGameStarted(false);
    //   setComputerWonGame(false);
    //   setPlayerOneWonGame(false);
    //   setPlayerTwoWonGame(false);
    //   setPreviousHitComputerCellsNotSunkenShip(previousHitComputerCellsNotSunkenShipDefaultValue);
    //   setPreviousHitDirectionNotSunkenShip(previousHitDirectionNotSunkenShipDefaultValue);
    //   resetRandomGameboards();
    // }

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



export default gameSlice.reducer;
