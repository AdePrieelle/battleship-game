import { replaceAllSpecificArrayValuesWithNewValue } from "../replaceAllSpecificArrayValuesWithNewValue";

test("replaces all specific array values with the new value correctly", () => {
  const mockArray = jest.fn(() => ["empty", "s1", "s1", "empty"]);
  const mockValue = jest.fn(() => "s1");
  const mockNewValue = jest.fn(() => "empty");
  expect(replaceAllSpecificArrayValuesWithNewValue(
    mockArray(),
    mockValue(),
    mockNewValue()
  )).toStrictEqual(["empty", "empty", "empty", "empty"]);
});
