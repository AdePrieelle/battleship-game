import { generateRandomShipPosition } from "../generateRandomShipPosition";

test("generate a random ship position object with properties startIndex, direction and shipCoords", () => {
  const mockGetRandomIndexFromArray = jest.fn(() => 14);
  const mockGetRandomArrayValue = jest.fn(() => "horizontal");
  const mockCalculateShipCoords = jest.fn(() => [14, 15, 16, 17]);
  expect(generateRandomShipPosition(
    [
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty", "empty",
    ], 
    { name: "c1", shipLength: 4}, 
    "horizontal", 
    "vertical", 
    mockGetRandomIndexFromArray, 
    mockGetRandomArrayValue, 
    mockCalculateShipCoords
  )).toStrictEqual(
    {
      startIndex: 14,
      direction: "horizontal",
      shipCoords: [14, 15, 16, 17]
    }
  )
});
