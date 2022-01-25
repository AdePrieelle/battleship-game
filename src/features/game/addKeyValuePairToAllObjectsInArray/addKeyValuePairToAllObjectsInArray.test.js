import { addKeyValuePairToAllObjectsInArray } from "./addKeyValuePairToAllObjectsInArray";

test("adds a key value pair to all objects in an array correctly", () => {
  const mockArray = jest.fn(() => ([
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
  const mockKey = jest.fn(() => "isSunken");
  const mockValue = jest.fn(() => false);
  expect(addKeyValuePairToAllObjectsInArray(
    mockArray(),
    mockKey(),
    mockValue()
  )).toStrictEqual([
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
  ]);
});
