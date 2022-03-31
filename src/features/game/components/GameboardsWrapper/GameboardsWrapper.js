import { useSelector } from 'react-redux';
import {
  selectGameboardPlayerOne,
  selectGameboardPlayerTwo, selectIsPlayerOneTurn,
  selectIsPlayerTwoComputer,
} from '../../gameSlice';
import { GameboardPlayerGrid } from '../GameboardPlayerGrid/GameboardPlayerGrid';
import { GameboardPlayerName } from '../GameboardPlayerName/GameboardPlayerName';
import { GameboardShipStats } from '../GameboardShipStats/GameboardShipStats';
import { GameButtons } from '../GameButtons/GameButtons';
import './GameboardsWrapper.scss';

export const GameboardsWrapper = () => {
  const gameboardPlayerOne = useSelector(selectGameboardPlayerOne);
  const gameboardPlayerTwo = useSelector(selectGameboardPlayerTwo);
  const isPlayerOneTurn = useSelector(selectIsPlayerOneTurn);
  const isPlayerTwoComputer = useSelector(selectIsPlayerTwoComputer);
  return (
    <div className="gameboards-wrapper">
      {
          (!isPlayerOneTurn && !isPlayerTwoComputer)
        ? 
          <>
            {/* Player two plays on gameboardPlayerOne */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
              <GameboardPlayerName isPlayerOne={false} />
              <GameboardPlayerGrid isPlayerOne={false} />
              <GameboardShipStats gameboard={gameboardPlayerOne} />
            </div>
            <div className="gameboards-wrapper-button-wrapper">
              <GameButtons />
            </div>
            {/* Player two sees current state of gameboardPlayerTwo where player one plays on */}
            <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
              <GameboardPlayerName isPlayerOne={true} />
              <GameboardPlayerGrid isPlayerOne={true} />
              <GameboardShipStats gameboard={gameboardPlayerTwo} />
            </div>
          </>
      :
        <>
          {/* Player one plays on gameboardPlayerTwo */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-1">
            <GameboardPlayerName isPlayerOne={true} />
            <GameboardPlayerGrid isPlayerOne={true} />
            <GameboardShipStats gameboard={gameboardPlayerTwo} />
          </div>
          <div className="gameboards-wrapper-button-wrapper">
            <GameButtons />
          </div>
          {/* Player one sees current state of gameboardPlayerTwo where player two or the computer plays on */}
          <div className="gameboard-player-grid-gameboard-ship-stats-wrapper gameboard-player-grid-gameboard-ship-stats-wrapper-2">
            <GameboardPlayerName isPlayerOne={false} />
            <GameboardPlayerGrid isPlayerOne={false} />
            <GameboardShipStats gameboard={gameboardPlayerOne} />
          </div>
        </>
      }
    </div>
  );
};
