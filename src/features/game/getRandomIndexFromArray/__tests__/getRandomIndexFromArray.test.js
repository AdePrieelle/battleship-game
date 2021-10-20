import { getRandomIndexFromArray } from "../getRandomIndexFromArray";

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
})

test("get a random index from an array based on its length", () => {
  expect(getRandomIndexFromArray(["empty", "hit", "s1", "miss"])).toBe(2);
})
