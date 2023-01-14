import { render } from '@testing-library/react';
import { DividerComponent } from './divider-view';
import { DividerViewState, Orientation } from './divider-view-state';

function makeDivider(orientation: Orientation, size: number) {
  const viewState = new DividerViewState({
    orientation,
    size,
  });

  return <DividerComponent viewState={viewState} />;
}

describe("Component: Divider", () => {
  it("should create a horizontal divider with default size as 100", () => {
    const { getByTestId } = render(<DividerComponent viewState={new DividerViewState()} />);

    const $divider = getByTestId("divider");

    expect($divider).toHaveClass("divider-component", "horizontal");
    expect($divider).toHaveStyle({
      width: "100%",
    });
  });

  it.each([
    { orientation: "horizontal", size: -1, expectedSize: 0 },
    { orientation: "horizontal", size: 101, expectedSize: 100 },
    { orientation: "horizontal", size: 100, expectedSize: 100 },
    { orientation: "horizontal", size: 50, expectedSize: 50 },
    { orientation: "horizontal", size: 0, expectedSize: 0 },
    { orientation: "vertical", size: -1, expectedSize: 0 },
    { orientation: "vertical", size: 101, expectedSize: 100 },
    { orientation: "vertical", size: 100, expectedSize: 100 },
    { orientation: "vertical", size: 50, expectedSize: 50 },
    { orientation: "vertical", size: 0, expectedSize: 0 },
  ] as const)(
    "should create a divider with orientation: $orientation and size: $expectedSize, from (o: $orientation, s: $size, e: $expectedSize)",
    ({
      orientation,
      size,
      expectedSize,
    }) => {
      const { getByTestId } = render(makeDivider(orientation, size));

      const $divider = getByTestId("divider");

      expect($divider).toHaveClass("divider-component", orientation);
      expect($divider).toHaveStyle({
        width: `${expectedSize}%`,
      });
    });
});
