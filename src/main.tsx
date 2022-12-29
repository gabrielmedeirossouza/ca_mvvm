import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { Home } from './views/home';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <ChakraProvider>
    <Home />
  </ChakraProvider>
);
