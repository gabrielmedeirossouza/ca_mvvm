type LogType = "info" | "error" | "warn"

export class Log {
  private _type: LogType;
  private _msg: string;

  constructor(type: LogType, fileName: Lowercase<string>, msg: String) {
    this._type = type;
    this._msg = `${fileName}: ${msg}`;
  }

  public Dispatch() {
    console[this._type](this._msg);
  }
}
