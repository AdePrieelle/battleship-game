import { expect, test } from "@jest/globals";
import { isSunkenShip } from "../isSunkenShip";

test("ship is sunken returns true", () => {
  expect(isSunkenShip(["empty", "s1", "s1", "empty", "empty"], "d1")).toBe(true);
});

test("ship is sunken returns false", () => {
  expect(isSunkenShip(["empty", "s1", "s1", "empty", "empty"], "s1")).toBe(false);
});
