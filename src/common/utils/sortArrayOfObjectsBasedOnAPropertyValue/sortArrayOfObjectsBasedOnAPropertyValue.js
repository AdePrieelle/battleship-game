export const sortArrayOfObjectsBasedOnAPropertyValue = (array, propertyToSort) => {
  const sortedArrayOfObjectsBasedOnAPropertyValue = array.sort((one, other) => {
    return (other[propertyToSort] - one[propertyToSort]);
  });
  return sortedArrayOfObjectsBasedOnAPropertyValue;
}
