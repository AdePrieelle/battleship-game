import { getAllIndexesOfAnArrayValue } from "../getAllIndexesOfAnArrayValue";

test("get all the indexes in an array of a value works correctly", () => {
  expect(getAllIndexesOfAnArrayValue(["empty", "s1", "s1", "empty"], "s1")).toStrictEqual([1, 2]);
});

test("returns an empty array if the value isn't in the array works correctly", () => {
  expect(getAllIndexesOfAnArrayValue(["empty", "s1", "s1", "empty"], "d1")).toStrictEqual([]);
});
