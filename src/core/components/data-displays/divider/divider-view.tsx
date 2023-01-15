import { DividerViewState } from "./divider-view-state";

interface Props {
  viewState: DividerViewState;
}

export function DividerComponent({ viewState }: Props) {
  const sizeBasedOnOrientation = viewState.orientation === "horizontal"
    ? { width: `${viewState.size}%` }
    : { height: `${viewState.size}%` };

  return (
    <hr
      data-testid="divider"
      className={`divider-component ${viewState.orientation}`}
      style={sizeBasedOnOrientation}
    />
  );
}
