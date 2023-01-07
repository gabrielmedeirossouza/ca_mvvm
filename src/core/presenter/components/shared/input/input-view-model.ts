
export class InputViewModel {
  public label = "";
  public placeholder = "";
  public disabled = false;
  private _value = "";
  private _onChangeCallbacks: ((value: string) => void)[] = [];

  public get value(): string {
    return this._value;
  }

  public set value(value: string) {
    if (this.disabled) {
      return;
    }

    this._value = value;
    this._NotifyOnChange();
  }

  public SubscribeOnChange(callback: (value: string) => void): (value: string) => void {
    this._onChangeCallbacks.push(callback);

    return callback;
  }

  public UnsubscribeOnChange(callbackToUnsubscribe: (value: string) => void) {
    this._onChangeCallbacks = this._onChangeCallbacks.filter(callback => callback !== callbackToUnsubscribe);
  }

  private _NotifyOnChange() {
    this._onChangeCallbacks.forEach(callback => callback(this._value));
  }
}
