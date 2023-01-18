import { StringFormatter } from '../string-formatter';

type ErrorCode = Uppercase<string>;

type ResultOk<T> = {
  ok: true;
  value: T;
}

type ResultFail = {
  ok: false;
  errorCode: ErrorCode;
}

type LogType = "info" | "error" | "warn"

export type TResult<T> = ResultOk<T> | ResultFail

export class Result {
  public static Log(type: LogType, msg: string) {
    console[type](msg);

    return {
      Ok: this.Ok,
      Fail: this._Fail
    };
  }

  public static Ok<T>(value: T): ResultOk<T> {
    return {
      ok: true,
      value
    };
  }

  private static _Fail(rawErrorCode: ErrorCode): ResultFail {
    const errorCode = StringFormatter.ToSnakeCaseCapitalized(rawErrorCode);

    return {
      ok: false,
      errorCode
    };
  }
}
