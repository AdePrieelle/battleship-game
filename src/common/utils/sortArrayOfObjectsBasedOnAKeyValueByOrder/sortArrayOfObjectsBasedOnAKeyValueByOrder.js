export const sortArrayOfObjectsBasedOnAKeyValueByOrder = (array, key, order) => {
  const copyArray = [...array];
  let sortedArrayOfObjectsBasedOnAKeyValueByOrder;
  if (order === "ascending") {
    sortedArrayOfObjectsBasedOnAKeyValueByOrder = copyArray.sort((one, other) => {
      return (one[key] - other[key]);
    });
  } else if (order === "descending") {
    sortedArrayOfObjectsBasedOnAKeyValueByOrder = copyArray.sort((one, other) => {
      return (other[key] - one[key]);
    });
  };

  return sortedArrayOfObjectsBasedOnAKeyValueByOrder;
};
