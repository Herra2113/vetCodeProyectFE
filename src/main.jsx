import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IndexPages from './pages/index/indexPages';
import AboutPage from './pages/About/AboutPage';
import ContactPage from './pages/Contact/ContactPage';
import ErrorPage404 from './pages/Error404/ErrorPage404';
import Cachorros from './components/DetallesplanCachorros/Cachorros';
import Adultos from './components/Detallesplanadultos/Adultos';
import Madurando from './components/Detallesplanmadurando/DetallesplanMadurando'

const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPages />,
  },
  {
    path: "/DetallesplanCachorros",
    element: <Cachorros/>
  },
  {
    path: "/DetallesplanMadurando",
    element: <Madurando/>
  },
  {
    path: "/DetallesplanAdultos",
    element: <Adultos/>
  },
  {
    path: "/error404",
    element: <ErrorPage404 />,
<<<<<<< HEAD
  },
  
  {
    path: "/Nosotros",
    element: <AboutPage />,
  },

  {
    path: "/Contacto",
    element: <ContactPage />,
  },
=======

  }
>>>>>>> 80cf215aedbfed7d85175db07fe4a68b7b995ba5
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
);
