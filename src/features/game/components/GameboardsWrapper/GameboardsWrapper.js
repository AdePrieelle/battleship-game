import { GameboardPlayerGrid } from '../GameboardPlayerGrid/GameboardPlayerGrid';
import { GameboardShipStats } from '../GameboardShipStats/GameboardShipStats';
import { ships } from '../../ships';
import { GameButtons } from '../GameButtons/GameButtons';
import './GameboardsWrapper.scss';
import { useSelector } from 'react-redux';
import { 
  selectAmountOfColumns, 
  selectAmountOfRows, 
  selectDisableButtonGameSwitchPlayerTurn, 
  selectDisablePlayerMove, 
  selectEmptyGameboardValue, 
  selectFreemissGameboardValue, 
  selectGameboardPlayerOne, 
  selectGameboardPlayerOneInitialState, 
  selectGameboardPlayerTwo, 
  selectGameboardPlayerTwoInitialState, 
  selectHitGameboardValue, 
  selectIsGameOver, 
  selectIsGameStarted, 
  selectIsPlayerOneTurn, 
  selectIsPlayerTwoComputer, 
  selectMissGameboardValue, 
  selectShipIsSunkenPropertyText, 
  selectShipLengthPropertyText, 
  selectShipNamePropertyText,
  updateGameboardPlayerOne,
  updateGameboardPlayerTwo,
  handleButtonNewGame,
  handleButtonGameSwitchPlayerTurn,
} from '../../gameSlice';

export const GameboardsWrapper = ({ handlePlayerMove }) => {
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const amountOfColumns = useSelector(selectAmountOfColumns);
  const amountOfRows = useSelector(selectAmountOfRows);
  const hitGameboardValue = useSelector(selectHitGameboardValue);
  const missGameboardValue = useSelector(selectMissGameboardValue);
  const freemissGameboardValue = useSelector(selectFreemissGameboardValue);
  const emptyGameboardValue = useSelector(selectEmptyGameboardValue);

  // const setGameboardPlayerOne = useSelector(selectGameboardPlayerOne);

  const gameboardPlayerOneInitialState = useSelector(selectGameboardPlayerOneInitialState);
  const isGameStarted = useSelector(selectIsGameStarted);
  const isGameOver = useSelector(selectIsGameOver);
  const disablePlayerMove = useSelector(selectDisablePlayerMove);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);

  // const setGameboardPlayerTwo = useSelector(selectIsPlayerOneTurn);

  const gameboardPlayerTwoInitialState = useSelector(selectGameboardPlayerTwoInitialState);

  // const handleButtonNewGame = useSelector(selectHandleButtonNewGame);

  // const handleButtonGameSwitchPlayerTurn = useSelector(selectIsPlayerOneTurn);

  const disableButtonGameSwitchPlayerTurn = useSelector(selectDisableButtonGameSwitchPlayerTurn);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const shipIsSunkenPropertyText = useSelector(selectShipIsSunkenPropertyText);

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
                handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerOne, !isPlayerOneTurn, updateGameboardPlayerOne, gameboardPlayerOneInitialState)}
                isPlayerTurn={!isPlayerOneTurn}
                isPlayerOne={false}
              />
              <GameboardShipStats 
                gameboard={gameboardPlayerOne}
              />
            </div>
            <div className="gameboards-wrapper-button-wrapper">
              <GameButtons />
            </div>
            {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
              <GameboardPlayerGrid 
                gameboardPlayer={gameboardPlayerTwo}
                isPlayerTurn={isPlayerOneTurn}
                isPlayerOne={true}
              />
              <GameboardShipStats 
                gameboard={gameboardPlayerTwo}
              />
            </div>
          </>
      :
        <>
          {/* Player one plays on gameboardPlayerTwo */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
            <GameboardPlayerGrid 
              gameboardPlayer={gameboardPlayerTwo}
              handlePlayerMove={(e) => handlePlayerMove(e, gameboardPlayerTwo, isPlayerOneTurn, updateGameboardPlayerTwo, gameboardPlayerTwoInitialState)}
              isPlayerTurn={isPlayerOneTurn}
              isPlayerOne={true}
            />
            <GameboardShipStats 
              gameboard={gameboardPlayerTwo}
            />
          </div>
          <div className="gameboards-wrapper-button-wrapper">
            <GameButtons />
          </div>
          {/* Player one sees current state of gameboardPlayerTwo where player one or the computer plays on */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
            <GameboardPlayerGrid 
              gameboardPlayer={gameboardPlayerOne}
              isPlayerTurn={!isPlayerOneTurn}
              isPlayerOne={false}
            />
            <GameboardShipStats 
              gameboard={gameboardPlayerOne}
            />
          </div>
        </>
      }
    </div>
  );
};
