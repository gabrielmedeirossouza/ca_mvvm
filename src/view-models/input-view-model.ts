import { InputEntity } from '@/data-models/input-entity';

export class InputViewModel {
  private _entity: InputEntity;
  private _onChangeObservers: ((newValue: string) => void)[] = [];

  constructor(initialValue = '') {
    this._entity = new InputEntity(initialValue);
  }

  public GetValue(): string {
    return this._entity.GetValue();
  }

  public SetValue(newValue: string): void {
    this._entity.SetValue(newValue);
    this._onChangeObservers.forEach(callback => callback(newValue));
  }

  public OnChange(callback: (newValue: string) => void): void {
    this._onChangeObservers.push(callback);
  }
}
