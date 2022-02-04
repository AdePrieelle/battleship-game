import { calculateShipCoords } from "../calculateShipCoords";

test("calculate ship coords based on ship, startIndex for a horizontal direction correctly", () => {
  expect(calculateShipCoords(4, 72, "horizontal", "horizontal", "vertical")).toStrictEqual([72, 73, 74, 75]);
});

test("calculate ship coords based on ship, startIndex for a vertical direction correctly", () => {
  expect(calculateShipCoords(4, 14, "vertical", "horizontal", "vertical")).toStrictEqual([14, 24, 34, 44]);
});

test("calculate ship coords based on ship, startIndex for a horizontal direction with a ship of shipLength 1 correctly", () => {
  expect(calculateShipCoords(1, 65, "horizontal", "horizontal", "vertical")).toStrictEqual([65]);
});

test("calculate ship coords based on ship, startIndex for a vertical direction with a ship of shipLength 1 correctly", () => {
  expect(calculateShipCoords(1, 65, "vertical", "horizontal", "vertical")).toStrictEqual([65]);
});
