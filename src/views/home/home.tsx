import { Flex, Stack } from '@chakra-ui/react';
import { ConcreteInputBuilder } from '@/builders/input-builder';
import { InputViewModel } from '@/view-models/input-view-model';
import { InputComponent } from '@/components/input-component';

const inputBuilder = new ConcreteInputBuilder();

const builderName = inputBuilder.AddLabel("Nome").AddPlaceholder("Digite seu nome");
const builderPassword = inputBuilder.AddLabel("Senha").AddPlaceholder("Digite sua senha").AddType("password");

export function Home() {
  const fieldName = new InputViewModel(builderName);
  const fieldPassword = new InputViewModel(builderPassword);

  return (
    <Flex w="100%" h="100vh" justify="center" align="center">
      <Stack spacing={5} w="xs" bgColor="#f6f6f6" p="4" borderRadius="8px">
        <InputComponent viewModel={fieldName}/>
        <InputComponent viewModel={fieldPassword}/>
      </Stack>
    </Flex>
  );
};
