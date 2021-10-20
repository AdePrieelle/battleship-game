import { expect } from "@jest/globals";
import { isEmptyGameboardCell } from "../isEmptyGameboardCell";

test("determine if the array index value is equal to the emptyGameboardValue", () => {
  expect(isEmptyGameboardCell(["hit", "miss", "empty"], 2, "empty")).toBe(true);
})

test("determine if the array index value is not equal to the emptyGameboardValue", () => {
  expect(isEmptyGameboardCell(["hit", "miss", "empty"], 1, "empty")).toBe(false);
})
