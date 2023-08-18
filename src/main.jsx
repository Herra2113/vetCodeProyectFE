import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import IndexPages from './pages/index/IndexPages';
import ErrorPage404 from './pages/Error404/ErrorPage404';
import Cachorros from './components/DetallesplanCachorros/Cachorros';
import Adultos from './components/Detallesplanadultos/Adultos';
import Madurando from './components/Detallesplanmadurando/DetallesplanMadurando'
import LoginPages from './pages/Login/LoginPage';

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
    path: "/*",
    element: <ErrorPage404 />,
  },
  {
    path: "/login",
    element: <LoginPages />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>,
);
