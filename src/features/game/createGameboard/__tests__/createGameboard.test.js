import { createGameboard } from "../createGameboard";

test("create an empty one dimensional array", () => {
  expect(createGameboard(2, 2, "")).toStrictEqual(["", "", "", ""]);
})

test("create an one dimensional array with a number as defaultvalue", () => {
  expect(createGameboard(2, 2, 0)).toStrictEqual([0, 0, 0, 0]);
})

test("create an one dimensional array with a string as defaultvalue", () => {
  expect(createGameboard(2, 2, "empty")).toStrictEqual(["empty", "empty", "empty", "empty"]);
})
