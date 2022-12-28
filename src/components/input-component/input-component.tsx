import React from 'react';
import { InputViewModel as InputViewModelInterface } from '@/interfaces/input-view-model';

interface Props {
  viewModel: InputViewModelInterface;
}

export function InputComponent({ viewModel }: Props) {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    viewModel.OnChange((value) => {
      if (!ref.current) return;

      ref.current.value = value;
    });
  });

  return (
    <input
      ref={ref}
      onChange={(event) => {
        viewModel.SetValue(event.target.value);
      }}
    />
  );
};
