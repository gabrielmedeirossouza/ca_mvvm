import { Log } from '../log';
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

export type TResult<T> = ResultOk<T> | ResultFail

export class Result {
  public static Ok<T>(value: T): ResultOk<T> {
    return {
      ok: true,
      value
    };
  }

  public static Fail(log: Log, rawErrorCode: ErrorCode): ResultFail {
    const errorCode = StringFormatter.ToSnakeCaseCapitalized(rawErrorCode);

    log.Dispatch();

    return {
      ok: false,
      errorCode
    };
  }
}
