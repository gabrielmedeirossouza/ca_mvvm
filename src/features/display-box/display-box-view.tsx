import React from 'react';
import { useOnLoad } from '@/core/presenter/hooks/use-on-load';
import { DisplayBoxViewModel } from './display-box-view-model';
import { Box, Text } from './styles';

interface Props {
  viewModel: DisplayBoxViewModel
}

export function DisplayBoxView({ viewModel }: Props) {
  const boxRef = useOnLoad<HTMLDivElement>(onLoadBox);

  function onLoadBox(box: HTMLDivElement) {
  }

  return (
    <Box ref={boxRef} width={viewModel.width} height={viewModel.height}>
      <Text>{viewModel.text}</Text>
    </Box>
  );
}
