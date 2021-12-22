export const getArrayWithArrayOfIndexValuesReplacedByNewValue = (array, arrayIndexValues, newValue) => {
  let copyArray = [...array];
  for (const coord of arrayIndexValues) {
    copyArray[coord] = newValue;
  }
  return copyArray;
};
