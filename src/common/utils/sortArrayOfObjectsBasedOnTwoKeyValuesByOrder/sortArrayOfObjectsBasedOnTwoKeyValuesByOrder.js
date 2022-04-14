export const sortArrayOfObjectsBasedOnTwoKeyValuesByOrder = (array, keyOne, keyTwo, keyOneOrder, keyTwoOrder) => {
  let copyArray = [...array];
  let sortedArrayOfObjectsBasedOnTwoKeyValuesByOrder;
  if (keyOneOrder === "ascending") {
    sortedArrayOfObjectsBasedOnTwoKeyValuesByOrder = copyArray.sort((one, other) => {
      if (one[keyOne] - other[keyOne] > 0) {
        return 1;
      } else if (one[keyOne] - other[keyOne] < 0) {
        return -1;
      } else if (one[keyOne] === other[keyOne]) {
        if (keyTwoOrder === "ascending") {
          return (one[keyTwo] - other[keyTwo]);
        } else if (keyTwoOrder === "descending") {
          return (other[keyTwo] - one[keyTwo]);
        } 
      };
      return 0;
    });
  } else if (keyOneOrder === "descending") {
    sortedArrayOfObjectsBasedOnTwoKeyValuesByOrder = copyArray.sort((one, other) => {
      if (other[keyOne] - one[keyOne] > 0) {
        return 1;
      }
      if (other[keyOne] - one[keyOne] < 0) {
        return -1;
      }
      else if (one[keyOne] === other[keyOne]) {
        if (keyTwoOrder === "ascending") {
          return (one[keyTwo] - other[keyTwo]);
        } else if (keyTwoOrder === "descending") {
          return (other[keyTwo] - one[keyTwo]);
        } 
      }
      return 0;
    });
  }
  
  return sortedArrayOfObjectsBasedOnTwoKeyValuesByOrder;
};

// export const sortArrayOfObjectsBasedOnTwoPropertyValues = (array, propertyOneToSort, propertyTwoToSort) => {
//   let copyArray = [...array];
//   const sortedArrayOfObjectsBasedOnAPropertyValue = copyArray.sort((one, other) => {
//     if (other[propertyOneToSort] - one[propertyOneToSort] > 0) {
//       return 1;
//     }
//     if (other[propertyOneToSort] - one[propertyOneToSort] < 0) {
//       return -1;
//     }
//     else if (other[propertyOneToSort] === one[propertyOneToSort]) {
//       return (other[propertyTwoToSort] - one[propertyTwoToSort]);
//     }
//     else return 0;
//   });
//   return sortedArrayOfObjectsBasedOnAPropertyValue;
// };
