import { sortArrayByOrder } from "../sortArrayByOrder";

test("correctly sorts array in ascending order is order is ascending", () => {
  const mockArray = jest.fn(() => ([4, 8, 1, 9, 0, 15]));
  const mockOrder = jest.fn(() => "ascending");
  expect(sortArrayByOrder(
    mockArray(),
    mockOrder()
  )).toStrictEqual([0, 1, 4, 8, 9, 15]);
});

test("correctly sorts array in ascending order is order is descending", () => {
  const mockArray = jest.fn(() => ([4, 8, 1, 9, 0, 15]));
  const mockOrder = jest.fn(() => "descending");
  expect(sortArrayByOrder(
    mockArray(),
    mockOrder()
  )).toStrictEqual([15, 9, 8, 4, 1, 0]);
});
