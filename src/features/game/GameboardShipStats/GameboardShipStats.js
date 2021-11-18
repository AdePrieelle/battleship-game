import './GameboardShipStats.scss';
import { sortArrayOfObjectsBasedOnAPropertyValue } from '../sortArrayOfObjectsBasedOnAPropertyValue/sortArrayOfObjectsBasedOnAPropertyValue';
import { isSunkenShip } from '../isSunkenShip/isSunkenShip';

export const GameboardShipStats = ({
  gameboard,
  ships
}) => {
  const sortedShipArrayDescendingShipLength = sortArrayOfObjectsBasedOnAPropertyValue(ships, "shipLength");

  return (
    <div className="gameboard-ship-stats">
      {
        sortedShipArrayDescendingShipLength.map((ship, id) => (
          <div key={id} className="gameboard-ship-stats-ship">
            {[...Array(ship.shipLength)].map((shipLength, id) => (
              <div 
                key={id} 
                className={`gameboard-ship-stats-ship-cell ${isSunkenShip(gameboard, ship.name) ? "gameboard-ship-stats-ship-sunken" : "gameboard-ship-stats-ship-hidden"}`}
              >
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
};
