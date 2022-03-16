import { GameboardPlayerGrid } from '../GameboardPlayerGrid/GameboardPlayerGrid';
import { GameboardShipStats } from '../GameboardShipStats/GameboardShipStats';
import { GameButtons } from '../GameButtons/GameButtons';
import './GameboardsWrapper.scss';
import { useSelector } from 'react-redux';
import { 
  selectIsPlayerOneTurn, 
  selectIsPlayerTwoComputer, 
  selectGameboardPlayerOne, 
  selectGameboardPlayerTwo
} from '../../gameSlice';

export const GameboardsWrapper = () => {
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);

  return (
    <div className="gameboards-wrapper">
      {
          (!isPlayerOneTurn && !isPlayerTwoComputer)
        ? 
          <>
            {/* Player two plays on gameboardPlayerOne */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
              <GameboardPlayerGrid 
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
