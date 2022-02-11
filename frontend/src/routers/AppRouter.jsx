import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContractsList } from "../components/ContractsList";

// import { Login } from "../components/Login";
import { NavBar } from "../components/NavBar";
// import { MyDocument } from "../components/MyDocument";
import { Register } from "../components/Register";
import { ShowDocument } from "../components/ShowDocument";
import { SuggestionListExternal } from "../components/SuggestionListExternal";
import { SuggestionListInternal } from "../components/SuggestionListInternal";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/documento" element={<ShowDocument />} />

        <Route
          exact
          path="/sugerencias/in"
          element={<SuggestionListInternal />}
        />
        <Route
          exact
          path="/sugerencias/ex"
          element={<SuggestionListExternal />}
        />

        <Route exact path="/contratos" element={<ContractsList />} />

        <Route path="/*" element={<DashboardRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
