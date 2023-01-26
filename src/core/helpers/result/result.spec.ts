import { Result } from "./result";
import { Log } from "../log";

it("should return a Result with Ok when call Ok static method", () => {
  const result = Result.Ok("hello test");

  expect(result).toEqual({
    ok: true,
    value: "hello test"
  });
});

it("should return a Result with Fail when call Log->Fail", () => {
  const log = new Log("error", "result.spec", "Result: hello test");
  const result = Result.Fail(log, "HELLO_TEST");

  expect(result).toEqual({
    ok: false,
    errorCode: "HELLO_TEST"
  });
});

