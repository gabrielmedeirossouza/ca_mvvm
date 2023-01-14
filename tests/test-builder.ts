import { Builder } from "@/core/entities/builder";

type Case = {
  method: string;
  arg: any;
  expected: any;
}

export function testBuilder<T extends Builder<Object>>(sut: T, viewState: Function, cases: Case[]) {
  it(`should instance return ${viewState?.name} from Build method`, () => {
    expect(sut.Build()).toBeInstanceOf(viewState);
  });

  it.each(cases)("should invoke method $method with arg $arg and match expected $expected", ({ method, arg, expected }) => {
    (sut[method] as any)(arg);

    expect(sut.Build()).toContain(expected);
  });
}

