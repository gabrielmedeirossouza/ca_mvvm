import { Result, TResult } from '@/core/helpers/result';

export type UnitType = 'px' | 'hug' | '%'

export class Shape {
  private _width = 0;
  private _height = 0;
  private _widthUnitType: UnitType;
  private _heightUnitType: UnitType;
  private _observers: ((callback: { width: number, height: number }) => void)[] = [];

  constructor(
    width: number,
    height: number,
    widthUnitType: UnitType,
    heightUnitType: UnitType
  ) {
    this._widthUnitType = widthUnitType;
    this._heightUnitType = heightUnitType;

    const widthResult = this._GetValueWithBounds(width);
    const heightResult = this._GetValueWithBounds(height);

    if (widthResult.ok) {
      this._width = widthResult.value;
    }

    if (heightResult.ok) {
      this._height = heightResult.value;
    }
  }

  public get width(): number {
    return this._width;
  }

  public set width(rawValue: number) {
    const valueResult = this._GetValueWithBounds(rawValue);

    if (valueResult.ok) {
      this._width = valueResult.value;
      this._Notify();
    }
  }

  public get height(): number {
    return this._height;
  }

  public set height(rawValue: number) {
    const valueResult = this._GetValueWithBounds(rawValue);

    if (valueResult.ok) {
      this._height = valueResult.value;
      this._Notify();
    }
  }

  public get widthUnitType(): UnitType {
    return this._widthUnitType;
  }

  public get heightUnitType(): UnitType {
    return this._heightUnitType;
  }

  public Subscribe(callback: (measures: { width: number, height: number }) => void): void {
    this._observers.push(callback);
  }

  private _GetValueWithBounds(value: number): TResult<number> {
    const MIN_VALUE = 0;
    const MAX_VALUE = 100;

    if (value < MIN_VALUE) {
      return Result.Log(
        'warn',
        `Shape: Value cannot be less than ${MIN_VALUE}. Received: ${value}. Value will be set to ${MIN_VALUE}`
      ).Ok(MIN_VALUE);
    }

    if (value > MAX_VALUE && this._widthUnitType === '%') {
      return Result.Log(
        'warn',
        `Shape: Value cannot be greater than ${MAX_VALUE} when unitType is %. Received ${value}. Value will be set to ${MAX_VALUE}`
      ).Ok(MAX_VALUE);
    }

    return Result.Ok(value);
  }

  private _Notify(): void {
    this._observers.forEach((observer) => observer(this));
  }
}
