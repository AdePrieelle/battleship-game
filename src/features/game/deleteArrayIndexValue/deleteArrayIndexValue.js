export const deleteArrayIndexValue = (array, index) => {
  let copyArray = [...array];
  copyArray.splice(index, 1);
  return copyArray;
}
