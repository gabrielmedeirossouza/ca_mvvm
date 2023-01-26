import { render } from '@testing-library/react';
import { SpinnerComponent } from './spinner-view';
import { SpinnerViewState } from './spinner-view-state';

describe("Component: Spinner -> view", () => {
  it("should create SpinnerComponent with default size as 'md'", () => {
    const { getByTestId } = render(<SpinnerComponent viewState={new SpinnerViewState()} />);

    const $spinner = getByTestId("spinner");

    expect($spinner).toHaveClass("spinner-component");
    expect($spinner).toHaveClass("md");
  });

  it.each(["sm", "md", "lg"] as const)("should create SpinnerComponent with size as '%s'", (size) => {
    const viewState = new SpinnerViewState();
    viewState.size = size;

    const { getByTestId } = render(<SpinnerComponent viewState={viewState} />);

    const $spinner = getByTestId("spinner");

    expect($spinner).toHaveClass(size);
  });
});
