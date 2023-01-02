import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main.jsx';
import Home from '../Pages/Home.jsx';
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [{ path: '/', element: <Home></Home> }],
  },
]);
