import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { Clients } from "../components/Clients";
import { Company } from "../components/Company";
import { Contact } from "../components/Contact";
import { Login } from "../components/Login";
import { Planes } from "../components/Planes";
import { Services } from "../components/Services";
import { Solutions } from "../components/Solutions";
// import { TopPage } from "../components/TopPage";

import "../styles/App.css";

export const DashboardRoutes = () => {
  return (
    <>
      <div className="container">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="contacto" element={<Contact />} />
          <Route exact path="clientes" element={<Clients />} />
          <Route exact path="soluciones" element={<Solutions />} />
          <Route exact path="servicios" element={<Services />} />
          <Route exact path="compania" element={<Company />} />
          <Route exact path="planes" element={<Planes />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
        </Routes>
      </div>
    </>
  );
};
