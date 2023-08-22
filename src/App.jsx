/* eslint-disable react-hooks/exhaustive-deps */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import IndexPages from "./pages/index/IndexPages";
import ErrorPage404 from "./pages/Error404/ErrorPage404";
import Cachorros from "./components/DetallesplanCachorros/Cachorros";
import Adultos from "./components/Detallesplanadultos/Adultos";
import Madurando from "./components/Detallesplanmadurando/DetallesplanMadurando";
import Navegacion from "./components/common/Navbar";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import AdminPrincipal from "./pages/AdminView/AdminPrincipal";

import UpdateClient from "./pages/AdminView/UpdateClient";
import TurnosCreate from "./pages/TurnosCreate/TurnosCreate";
import TurnosEdit from "./pages/TurnosEdit/TurnosEdit";
import TurnosTabla from "./pages/TurnosTabla/TurnosTabla";
import AboutPage from "./pages/About/AboutPage";
import ContactPage from "./pages/Contact/ContactPage";
import LoginPage from "./pages/Login/LoginPage";

const App = () => {
  const [patients, setPatients] = useState([]);
  const URL = import.meta.env.VITE_API_VETERINARIA;

  const [turnos, setTurnos] = useState([]);
  const URLS = import.meta.env.VITE_API_TURNOS;

  console.log(URLS)

  const getApi = async () => {
    try {
      const response = await fetch(URL);
      const patientsApi = await response.json();
      setPatients(patientsApi);
    } catch (error) {
      console.log(error);
    }
  };
  const getAp = async () => {
    try {
      const res = await fetch(URLS);

      const turnosAp = await res.json();
      setTurnos(turnosAp);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAp();
    // getApi();
  }, []);

  return (
    <BrowserRouter>
      <Navegacion />
      <main>
        <Routes>
          <Route exact path="/" element={<IndexPages />} />
          <Route exact path="*" element={<ErrorPage404 />} />
          <Route exact path="/DetallesplanCachorros" element={<Cachorros />} />
          <Route exact path="/DetallesplanMadurando" element={<Madurando />} />
          <Route exact path="/DetallesplanAdultos" element={<Adultos />} />
          <Route exact path="/Nosotros" element={<AboutPage />} />
          <Route exact path="/Contacto" element={<ContactPage />} />
          <Route exact path="/login" element={<LoginPage />} />
          
          <Route
            exact
            path="/admin"
            element={
              <AdminPrincipal URL={URL} getApi={getApi} patients={patients} />
            }
          />
          <Route
            exact
            path="/patient/edit/:id"
            element={<UpdateClient URL={URL} getApi={getApi} />}
          />
          <Route
            exact
            path="/Turnos/Create"
            element={<TurnosCreate URLS={URLS} getAp={getAp} />}
          />
          <Route
            exact
            path="/Turnos/Edit/:id"
            element={<TurnosEdit URLS={URLS} getAp={getAp} />}
          />
          <Route
            exact
            path="/Turnos/Tabla"
            element={<TurnosTabla turnos={turnos} URLS={URLS} getAp={getAp} />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
