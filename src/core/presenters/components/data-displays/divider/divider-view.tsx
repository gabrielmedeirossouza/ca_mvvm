import React from "react";
import { ObserverFactory } from "@factories/observer-factory";
import { DividerViewState, ObserverMap } from "./divider-view-state";

interface Props {
  viewState: DividerViewState;
}

const { CreateObserver } = new ObserverFactory<ObserverMap>();

export function DividerComponent({ viewState }: Props) {
  const [size, setSize] = React.useState(viewState.size);
  const [orientation, setOrientation] = React.useState(viewState.orientation);

  React.useEffect(() => {
    const onSizeObserver = viewState.observable.Subscribe(
      CreateObserver("on-size", setSize)
    );

    const onOrientationObserver = viewState.observable.Subscribe(
      CreateObserver("on-orientation", setOrientation)
    );

    return () => {
      viewState.observable.Unsubscribe(onSizeObserver);
      viewState.observable.Unsubscribe(onOrientationObserver);
    };
  }, []);

  const sizeBasedOnOrientation = viewState.orientation === "horizontal"
    ? { width: `${size}%` }
    : { height: `${size}%` };

  return (
    <hr
      data-testid="divider"
      className={`divider-component ${orientation}`}
      style={sizeBasedOnOrientation}
    />
  );
}
