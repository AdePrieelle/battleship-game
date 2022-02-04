import { getRandomArrayValue } from "../getRandomArrayValue";

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.6);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})

test("get a random value from an array", () => {
  expect(getRandomArrayValue(["first", "second", "third", "fourth"])).toBe("third");
})
