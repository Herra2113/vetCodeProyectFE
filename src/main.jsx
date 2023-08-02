import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/Comentarios/Comentarios.jsx';
import Comentario from './components/Comentarios/Comentarios.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: < indexPages />,
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
