import { MathHelper } from "./math-helper";

describe("Helper: MathHelper", () => {
  it.each([
    { min: 0, max: 100, value: -1, expected: { ok: true, value: 0 } },
    { min: 0, max: 100, value: 0, expected: { ok: true, value: 0 } },
    { min: 0, max: 100, value: 50, expected: { ok: true, value: 50 } },
    { min: 0, max: 100, value: 100, expected: { ok: true, value: 100 } },
    { min: 0, max: 100, value: 101, expected: { ok: true, value: 100 } },
    { min: 250, max: 450, value: 200, expected: { ok: true, value: 250 } },
    { min: 250, max: 450, value: 350, expected: { ok: true, value: 350 } },
    { min: 250, max: 450, value: 500, expected: { ok: true, value: 450 } },
    { min: 100, max: 100, value: 50, expected: { ok: true, value: 100 } },
    { min: 100, max: 100, value: 100, expected: { ok: true, value: 100 } },
    { min: 100, max: 100, value: 150, expected: { ok: true, value: 100 } },
    { min: 100, max: 0, value: 50, expected: { ok: false, errorCode: "MATH_HELPER_CLAMP_MIN_GREATER_THAN_MAX" } },
    { min: 100, max: 50, value: 20, expected: { ok: false, errorCode: "MATH_HELPER_CLAMP_MIN_GREATER_THAN_MAX" } },
  ])("should clamp a value between a min and max: (value: $value, min: $min, max: $max) => expected: $expected", ({
    min,
    max,
    value,
    expected
  }) => {
    expect(MathHelper.Clamp(value, min, max)).toStrictEqual(expected);
  });
});
