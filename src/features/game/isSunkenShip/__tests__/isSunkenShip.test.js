import { expect, test } from "@jest/globals";
import { isSunkenShip } from "../isSunkenShip";

test("ship is sunken returns true", () => {
  expect(isSunkenShip(
    [0, 1, 2, 3, 4], 
    {
      b1: [67, 68],
      b2: [1, 2],
    }, "b2"
  )).toBe(true);
})

test("ship is sunken returns false", () => {
  expect(isSunkenShip(
    [0, 1, 2, 3, 4], 
    {
      b1: [67, 68],
      b2: [4, 5],
    }, "b2"
  )).toBe(false);
})
