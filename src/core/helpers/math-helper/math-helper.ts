import { Result, TResult } from "../result";

export class MathHelper {
  public static Clamp(value: number, min: number, max: number): TResult<number> {
    if (min > max) {
      return Result.Log(
        "error",
        `MathHelper: Min is greater than max: Min: ${min}, max: ${max}`
      ).Fail("MATH_HELPER_CLAMP_MIN_GREATER_THAN_MAX");
    }

    if (min === max) {
      return Result.Ok(min);
    }

    const result = Math.min(Math.max(value, min), max);

    return Result.Ok(result);
  }
}
