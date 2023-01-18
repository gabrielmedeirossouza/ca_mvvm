import { Result } from "./result";
import { vi } from 'vitest';

it("should return a Result with Ok when call Ok static method", () => {
  const result = Result.Ok("hello test");

  expect(result).toEqual({
    ok: true,
    value: "hello test"
  });
});

it("should return a Result with Fail when call Log->Fail", () => {
  const result = Result.Log("error", "hello test").Fail("HELLO_TEST");

  expect(result).toEqual({
    ok: false,
    errorCode: "HELLO_TEST"
  });
});

it.each([
  { input: "hello test", logType: "info" },
  { input: "hello test", logType: "error" },
  { input: "hello test", logType: "warn" }
] as const)(`should call correct console method when call: ($logType, $input)`, ({ input, logType }) => {
  const consoleSpy = vi.spyOn(console, logType);

  Result.Log(logType, input);

  expect(consoleSpy).toHaveBeenCalledWith(input);
});

