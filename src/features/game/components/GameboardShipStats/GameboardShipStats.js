import { useSelector } from 'react-redux';
import { addKeyValuePairToAllObjectsInArray } from '../../../../common/utils/addKeyValuePairToAllObjectsInArray/addKeyValuePairToAllObjectsInArray';
import { getArrayWithUniqueObjectKeyValuesFromArrayWithObjects } from '../../../../common/utils/getArrayWithUniqueObjectKeyValuesFromArrayWithObjects/getArrayWithUniqueObjectKeyValuesFromArrayWithObjects';
import { getArrayWithUpdatedObjectsIsSunkenPropertyValue } from '../../../../common/utils/getArrayWithUpdatedObjectsIsSunkenPropertyValue/getArrayWithUpdatedObjectsIsSunkenPropertyValue';
import { isSunkenShip } from '../../../../common/utils/isSunkenShip/isSunkenShip';
import { sortArrayByOrder } from '../../../../common/utils/sortArrayByOrder/sortArrayByOrder';
import { sortArrayOfObjectsBasedOnTwoKeyValuesByOrder } from '../../../../common/utils/sortArrayOfObjectsBasedOnTwoKeyValuesByOrder/sortArrayOfObjectsBasedOnTwoKeyValuesByOrder';
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

  const arrayWithUniqueShipLengthValues = getArrayWithUniqueObjectKeyValuesFromArrayWithObjects(ships, shipLengthPropertyText);
  const sortedArrayWithUniqueShipLengthValuesDescendingOrder = sortArrayByOrder(arrayWithUniqueShipLengthValues, "descending");

  const arrayOfShipObjectsWithIsSunkenPropertyFalse = addKeyValuePairToAllObjectsInArray(ships, shipIsSunkenPropertyText, false);
  const arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue = getArrayWithUpdatedObjectsIsSunkenPropertyValue(arrayOfShipObjectsWithIsSunkenPropertyFalse, shipIsSunkenPropertyText, shipNamePropertyText, gameboard, isSunkenShip);
  const sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken = sortArrayOfObjectsBasedOnTwoKeyValuesByOrder(arrayOfShipObjectsWithUpdatedIsSunkenPropertyValue, shipLengthPropertyText, shipIsSunkenPropertyText, "descending", "descending");

  return (
    <div className="gameboard-ship-stats">
      {
        sortedArrayWithUniqueShipLengthValuesDescendingOrder.map((shipLengthNumber, id) => (
          <div key={id} className="gameboard-ship-stats-shiplength-row">
            {
              sortedArrayOfShipObjectsBasedOnPropertiesShipLengthAndIsSunken.map(function(ship, id) {
                if (ship[shipLengthPropertyText] === shipLengthNumber) {
                  return (
                    <div key={id} className="gameboard-ship-stats-ship">
                      {[...Array(ship[shipLengthPropertyText])].map((shipLengthPropertyText, id) => (
                        <div 
                          key={id} 
                          className={`gameboard-ship-stats-ship-cell ${isSunkenShip(gameboard, ship[shipNamePropertyText]) ? "gameboard-ship-stats-ship-sunken" : "gameboard-ship-stats-ship-hidden"}`}
                        >
                        </div>
                      ))}
                    </div>
                  );
                };
                return null;
              })
            }
          </div>
        ))
      }
    </div>
  );
};
