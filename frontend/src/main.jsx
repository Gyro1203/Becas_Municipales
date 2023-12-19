import './index.css';
// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';
import ReactDOM from 'react-dom/client';
import App from './routes/App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root.jsx';
import ErrorPage from './routes/ErrorPage.jsx';
import Login from './routes/Login.jsx';
import Apelacion from './routes/Apelacion/Apelacion.jsx';
import CreateApelacion from './routes/Apelacion/CreateApelacion.jsx';
import DetallesApelacion from './routes/Apelacion/DetallesApelacion.jsx';
import EditarApelacion from './routes/Apelacion/EditarApelacion.jsx';
import Postulaciones from './routes/Postulaciones/Postulaciones.jsx';
import Postular from './routes/Postulaciones/Postular.jsx';
import Detalles from './routes/Postulaciones/Detalles.jsx';
import MisPostulaciones from './routes/Postulaciones/MisPostulaciones.jsx';
import Resultados from './routes/Resultados.jsx';
import VerApelaciones from './routes/Apelacion/VerApelaciones.jsx';

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
        path: '/apelation/VerApelaciones',
        element: <VerApelaciones/>,
      },
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/forms',
        element: <Postulaciones />
      },
      {
        path: '/forms/:id',
        element: <Detalles />
      },
      {
        path: '/forms/myForms',
        element: <MisPostulaciones />
      },
      {
        path: '/forms/create',
        element: <Postular />
      },
    ],
  },
  {
    path: '/auth',
    element: <Login />,
  },
  {
    path: '/resultados',
    element: 

        <Resultados />
      
  },
  {
    path: '/main',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
