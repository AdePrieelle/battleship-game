import { expect, test } from "@jest/globals";
import { deleteArrayIndexValue } from "../deleteArrayIndexValue";

test("deletes array index value from original array", () => {
  expect(deleteArrayIndexValue([1, 2, 3, 4], 1)).toStrictEqual([1, 3, 4]);
});

test("deletes array with a string as index value from original array", () => {
  expect(deleteArrayIndexValue([1, 2, 3, 4], "2")).toStrictEqual([1, 2, 4]);
});
