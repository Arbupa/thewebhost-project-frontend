import React from "react";
import { clientsInfo } from "../data/clients";
import { Card } from "./Card";

export const CardList = () => {
  //   console.log(clientsInfo);
  return (
    <div className="row rows-cols-4 row-cols-md-3 g-3">
      {clientsInfo.map((client) => (
        <Card key={client.imgSource} {...client} />
      ))}
    </div>
  );
};
