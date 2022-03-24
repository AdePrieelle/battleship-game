export const sortArrayOfObjectsBasedOnAPropertyValue = (array, propertyToSort) => {
  const copyArray = [...array];
  const sortedArrayOfObjectsBasedOnAPropertyValue = copyArray.sort((one, other) => {
    return (other[propertyToSort] - one[propertyToSort]);
  });
  return sortedArrayOfObjectsBasedOnAPropertyValue;
};
