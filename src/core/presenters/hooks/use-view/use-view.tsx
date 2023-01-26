import React from 'react';

type ComponentType = React.ComponentType<{ viewState: any }>;
type ViewStateFnType<T> = () => T;
type ReturnType<T> = [() => JSX.Element, T];

export function useView<_, T>(Component: ComponentType, viewStateFn: ViewStateFnType<T>): ReturnType<T> {
  const [viewState] = React.useState(viewStateFn());

  const render = () => <Component viewState={viewState} />;

  return [render, viewState];
}
