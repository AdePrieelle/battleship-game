export const sortArrayOfObjectsBasedOnTwoPropertyValues = (array, propertyOneToSort, propertyTwoToSort) => {
  let copyArray = [...array];
  const sortedArrayOfObjectsBasedOnAPropertyValue = copyArray.sort((one, other) => {
    if (other[propertyOneToSort] - one[propertyOneToSort] > 0) {
      return 1;
    }
    if (other[propertyOneToSort] - one[propertyOneToSort] < 0) {
      return -1;
    }
    else if (other[propertyOneToSort] === one[propertyOneToSort]) {
      return (other[propertyTwoToSort] - one[propertyTwoToSort]);
    }
    else return 0;
  });
  return sortedArrayOfObjectsBasedOnAPropertyValue;
};
