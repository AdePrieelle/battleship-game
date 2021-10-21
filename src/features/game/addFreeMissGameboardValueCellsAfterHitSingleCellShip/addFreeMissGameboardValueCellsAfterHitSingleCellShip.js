export const addFreeMissGameboardValueCellsAfterHitSingleCellShip = (array, index) => {

  // USE FREEMISS later and add style

  let copyArray = [...array];
  // one cell ships
  // if (copyArray[index] === "hit" && /* no surrounding ship or hit cells */ )
  if ((index >= 0 && index <= 9)) {
    copyArray[index + 10] = "freemiss";
    if (index > 0) {
      copyArray[index + 9] = "freemiss";
      copyArray[index - 1] = "freemiss";
    }
    if (index < 9) {
      copyArray[index + 1] = "freemiss";
      copyArray[index + 11] = "freemiss";
    }
  }
  if (index >= 90 && index <= 99) {
    copyArray[index - 10] = "freemiss";
    if (index > 90) {
      copyArray[index - 1] = "freemiss";
      copyArray[index - 11] = "freemiss";
    }
    if (index < 99) {
      copyArray[index + 1] = "freemiss";
      copyArray[index - 9] = "freemiss";
    }
  }
  if (([0, 10, 20, 30, 40, 50, 60, 70, 80, 90].indexOf(index) > -1)) {
    copyArray[index + 1] = "freemiss";
    if (index > 0) {
      // copyArray[index + 1] = "freemiss";
      copyArray[index - 9] = "freemiss";
      copyArray[index - 10] = "freemiss";
    }
    if (index < 90) {
      // copyArray[index - 1] = "freemiss";
      copyArray[index + 10] = "freemiss";
      copyArray[index + 11] = "freemiss";
    }
  }
  if (([9, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
    copyArray[index - 1] = "freemiss";
    if (index > 9) {
      copyArray[index - 10] ="freemiss";
      copyArray[index - 11] ="freemiss";
    }
    if (index < 99) {
      copyArray[index + 9] ="freemiss";
      copyArray[index + 10] ="freemiss";
    }
  }
  if(!([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 30, 40, 50, 60, 70, 80, 90, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 19, 29, 39, 49, 59, 69, 79, 89, 99].indexOf(index) > -1)) {
    copyArray[index + 1] = "freemiss";
    copyArray[index - 1] = "freemiss";
    copyArray[index + 10] = "freemiss";
    copyArray[index - 10] = "freemiss";
    copyArray[index - 11] = "freemiss";
    copyArray[index - 9] = "freemiss";
    copyArray[index + 9] = "freemiss";
    copyArray[index + 11] = "freemiss";
  }
  console.log(copyArray);

  return (
    copyArray
  )
}
