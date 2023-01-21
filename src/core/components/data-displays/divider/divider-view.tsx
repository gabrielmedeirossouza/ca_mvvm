import { ObserverFactory } from "@/core/factories/observer-factory";
import React from "react";
import { DividerViewState, ObserverMap } from "./divider-view-state";

interface Props {
  viewState: DividerViewState;
}

const { createObserver } = ObserverFactory<ObserverMap>();

export function DividerComponent({ viewState }: Props) {
  const [size, setSize] = React.useState(viewState.size);
  const [orientation, setOrientation] = React.useState(viewState.orientation);

  React.useEffect(() => {
    const onSizeObserver = viewState.observable.Subscribe(
      createObserver("on-size", setSize)
    );

    const onOrientationObserver = viewState.observable.Subscribe(
      createObserver("on-orientation", setOrientation)
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
    <div>
asdfkajslkfsdak
      <hr
        data-testid="divider"
        className={`divider-component ${orientation}`}
        style={sizeBasedOnOrientation}
      />
    </div>
  );
}
