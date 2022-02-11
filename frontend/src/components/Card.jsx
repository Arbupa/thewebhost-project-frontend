import React from "react";

export const Card = ({ title, imgSource, description, link }) => {
  const imageSource = `/assets/clients/${imgSource}.png`;

  return (
    <div>
      <div className="card border-info" style={{ maxWidth: "300px" }}>
        <img
          src={imageSource}
          className="card-img-top"
          alt={imgSource}
          style={{ maxHeight: "400px" }}
        />
        <div className="card-body">
          <h5 className="card-title text-muted">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={link}>Ir a su página web</a>
        </div>
      </div>
    </div>
  );
};
