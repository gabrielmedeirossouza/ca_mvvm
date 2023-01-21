import { Position } from './position';

it.each([
  { x: 0, y: 0, z: 0, expected: { x: 0, y: 0, z: 0 } },
  { x: 1, y: 1, z: 1, expected: { x: 1, y: 1, z: 1 } },
  { x: 2, y: 2, z: 2, expected: { x: 2, y: 2, z: 2 } },
  { x: 3.37, y: 3.123, z: 3.54, expected: { x: 3.37, y: 3.123, z: 3.54 } },
])(`should create a position ($x, $y, $z)`, ({ x, y, z, expected }) => {
  const position = new Position(x, y, z);
  expect(position).toEqual(expected);
});
