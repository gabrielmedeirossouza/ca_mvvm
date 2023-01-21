import { MathHelper } from "@/core/helpers/math-helper";
import { Observable } from '@/core/entities/observable';

export type ObserverMap = {
  'on-size': (size: number) => void;
  'on-orientation': (orientation: Orientation) => void;
}

export type Orientation = 'horizontal' | 'vertical';

interface DividerViewStateOptions {
  orientation?: Orientation;
  size?: number;
}

export class DividerViewState {
  private _orientation: Orientation = "horizontal";
  private _size = 100;
  private _observable = new Observable<ObserverMap>();

  constructor({
    orientation,
    size
  }: DividerViewStateOptions = {}) {
    if (orientation) {
      this._orientation = orientation;
    }

    if (size !== undefined) {
      this.size = size;
    }
  }

  public get orientation(): Orientation {
    return this._orientation;
  }

  public set orientation(value: Orientation) {
    this._orientation = value;
    this._observable.Notify('on-orientation', this._orientation);
  }

  public get size(): number {
    return this._size;
  }

  public set size(value: number) {
    const clampResult = MathHelper.Clamp(value, 0, 100);

    if (clampResult.ok) {
      this._size = clampResult.value;
      this._observable.Notify('on-size', this._size);
    }
  }

  public get observable(): Observable<ObserverMap> {
    return this._observable;
  }
}
