import { createRandomGameboard } from "../createRandomGameboard";
import { ships } from '../../ships';

test("create a random gameboard with ships placed", () => {
  expect(createRandomGameboard(10, 10, "empty", ships)).toBe(true);
});
