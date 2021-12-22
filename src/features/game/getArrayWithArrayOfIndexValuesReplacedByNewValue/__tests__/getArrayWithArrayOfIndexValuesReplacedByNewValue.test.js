import { getArrayWithArrayOfIndexValuesReplacedByNewValue } from "../getArrayWithArrayOfIndexValuesReplacedByNewValue";

test("return array where the array of index values are replaced by a new value works correctly", () => {
  const mockArray = jest.fn(() => (["empty", "empty", "empty", "empty"]));
  const mockArrayIndexValues = jest.fn(() => ([2, 3]));
  const mockNewValue = jest.fn(() => "s1");
  
  expect(getArrayWithArrayOfIndexValuesReplacedByNewValue(
    mockArray(),
    mockArrayIndexValues(),
    mockNewValue()
  )).toStrictEqual(["empty", "empty", "s1", "s1"]);
});
