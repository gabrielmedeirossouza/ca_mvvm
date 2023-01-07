import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { DashboardView } from './views/dashboard';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <ChakraProvider>
    <DashboardView />
  </ChakraProvider>
);
