import { sortArrayOfObjectsBasedOnTwoPropertyValues } from "../sortArrayOfObjectsBasedOnTwoPropertyValues";

test("correctly sorts an array of objects based on two property values", () => {
  const mockArray = jest.fn(() => ([
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
  ]));
  const mockPropertyOneToSort = jest.fn(() => "shipLength");
  const mockPropertyTwoToSort = jest.fn(() => "isSunken");

  expect(sortArrayOfObjectsBasedOnTwoPropertyValues(
    mockArray(),
    mockPropertyOneToSort(), 
    mockPropertyTwoToSort()
  )).toStrictEqual([
    {
      name: "c1",
      shipLength: 4,
      isSunken: false
    },
    {
      name: "b2",
      shipLength: 3,
      isSunken: true
    },
    {
      name: "b1",
      shipLength: 3,
      isSunken: false
    },
    {
      name: "s2",
      shipLength: 2,
      isSunken: true
    },
    {
      name: "s1",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "s3",
      shipLength: 2,
      isSunken: false
    },
    {
      name: "d1",
      shipLength: 1,
      isSunken: true
    },
    {
      name: "d4",
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
  ]);
});
