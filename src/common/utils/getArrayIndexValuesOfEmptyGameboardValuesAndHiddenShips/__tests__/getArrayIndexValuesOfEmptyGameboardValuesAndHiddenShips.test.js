import { getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips } from "../getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips";

test("return an array of index values from where the gameboard[index] value is empty or a hidden ship", () => {
  expect(getArrayIndexValuesOfEmptyGameboardValuesAndHiddenShips([
    "empty", "miss", "empty", "b1", "b1", "freemiss", "hit"
  ], "hit", "miss", "freemiss")).toStrictEqual([0, 2, 3, 4]);
})
