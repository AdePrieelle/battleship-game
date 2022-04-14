export const getArrayWithUniqueObjectKeyValuesFromArrayWithObjects = (ships, key) => {
  const copyShips = [...ships];
  const arrayWithObjectKeyValues = copyShips.map(ship => ship[key]);
  const arrayWithUniqueObjectKeyValues = [...new Set(arrayWithObjectKeyValues)];
  return arrayWithUniqueObjectKeyValues;
};
