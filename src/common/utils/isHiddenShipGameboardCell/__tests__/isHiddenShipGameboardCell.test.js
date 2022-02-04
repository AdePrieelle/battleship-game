import { isHiddenShipGameboardCell } from "../isHiddenShipGameboardCell";

test("return true is a gameboard cell is a hidden ship in the gameboard", () => {
  expect(isHiddenShipGameboardCell(["empty", "hit", "s1", "miss"], 2, "empty", "hit", "miss")).toBe(true);
})

test("return false if a gameboard cell is an 'empty' cell in the gameboard", () => {
  expect(isHiddenShipGameboardCell(["empty", "hit", "s1", "miss"], 0, "empty", "hit", "miss")).toBe(false);
})

test("return false if a gameboard cell is a 'hit' cell in the gameboard", () => {
  expect(isHiddenShipGameboardCell(["empty", "hit", "s1", "miss"], 1, "empty", "hit", "miss")).toBe(false);
})

test("return false if a gameboard cell is a 'miss' cell in the gameboard", () => {
  expect(isHiddenShipGameboardCell(["empty", "hit", "s1", "miss"], 3, "empty", "hit", "miss")).toBe(false);
})
