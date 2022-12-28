import { InputEntity as InputEntityInterface } from '../interfaces/input-entity';

export class InputEntity implements InputEntityInterface {
  private _value: string;

  constructor(initialValue = '') {
    this._value = initialValue;
  }

  public GetValue(): string {
    return this._value;
  }

  public SetValue(newValue: string): void {
    this._value = newValue;
  }
}
