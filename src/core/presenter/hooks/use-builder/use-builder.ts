import { Builder } from '@/core/entities/builder';
import React from 'react';

export function useBuilder<T>(builder: () => Builder<T>): T {
  const [state] = React.useState(builder().Build());

  return state;
}
