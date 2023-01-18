import { StringFormatter } from './string-formatter';

it.each([
  { input: "hello test", expected: "HELLO_TEST" },
  { input: "hello.test", expected: "HELLO_TEST" },
  { input: "hello-test", expected: "HELLO_TEST" },
  { input: "hello test", expected: "HELLO_TEST" },
  { input: "hello, test", expected: "HELLO_TEST" },
  { input: "   hello, test ", expected: "HELLO_TEST" },
])("should return a Result with Fail when call Log->Fail with errorCode: %s and return errorCode: HELLO_TEST", ({ input, expected }) => {
  const result = StringFormatter.ToSnakeCaseCapitalized(input);

  expect(result).toEqual(expected);
});
