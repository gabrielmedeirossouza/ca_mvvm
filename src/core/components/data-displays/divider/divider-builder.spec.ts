import { DividerBuilder } from "./divider-builder";
import { DividerViewState } from "./divider-view-state";

describe("Component: DividerBuilder", () => {
  it("should return a Divider from Build method", () => {
    const sut = new DividerBuilder();

    expect(sut.Build()).toEqual(new DividerViewState());
  });

  it.each([
    { method: 'AddOrientation', arg: 'horizontal', expected: { orientation: 'horizontal' } },
    { method: 'AddOrientation', arg: 'vertical', expected: { orientation: 'vertical' } },
    { method: 'AddSize', arg: -1, expected: { size: 0 } },
    { method: 'AddSize', arg: 0, expected: { size: 0 } },
    { method: 'AddSize', arg: 50, expected: { size: 50 } },
    { method: 'AddSize', arg: 100, expected: { size: 100 } },
    { method: 'AddSize', arg: 101, expected: { size: 100 } },
  ] as const)("should invoke method $method with arg $arg and match expected $expected", ({ method, arg, expected }) => {
    const sut = new DividerBuilder();

    (sut[method] as any)(arg);

    expect(sut.Build()).toContain(expected);
  });
});
