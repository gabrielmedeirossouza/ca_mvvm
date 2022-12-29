import { InputEntity } from '@/data-models/input-entity';
import { Builder } from '../builder';
import type { InputType } from '@/interfaces/input-entity';

export class ConcreteInputBuilder extends Builder<InputEntity> {
  private _inputEntity: InputEntity;

  constructor() {
    super();
    this._inputEntity = new InputEntity();
  }

  public AddValue(value: string): ConcreteInputBuilder {
    this._inputEntity.SetValue(value);

    return this;
  }

  public AddLabel(label: string): ConcreteInputBuilder {
    this._inputEntity.label = label;

    return this;
  }

  public AddPlaceholder(placeholder: string): ConcreteInputBuilder {
    this._inputEntity.placeholder = placeholder;

    return this;
  }

  public AddType(type: InputType): ConcreteInputBuilder {
    this._inputEntity.type = type;

    return this;
  }

  public Build(): InputEntity {
    return this._inputEntity;
  }
}
