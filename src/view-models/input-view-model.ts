import { InputEntity } from '@/data-models/input-entity';
import { ConcreteInputBuilder } from '@/builders/input-builder';

export class InputViewModel {
  private _entity: InputEntity;
  private _onChangeObservers: ((newValue: string) => void)[] = [];

  constructor(inputBuilder: ConcreteInputBuilder) {
    this._entity = inputBuilder.Build();
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

  public get label(): string {
    return this._entity.label;
  }

  public get placeholder(): string {
    return this._entity.placeholder;
  }

  public get type(): string {
    return this._entity.type;
  }
}
