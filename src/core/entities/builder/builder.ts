export abstract class Builder<T> {
  protected _entity: T;

  constructor(entity: T) {
    this._entity = entity;
  }

  public abstract Build(): T;
}
