import { getArrayWithUniqueObjectKeyValuesFromArrayWithObjects } from "../getArrayWithUniqueObjectKeyValuesFromArrayWithObjects";

test("correctly returns array with unique object key values from an array of objects with properties", () => {
  const mockShips = jest.fn(() => ([
    {
      name: "d1",
      shipLength: 1,
    },
    {
      name: "d2",
      shipLength: 1,
    },
    {
      name: "d3",
      shipLength: 1,
    },
    {
      name: "d4",
      shipLength: 1,
    },
    {
      name: "s1",
      shipLength: 2,
    },
    {
      name: "s2",
      shipLength: 2,
    },
    {
      name: "s3",
      shipLength: 2,
    },
    {
      name: "b1",
      shipLength: 3,
    },
    {
      name: "b2",
      shipLength: 3,
    },
    {
      name: "c1",
      shipLength: 4,
    },
  ]));
  const mockKey = jest.fn(() => "shipLength");
  
  expect(getArrayWithUniqueObjectKeyValuesFromArrayWithObjects(
    mockShips(),
    mockKey()
  )).toStrictEqual([1, 2, 3, 4]);
});
