import { SpinnerViewState } from "./spinner-view-state";

interface Props {
  viewState: SpinnerViewState;
}

export function SpinnerComponent({ viewState }: Props) {
  return (
    <div
      data-testid="spinner"
      className={`spinner-component ${viewState.size}`}
    />
  );
}
