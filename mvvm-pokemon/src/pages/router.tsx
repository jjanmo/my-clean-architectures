import { createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import My from './My';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/my',
    element: <My />,
  },
]);
