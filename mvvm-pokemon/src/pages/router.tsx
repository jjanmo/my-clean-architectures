import { createBrowserRouter } from 'react-router-dom';
import Home from './home';
import My from './my';

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
