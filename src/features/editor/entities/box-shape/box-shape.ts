import { Shape } from "../shape";

export class BoxShape extends Shape {
  private _cornerRadius: number;

  constructor(width: number, height: number, cornerRadius = 0) {
    super(width, height, 'px', 'px');
    this._cornerRadius = cornerRadius;
  }

  public get cornerRadius(): number {
    return this._cornerRadius;
  }
}
