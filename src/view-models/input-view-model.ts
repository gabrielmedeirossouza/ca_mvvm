import { InputEntity } from '../data-models/input-entity';

export class InputViewModel {
  private entity: InputEntity;
  private onChangeObservers: ((newValue: string) => void)[] = [];

  constructor(initialValue: string = '') {
    this.entity = new InputEntity(initialValue);
  }

  getValue(): string {
    return this.entity.getValue();
  }

  setValue(newValue: string): void {
    this.entity.setValue(newValue);
    this.onChangeObservers.forEach(callback => callback(newValue));
  }

  onChange(callback: (newValue: string) => void): void {
    this.onChangeObservers.push(callback);
  }
}