import { SpinnerViewState } from "./spinner-view-state";

describe("Component: Spinner -> view state", () => {
  it("should instantiate with default size 'md'", () => {
    const sut = new SpinnerViewState();

    expect(sut.size).toBe("md");
  });

  it.each(["sm", "md", "lg"] as const)("should set size to '%s'", (size) => {
    const sut = new SpinnerViewState();

    sut.size = size;

    expect(sut.size).toBe(size);
  });
});
