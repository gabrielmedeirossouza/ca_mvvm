import { MathHelper } from "./math-helper";

describe("Helper: MathHelper", () => {
  it.each([
    { min: 0, max: 100, value: -1, expected: 0 },
    { min: 0, max: 100, value: 0, expected: 0 },
    { min: 0, max: 100, value: 50, expected: 50 },
    { min: 0, max: 100, value: 100, expected: 100 },
    { min: 0, max: 100, value: 101, expected: 100 },
    { min: 250, max: 450, value: 200, expected: 250 },
    { min: 250, max: 450, value: 350, expected: 350 },
    { min: 250, max: 450, value: 500, expected: 450 },
    { min: 100, max: 100, value: 50, expected: 100 },
    { min: 100, max: 100, value: 100, expected: 100 },
    { min: 100, max: 100, value: 150, expected: 100 },
    { min: 100, max: 0, value: 50, expected: 0 },
    { min: 100, max: 50, value: 20, expected: 0 },
  ])("should clamp a value between a min and max: (value: $value, min: $min, max: $max) => expected: $expected", ({
    min,
    max,
    value,
    expected
  }) => {
    expect(MathHelper.Clamp(value, min, max)).toBe(expected);
  });
});
