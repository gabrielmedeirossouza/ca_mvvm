import { MathHelper } from "@/core/helpers/math-helper";

export type Orientation = 'horizontal' | 'vertical';

interface DividerViewStateOptions {
  orientation?: Orientation;
  size?: number;
}

export class DividerViewState {
  private _orientation: Orientation;
  private _size;

  constructor({
    orientation = "horizontal",
    size = 100
  }: DividerViewStateOptions = {}) {
    this._orientation ??= orientation;

    this._size = MathHelper.Clamp(size, 0, 100);
  }

  public get orientation(): Orientation {
    return this._orientation;
  }

  public get size(): number {
    return this._size;
  }
}
