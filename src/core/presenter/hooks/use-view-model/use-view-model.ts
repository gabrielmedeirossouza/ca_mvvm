import React from 'react';

export function useViewModel<T>(viewModel: () => T): T {
  const [state] = React.useState(viewModel());

  return state;
}
