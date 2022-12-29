import React from 'react';
import { Input, Text, Stack } from '@chakra-ui/react';
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
    <Stack spacing={1}>
      {viewModel.label && <Text>{viewModel.label}</Text>}

      <Input
        ref={ref}
        placeholder={viewModel.placeholder}
        onChange={(event) => {
          viewModel.SetValue(event.target.value);
        }}
      />
    </Stack>
  );
};
