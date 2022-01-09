import { GameboardPlayerGrid } from './GameboardPlayerGrid';
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
  gameboardPlayerTwoInitialState
}) => {
  return (
    <div className="gameboards-wrapper">
      {
          (!isPlayerOneTurn && !isPlayerTwoComputer)
        ? 
          <>
            {/* Player two plays on gameboardPlayerOne */}
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
            {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
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
          </>
      :
        <>
          {/* Player one plays on gameboardPlayerTwo */}
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
          {/* Player one sees current state of gameboardPlayerTwo where player one or the computer plays on */}
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
        </>
      }
    </div>
  );
};
