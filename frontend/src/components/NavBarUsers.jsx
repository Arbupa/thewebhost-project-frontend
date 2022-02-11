import axios from "axios";
import React from "react";
import { Link, NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="navbar-collapse">
        <div className="navbar-nav">
          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/sugerencias/in"
          >
            Sugerencias Internas
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/sugerencias/ex"
          >
            Sugerencias Externas
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              "nav-item nav-link" + (isActive ? " active" : "")
            }
            to="/contratos"
          >
            Contratos Activos
          </NavLink>
        </div>
      </div>

      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <span className="nav-item nav-link text-info">Arnoldo</span>
          <a
            className="nav-item nav-link btn"
            href="http://localhost:3000/login"
          >
            Logout
          </a>
          Logout
        </ul>
      </div>
    </nav>
  );
};
