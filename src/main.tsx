import ReactDOM from 'react-dom/client';
import { EditorPage } from '@/features/editor/presenter/views/editor-page';

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <>
    <EditorPage />
  </>
);
