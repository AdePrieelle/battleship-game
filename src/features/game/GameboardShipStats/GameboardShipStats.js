import { isSunkenShip } from '../isSunkenShip/isSunkenShip';
import { addKeyValuePairToAllObjectsInArray } from '../addKeyValuePairToAllObjectsInArray/addKeyValuePairToAllObjectsInArray';
import { getArrayWithUpdatedObjectsIsSunkenPropertyValue } from '../getArrayWithUpdatedObjectsIsSunkenPropertyValue/getArrayWithUpdatedObjectsIsSunkenPropertyValue';
import { sortArrayOfObjectsBasedOnTwoPropertyValues } from '../sortArrayOfObjectsBasedOnTwoPropertyValues/sortArrayOfObjectsBasedOnTwoPropertyValues';
import './GameboardShipStats.scss';

export const GameboardShipStats = ({
  gameboard,
  ships
}) => {
  const shipLengthValue = "shipLength";
  const isSunkenKeyValue = "isSunken";
  const shipNameValue = "name";
  
  const arrayOfShipObjectsWithIsSunkenPropertyFalse = addKeyValuePairToAllObjectsInArray(ships, isSunkenKeyValue, false);
  const arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue = getArrayWithUpdatedObjectsIsSunkenPropertyValue(arrayOfShipObjectsWithIsSunkenPropertyFalse, isSunkenKeyValue, shipNameValue, gameboard, isSunkenShip);
  const sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken = sortArrayOfObjectsBasedOnTwoPropertyValues(arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue, shipLengthValue, isSunkenKeyValue);

  return (
    <div className="gameboard-ship-stats">
      {
        sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken.map((ship, id) => (
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
