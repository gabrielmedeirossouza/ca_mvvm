import React from 'react';
import { InputViewModel as InputViewModelInterface } from '../../interfaces/input-view-model';

interface Props {
  viewModel: InputViewModelInterface;
}

export function InputComponent({ viewModel }: Props) {
  const ref = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    viewModel.onChange((value) => {
      if (!ref.current) return;

      ref.current.value = value;
    })
  })

  return (
    <input
      ref={ref}
      onChange={(event) => {
        viewModel.setValue(event.target.value);
      }}
    />
  )
};