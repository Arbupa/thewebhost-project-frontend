import React from "react";

export const Contact = () => {
  return (
    <div
      className="container mt-5"
      align="center"
      style={{ backgroundColor: "beige" }}
    >
      <h1>Contacto</h1>
      <hr />
      <br />
      <h2>
        <strong>
          Telefono: <br />
          (844) 414 5676
        </strong>
      </h2>
      <h2>
        <strong>Correo: thebesthost@gmail.enterprise.com </strong>
      </h2>
      <a href="https://www.google.com.mx/maps/place/Best+Host+Inn+Kansas+City+South/@38.9153232,-94.5271743,17z/data=!3m2!4b1!5s0x87c0e79c1f0c1ab7:0x5c05a7e1ff3e6fe5!4m8!3m7!1s0x87c0e79ea4728df5:0x1eff9b2f0687fa8!5m2!4m1!1i2!8m2!3d38.9153232!4d-94.5249803">
        Ubicación en Maps
      </a>
    </div>
  );
};
