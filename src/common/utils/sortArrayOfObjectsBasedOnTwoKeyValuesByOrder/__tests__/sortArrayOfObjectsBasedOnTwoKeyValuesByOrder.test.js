import { sortArrayOfObjectsBasedOnTwoKeyValuesByOrder } from "../sortArrayOfObjectsBasedOnTwoKeyValuesByOrder";

test("correctly sorts an array of objects based on two key values with keyOneOrder ascending and keyTwoOrder ascending", () => {
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
  const mockKeyOne = jest.fn(() => "shipLength");
  const mockKeyTwo = jest.fn(() => "isSunken");
  const mockKeyOneOrder = jest.fn(() => "ascending");
  const mockKeyTwoOrder = jest.fn(() => "ascending");

  expect(sortArrayOfObjectsBasedOnTwoKeyValuesByOrder(
    mockArray(),
    mockKeyOne(), 
    mockKeyTwo(),
    mockKeyOneOrder(),
    mockKeyTwoOrder()
  )).toStrictEqual([
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
      name: "s2",
      shipLength: 2,
      isSunken: true
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
  ]);
});

test("correctly sorts an array of objects based on two key values with keyOneOrder ascending and keyTwoOrder descending", () => {
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
  const mockKeyOne = jest.fn(() => "shipLength");
  const mockKeyTwo = jest.fn(() => "isSunken");
  const mockKeyOneOrder = jest.fn(() => "ascending");
  const mockKeyTwoOrder = jest.fn(() => "descending");

  expect(sortArrayOfObjectsBasedOnTwoKeyValuesByOrder(
    mockArray(),
    mockKeyOne(), 
    mockKeyTwo(),
    mockKeyOneOrder(),
    mockKeyTwoOrder()
  )).toStrictEqual([
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
      name: "c1",
      shipLength: 4,
      isSunken: false
    },
  ]);
});

test("correctly sorts an array of objects based on two key values with keyOneOrder descending and keyTwoOrder ascending", () => {
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
  const mockKeyOne = jest.fn(() => "shipLength");
  const mockKeyTwo = jest.fn(() => "isSunken");
  const mockKeyOneOrder = jest.fn(() => "descending");
  const mockKeyTwoOrder = jest.fn(() => "ascending");

  expect(sortArrayOfObjectsBasedOnTwoKeyValuesByOrder(
    mockArray(),
    mockKeyOne(), 
    mockKeyTwo(),
    mockKeyOneOrder(),
    mockKeyTwoOrder()
    )).toStrictEqual([
    {
      name: "c1",
      shipLength: 4,
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
      name: "s2",
      shipLength: 2,
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
      name: "d1",
      shipLength: 1,
      isSunken: true
    },
    {
      name: "d4",
      shipLength: 1,
      isSunken: true
    },
  ]);
});

test("correctly sorts an array of objects based on two key values with keyOneOrder descending and keyTwoOrder descending", () => {
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
  const mockKeyOne = jest.fn(() => "shipLength");
  const mockKeyTwo = jest.fn(() => "isSunken");
  const mockKeyOneOrder = jest.fn(() => "descending");
  const mockKeyTwoOrder = jest.fn(() => "descending");

  expect(sortArrayOfObjectsBasedOnTwoKeyValuesByOrder(
    mockArray(),
    mockKeyOne(), 
    mockKeyTwo(),
    mockKeyOneOrder(),
    mockKeyTwoOrder()
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
