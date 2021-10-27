import { createRandomGameboard } from "../createRandomGameboard";

test("create a random gameboard with ships placed", () => {
  expect(createRandomGameboard(10, 10, "empty")).toBe(true);
})
