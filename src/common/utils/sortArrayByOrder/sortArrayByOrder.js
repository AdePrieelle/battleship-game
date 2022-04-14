export const sortArrayByOrder = (array, order) => {
  let copyArray = [...array];
  let sortedArrayByOrder;
  if (order === "ascending") {
    sortedArrayByOrder = copyArray.sort((a, b) => (a - b));
  } else if (order === "descending") {
    sortedArrayByOrder = copyArray.sort((a, b) => (b - a));
  }
  return sortedArrayByOrder;
};
