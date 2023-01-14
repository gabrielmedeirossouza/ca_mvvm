import { DividerViewState } from "./divider-view-state";

interface Props {
  viewState: DividerViewState;
}

export function DividerComponent({ viewState }: Props) {
  return (
    <hr
      data-testid="divider"
      className={`divider-component ${viewState.orientation}`}
      style={{ width: `${viewState.size}%` }}
    />
  );
}
