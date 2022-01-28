import { capitalizeString } from "../capitalizeString";

test("Capitalize string works correctly when it's a single word and the word starts with a letter", () => {
  const mockString = jest.fn(() => "hello");
  expect(capitalizeString(
    mockString()
  )).toBe("Hello");
});

test("Capitalize string works correctly when it's a single word and the word starts with a number", () => {
  const mockString = jest.fn(() => "1hello");
  expect(capitalizeString(
    mockString()
  )).toBe("1hello");
});

test("Capitalize string works correctly when it's two words and the first word starts with a letter", () => {
  const mockString = jest.fn(() => "hello world");
  expect(capitalizeString(
    mockString()
  )).toBe("Hello world");
});
