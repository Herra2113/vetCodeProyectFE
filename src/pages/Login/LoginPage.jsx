import React from "react";
import Login from "../../components/Login/Login";
import Footer from "../../components/Footer/Footer";
import Navegacion from "../../components/common/Navbar"

const LoginPage = () => {
  return (
    <>
      <Navegacion />
      <Login />
      <Footer />
    </>
  );
};

export default LoginPage;
