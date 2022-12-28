import { InputEntity as InputEntityInterface } from '../interfaces/input-entity';

export class InputEntity implements InputEntityInterface {
  private value: string;

  constructor(initialValue: string = '') {
    this.value = initialValue;
  }

  getValue(): string {
    return this.value;
  }

  setValue(newValue: string): void {
    this.value = newValue;
  }
}