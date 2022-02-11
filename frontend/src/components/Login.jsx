import React, { useState } from "react";
import axios from "axios";

import "../styles/Login.css";

export const Login = () => {
  const [datos, setDatos] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    // console.log(event.target.name)
    // console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const sendDataAPi = (data) => {
    console.log("La data es:", data);
    // axios
    //   .post("http://localhost:9000/login", data, {
    //     headers: { "Access-Control-Allow-Origin": "*" },
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    // POST request using fetch()
    fetch("http://127.0.0.1:9000/login", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify(data),

      // Adding headers to the request
      headers: {
        "Access-Control-Allow-Origin": "http://localhost:9000/",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Enviando los datos...", datos);
    sendDataAPi(datos);
  };

  // const insertar = () => {
  //   fetch("http://127.0.0.1:9000/contracts", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userid: "1",
  //       planid: "1",
  //     }),

  //     // Adding headers to the request
  //     headers: {
  //       "Access-Control-Allow-Origin": "http://127.0.0.1:9000/",
  //       "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   });
  // };

  return (
    <div>
      <form action="" method="post" onSubmit={handleSubmit}>
        <div id="fondo" align="center" className="container">
          <h2>Login Screen</h2>
          <label htmlFor="">Username: </label>
          <br />
          <input type="text" name="username" onChange={handleInputChange} />
          <br />
          <label htmlFor="">Contraseña: </label>
          <br />
          <input type="password" name="password" onChange={handleInputChange} />
          <br />
          <button className="btn btn-info mt-3" type="submit">
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
