export const getGeneratedRandomGameboardPlayerInitialStates = (
  createRandomGameboard, 
  amountOfRows, 
  amountOfColumns,
  emptyGameboardValue,
  generateRandomValidShipPosition,
  ships,
  horizontalDirectionValue,
  verticalDirectionValue,
  shipNamePropertyText,
  shipLengthPropertyText
) => {
  const generatedRandomGameboardPlayerOneInitialState = createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard);
  const generatedRandomGameboardPlayerTwoInitialState = createRandomGameboard(amountOfRows, amountOfColumns, emptyGameboardValue, generateRandomValidShipPosition, ships, horizontalDirectionValue, verticalDirectionValue, shipNamePropertyText, shipLengthPropertyText, createRandomGameboard);
  return ({
    generatedRandomGameboardPlayerOneInitialState,
    generatedRandomGameboardPlayerTwoInitialState
  });
};
