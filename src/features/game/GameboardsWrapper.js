import { GameboardPlayerGrid } from './GameboardPlayerGrid';
import { GameboardShipStats } from './GameboardShipStats/GameboardShipStats';
import { ships } from './ships';
import { GameButtons } from './GameButtons';
import './GameboardsWrapper.scss';

export const GameboardsWrapper = ({
  isPlayerOneTurn,
  isPlayerTwoComputer,
  gameboardPlayerOne,
  amountOfColumns,
  amountOfRows,
  hitGameboardValue,
  missGameboardValue,
  freemissGameboardValue,
  emptyGameboardValue,
  handlePlayerMove,
  setGameboardPlayerOne,
  gameboardPlayerOneInitialState,
  isGameStarted,
  isGameOver,
  disablePlayerMove,
  gameboardPlayerTwo,
  setGameboardPlayerTwo,
  gameboardPlayerTwoInitialState,
  handleButtonNewGame,
  handleButtonGameSwitchPlayerTurn,
  disableButtonGameSwitchPlayerTurn,
  shipLengthPropertyText,
  shipNamePropertyText,
  shipIsSunkenPropertyText
}) => {
  return (
    <div className="gameboards-wrapper">
      {
          (!isPlayerOneTurn && !isPlayerTwoComputer)
        ? 
          <>
            {/* Player two plays on gameboardPlayerOne */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerOne}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, setGameboardPlayerOne, gameboardPlayerOneInitialState)}
                isPlayerTurn={!isPlayerOneTurn}
                isPlayerOne={false}
                isPlayerTwoComputer={isPlayerTwoComputer}
                isGameStarted={isGameStarted}
                isGameOver={isGameOver}
                disablePlayerMove={disablePlayerMove}
              />
              <GameboardShipStats 
                gameboard={gameboardPlayerOne}
                ships={ships}
                shipNamePropertyText={shipNamePropertyText}
                shipLengthPropertyText={shipLengthPropertyText}
                shipIsSunkenPropertyText={shipIsSunkenPropertyText}
              />
            </div>
            <div className="gameboards-wrapper-button-wrapper">
              <GameButtons 
                handleButtonNewGame={handleButtonNewGame}
                isPlayerTwoComputer={isPlayerTwoComputer}
                handleButtonGameSwitchPlayerTurn={handleButtonGameSwitchPlayerTurn}
                disableButtonGameSwitchPlayerTurn={disableButtonGameSwitchPlayerTurn}
              />
            </div>
            {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerTwo}
                amountOfColumns={amountOfColumns}
                amountOfRows={amountOfRows}
                hitGameboardValue={hitGameboardValue}
                missGameboardValue={missGameboardValue}
                freemissGameboardValue={freemissGameboardValue}
                emptyGameboardValue={emptyGameboardValue}
                isPlayerTurn={isPlayerOneTurn}
                isPlayerOne={true}
                isPlayerTwoComputer={isPlayerTwoComputer}
                isGameStarted={isGameStarted}
                isGameOver={isGameOver}
                disablePlayerMove={disablePlayerMove}
              />
              <GameboardShipStats 
                gameboard={gameboardPlayerTwo}
                ships={ships}
                shipNamePropertyText={shipNamePropertyText}
                shipLengthPropertyText={shipLengthPropertyText}
                shipIsSunkenPropertyText={shipIsSunkenPropertyText}
              />
            </div>
          </>
      :
        <>
          {/* Player one plays on gameboardPlayerTwo */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
            <GameboardPlayerGrid 
              gameboardPlayer={gameboardPlayerTwo}
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              hitGameboardValue={hitGameboardValue}
              missGameboardValue={missGameboardValue}
              freemissGameboardValue={freemissGameboardValue}
              emptyGameboardValue={emptyGameboardValue}
              handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, isPlayerOneTurn, setGameboardPlayerTwo, gameboardPlayerTwoInitialState)}
              isPlayerTurn={isPlayerOneTurn}
              isPlayerOne={true}
              isPlayerTwoComputer={isPlayerTwoComputer}
              isGameStarted={isGameStarted}
              isGameOver={isGameOver}
              disablePlayerMove={disablePlayerMove}
            />
            <GameboardShipStats 
              gameboard={gameboardPlayerTwo}
              ships={ships}
              shipNamePropertyText={shipNamePropertyText}
              shipLengthPropertyText={shipLengthPropertyText}
              shipIsSunkenPropertyText={shipIsSunkenPropertyText}
            />
          </div>
          <div className="gameboards-wrapper-button-wrapper">
            <GameButtons 
              handleButtonNewGame={handleButtonNewGame}
              isPlayerTwoComputer={isPlayerTwoComputer}
              handleButtonGameSwitchPlayerTurn={handleButtonGameSwitchPlayerTurn}
              disableButtonGameSwitchPlayerTurn={disableButtonGameSwitchPlayerTurn}
            />
          </div>
          {/* Player one sees current state of gameboardPlayerTwo where player one or the computer plays on */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
            <GameboardPlayerGrid 
              gameboardPlayer={gameboardPlayerOne}
              amountOfColumns={amountOfColumns}
              amountOfRows={amountOfRows}
              hitGameboardValue={hitGameboardValue}
              missGameboardValue={missGameboardValue}
              freemissGameboardValue={freemissGameboardValue}
              emptyGameboardValue={emptyGameboardValue}
              isPlayerTurn={!isPlayerOneTurn}
              isPlayerOne={false}
              isPlayerTwoComputer={isPlayerTwoComputer}
              isGameStarted={isGameStarted}
              isGameOver={isGameOver}
              disablePlayerMove={disablePlayerMove}
            />
            <GameboardShipStats 
              gameboard={gameboardPlayerOne}
              ships={ships}
              shipNamePropertyText={shipNamePropertyText}
              shipLengthPropertyText={shipLengthPropertyText}
              shipIsSunkenPropertyText={shipIsSunkenPropertyText}
            />
          </div>
        </>
      }
    </div>
  );
};
