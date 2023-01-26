import { DividerViewState } from "./divider-view-state";

describe('Component: Divider -> view state', () => {
  it('should create an instance with correct default properties', () => {
    const sut = new DividerViewState();

    expect(sut.orientation).toBe('horizontal');
    expect(sut.size).toBe(100);
  });

  it.each([
    { size: -1, expected: 0 },
    { size: 0, expected: 0 },
    { size: 50, expected: 50 },
    { size: 100, expected: 100 },
    { size: 101, expected: 100 }
  ])("should set size to a value between 0 and 100: (size: $size) => expected: $expected", ({ size, expected }) => {
    const sut = new DividerViewState({ size });

    expect(sut.size).toBe(expected);
  });

  it.each([
    "horizontal",
    "vertical"
  ] as const)(`should set orientation to %s`, (orientation) => {
    const sut = new DividerViewState({ orientation });

    expect(sut.orientation).toBe(orientation);
  });
});
