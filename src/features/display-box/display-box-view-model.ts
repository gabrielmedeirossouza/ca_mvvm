import { Text } from '@/core/entities/text';
import { Shape } from '@/core/entities/shape';

export class DisplayBoxViewModel {
  private _text: Text;
  private _shape: Shape;

  constructor() {
    this._text = new Text();
    this._shape = new Shape();
  }

  public get text(): string {
    return this._text.value;
  }

  public set text(value: string) {
    this._text.value = value;
  }

  public get width(): number {
    return this._shape.width;
  }

  public set width(value: number) {
    this._shape.width = value;
  }

  public get height(): number {
    return this._shape.height;
  }

  public set height(value: number) {
    this._shape.height = value;
  }
}
