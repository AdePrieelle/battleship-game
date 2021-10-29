import { expect } from "@jest/globals";
import { increaseArrayValuesWithNumber } from "../increaseArrayValuesWithNumber";

test("increase each array value with number", () => {
  expect(increaseArrayValuesWithNumber([0, 1, 2, 3], 64)).toStrictEqual([64, 65, 66, 67]);
})
