import { MathHelper } from "@/core/helpers/math-helper";

export type Orientation = 'horizontal' | 'vertical';

interface DividerViewStateOptions {
  orientation?: Orientation;
  size?: number;
}

export class DividerViewState {
  public orientation: Orientation = "horizontal";
  private _size = 100;

  constructor({
    orientation,
    size
  }: DividerViewStateOptions = {}) {
    if (orientation) {
      this.orientation = orientation;
    }

    if (size !== undefined) {
      this.size = size;
    }
  }

  public get size(): number {
    return this._size;
  }

  public set size(value: number) {
    const clampResult = MathHelper.Clamp(value, 0, 100);

    if (clampResult.ok) {
      this._size = clampResult.value;
    }
  }
}
