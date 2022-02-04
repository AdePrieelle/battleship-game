import { expect } from "@jest/globals";
import { isValidShipPosition } from "../isValidShipPosition";

test("returns true is the ship is in a valid position to be placed on the gameboard", () => {
  expect(isValidShipPosition(true, true, true)).toBe(true);
});

test("isValidShipPosition returns false if the startIndex isn't an empty gameboard cell on the gameboard", () => {
  expect(isValidShipPosition(false, true, true)).toBe(false);
});

test("isValidShipPosition returns false if the ship is out of bounds", () => {
  expect(isValidShipPosition(true, false, true)).toBe(false);
});

test("isValidShipPosition returns false if the ship is surrounded by other ships", () => {
  expect(isValidShipPosition(true, true, false)).toBe(false);
});
