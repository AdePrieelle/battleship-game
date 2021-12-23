export const getRowNumberOfIndexTwoDimensionalArray = (id, getFirstDigitOfNumber) => {
  let rowNumberOfIndexTwoDimensionalArray;
  if (id < 10) {
    rowNumberOfIndexTwoDimensionalArray = 0;
  } else {
    rowNumberOfIndexTwoDimensionalArray = getFirstDigitOfNumber(id)
  };
  return rowNumberOfIndexTwoDimensionalArray;
};
