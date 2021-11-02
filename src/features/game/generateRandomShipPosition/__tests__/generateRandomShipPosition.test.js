import { generateRandomShipPosition } from "../generateRandomShipPosition";

test("generate a random ship position object with properties startIndex, direction and shipCoords", () => {
  const mockRandomGameboard = jest.fn(() => ([
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
  ]));
  const mockShip = jest.fn(() => ({ name: "c1", shipLength: 4}));
  const mockHorizontalDirectionValue = jest.fn(() => "horizontal");
  const mockVerticalDirectionValue = jest.fn(() => "vertical");
  const mockGetRandomIndexFromArray = jest.fn(() => 14);
  const mockGetRandomArrayValue = jest.fn(() => "horizontal");
  const mockCalculateShipCoords = jest.fn(() => [14, 15, 16, 17]);
  expect(generateRandomShipPosition(
    mockRandomGameboard, 
    mockShip, 
    mockHorizontalDirectionValue, 
    mockVerticalDirectionValue, 
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
