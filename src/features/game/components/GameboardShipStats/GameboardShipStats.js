import { useSelector } from 'react-redux';
import { addKeyValuePairToAllObjectsInArray } from '../../../../common/utils/addKeyValuePairToAllObjectsInArray/addKeyValuePairToAllObjectsInArray';
import { getArrayWithUpdatedObjectsIsSunkenPropertyValue } from '../../../../common/utils/getArrayWithUpdatedObjectsIsSunkenPropertyValue/getArrayWithUpdatedObjectsIsSunkenPropertyValue';
import { isSunkenShip } from '../../../../common/utils/isSunkenShip/isSunkenShip';
import { sortArrayOfObjectsBasedOnTwoPropertyValues } from '../../../../common/utils/sortArrayOfObjectsBasedOnTwoPropertyValues/sortArrayOfObjectsBasedOnTwoPropertyValues';
import {
  selectShipIsSunkenPropertyText,
  selectShipLengthPropertyText,
  selectShipNamePropertyText,
  selectShips
} from '../../gameSlice';
import './GameboardShipStats.scss';

export const GameboardShipStats = ({ gameboard }) => {
  const shipIsSunkenPropertyText = useSelector(selectShipIsSunkenPropertyText);
  const shipLengthPropertyText = useSelector(selectShipLengthPropertyText);
  const shipNamePropertyText = useSelector(selectShipNamePropertyText);
  const ships = useSelector(selectShips);

  const arrayOfShipObjectsWithIsSunkenPropertyFalse = addKeyValuePairToAllObjectsInArray(ships, shipIsSunkenPropertyText, false);
  const arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue = getArrayWithUpdatedObjectsIsSunkenPropertyValue(arrayOfShipObjectsWithIsSunkenPropertyFalse, shipIsSunkenPropertyText, shipNamePropertyText, gameboard, isSunkenShip);
  const sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken = sortArrayOfObjectsBasedOnTwoPropertyValues(arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue, shipLengthPropertyText, shipIsSunkenPropertyText);

  return (
    <div className="gameboard-ship-stats">
      {
        sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken.map((ship, id) => (
          <div key={id} className="gameboard-ship-stats-ship">
            {[...Array(ship[shipLengthPropertyText])].map((shipLengthPropertyText, id) => (
              <div 
                key={id} 
                className={`gameboard-ship-stats-ship-cell ${isSunkenShip(gameboard, ship[shipNamePropertyText]) ? "gameboard-ship-stats-ship-sunken" : "gameboard-ship-stats-ship-hidden"}`}
              >
              </div>
            ))}
          </div>
        ))
      }
    </div>
  );
};
