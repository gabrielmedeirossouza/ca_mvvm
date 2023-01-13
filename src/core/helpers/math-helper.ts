export class MathHelper {
  public static Clamp(value: number, min: number, max: number): number {
    if (min > max) return 0;

    return Math.min(Math.max(value, min), max);
  }
}
