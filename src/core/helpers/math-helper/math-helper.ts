import { Log } from "../log";
import { Result, TResult } from "../result";

export class MathHelper {
  public static Clamp(value: number, min: number, max: number): TResult<number> {
    if (min > max) {
      const log = new Log("error", "math-helper", `Min is greater than max: Min: ${min}, max: ${max}`);

      return Result.Fail(log, "MATH_HELPER_CLAMP_MIN_GREATER_THAN_MAX");
    }

    if (min === max) {
      return Result.Ok(min);
    }

    const result = Math.min(Math.max(value, min), max);

    return Result.Ok(result);
  }
}
