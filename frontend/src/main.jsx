import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Apelacion from './routes/Apelacion/Apelacion.jsx';
import CreateApelacion from './routes/Apelacion/CreateApelacion.jsx';
import DetallesApelacion from './routes/Apelacion/DetallesApelacion.jsx';
import EditarApelacion from './routes/Apelacion/EditarApelacion.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/apelation',
        element: <Apelacion/>,
      },
      {
        path: '/apelation/:id',
        element: <DetallesApelacion/>,
      },
      {
        path: '/apelation/create',
        element: <CreateApelacion/>,
      },
      {
        path: '/apelation/:id/edit',
        element: <EditarApelacion/>,
      },
      {
        path: '/',
        element: <App />,
      },
      
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
