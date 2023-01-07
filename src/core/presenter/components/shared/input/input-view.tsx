import React from 'react';
import { InputViewModel } from './input-view-model';
import { VStack, Text, Input } from '@chakra-ui/react';

interface Props {
  viewModel: InputViewModel
}

export function InputComponent({ viewModel }: Props) {
  const [value, setValue] = React.useState(viewModel.value);

  React.useEffect(() => {
    const onChange = viewModel.SubscribeOnChange((newValue) => setValue(newValue));

    return () => viewModel.UnsubscribeOnChange(onChange);
  }, []);

  return (
    <VStack alignItems="flex-start">
      {viewModel.label && <Text>{viewModel.label}</Text>}

      <Input
        type="text"
        value={value}
        placeholder={viewModel.placeholder}
        cursor="text"
        onChange={(event) => viewModel.value = event.target.value}
      />
    </VStack>
  );
}
