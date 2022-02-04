import { getArrayWithUpdatedObjectsIsSunkenPropertyValue } from "../getArrayWithUpdatedObjectsIsSunkenPropertyValue";

test("correctly returns an array with correct updated objects isSunken property values for each ship", () => {
  const mockArray = jest.fn(() => ([
    {
      name: "d1",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "d2",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "d3",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "d4",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "s1",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "s2",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "s3",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "b1",
      shipLength: 3,
      isSunken: false
    },
    {
      name: "b2",
      shipLength: 3,
      isSunken: false
    },
    {
      name: "c1",
      shipLength: 4,
      isSunken: false
    },
  ]));
  const mockIsSunkenKeyValue = jest.fn(() => "isSunken");
  const mockShipNameValue = jest.fn(() => "name");
  const mockGameboard = jest.fn(() => ([
    "c1", "c1", "c1", "c1", "empty", "s3", "s3", "empty", "empty", "empty",
    "empty", "empty", "empty", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty", 
    "b1", "b1", "b1", "freemiss", "hit", "freemiss", "empty", "empty", "empty", "empty",
    "freemiss", "freemiss", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty", 
    "hit", "hit", "hit", "freemiss", "d2", "empty", "empty", "empty", "empty", "empty",
    "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty", "empty", "empty", 
    "s1", "s1", "empty", "d3", "empty", "empty", "empty", "empty", "empty", "empty",
    "freemiss", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty", "empty", 
    "hit", "hit", "freemiss", "hit", "freemiss", "empty", "empty", "empty", "empty", "empty",
    "freemiss", "freemiss", "freemiss", "freemiss", "freemiss", "empty", "empty", "empty", "empty", "empty", 
  ]));
  const mockIsSunkenShip = jest
    .fn()
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)

  expect(getArrayWithUpdatedObjectsIsSunkenPropertyValue(
    mockArray(), 
    mockIsSunkenKeyValue(), 
    mockShipNameValue(), 
    mockGameboard(), 
    mockIsSunkenShip
    )).toStrictEqual([
    {
      name: "d1",
      shipLength: 1,
      isSunken: true
    },
    {
      name: "d2",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "d3",
      shipLength: 1,
      isSunken: false
    },
    {
      name: "d4",
      shipLength: 1,
      isSunken: true
    },
    {
      name: "s1",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "s2",
      shipLength: 2,
      isSunken: true
    },
    {
      name: "s3",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "b1",
      shipLength: 3,
      isSunken: false
    },
    {
      name: "b2",
      shipLength: 3,
      isSunken: true
    },
    {
      name: "c1",
      shipLength: 4,
      isSunken: false
    },
  ])
});
