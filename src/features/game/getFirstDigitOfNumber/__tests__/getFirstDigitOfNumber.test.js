import { getFirstDigitOfNumber } from "../getFirstDigitOfNumber";

test("returns first digit of a multi digit number correctly", () => {
  expect(getFirstDigitOfNumber(34)).toBe(3);
});

test("returns first digit of a single digit number correctly", () => {
  expect(getFirstDigitOfNumber(4)).toBe(4);
});

test("returns first digit of a single digit number that is 0 correctly", () => {
  expect(getFirstDigitOfNumber(0)).toBe(0);
});
