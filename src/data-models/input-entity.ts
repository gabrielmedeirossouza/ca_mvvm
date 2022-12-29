import type { InputEntity as InputEntityInterface, InputType } from '@/interfaces/input-entity';

export class InputEntity implements InputEntityInterface {
  public label = '';
  public placeholder = '';
  public type: InputType = 'text';
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
