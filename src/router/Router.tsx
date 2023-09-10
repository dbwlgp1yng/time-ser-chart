import React from 'react';
import App from '../App';
import NotFound from 'pages/error/NotFound';
import { createBrowserRouter } from 'react-router-dom';
import Home from 'pages/home/Home';

interface IRouter {
  path: string;
  element: React.ReactNode;
  errorElement?: React.ReactNode;
  children?: IRouter[];
}

const routerData: IRouter[] = [
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />,
      },
    ],
  },
];

const router = createBrowserRouter(routerData);

export default router;
