import { MathHelper } from "@/core/helpers/math-helper";

export type Orientation = 'horizontal' | 'vertical';

export class DividerViewState {
  public readonly orientation: Orientation = 'horizontal';
  private _size = 100;

  public get size(): number {
    return this._size;
  }

  public set size(value: number) {
    if (value < 0) {
      console.warn('Divider size cannot be less than 0');
    }

    if (value > 100) {
      console.warn('Divider size cannot be greater than 100');
    }

    this._size = MathHelper.Clamp(value, 0, 100);
  }
}
