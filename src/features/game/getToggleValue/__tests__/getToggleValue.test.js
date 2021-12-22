import { getToggleValue } from "../getToggleValue";

test("returns value2 if the currentValue is value1 correctly", () => {
  const mockCurrentValue = jest.fn(() => "horizontal");
  const mockValue1 = jest.fn(() => "horizontal");
  const mockValue2 = jest.fn(() => "vertical");
  expect(getToggleValue(
    mockCurrentValue(),
    mockValue1(),
    mockValue2()
  )).toBe("vertical");
});

test("returns value1 if the currentValue is value2 correctly", () => {
  const mockCurrentValue = jest.fn(() => "vertical");
  const mockValue1 = jest.fn(() => "horizontal");
  const mockValue2 = jest.fn(() => "vertical");
  expect(getToggleValue(
    mockCurrentValue(),
    mockValue1(),
    mockValue2()
  )).toBe("horizontal");
});
