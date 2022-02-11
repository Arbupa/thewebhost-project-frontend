import React from "react";
// import { Page, Text, View, Document, Image } from "@react-pdf/renderer";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfPlanes } from "./PdfPlanes";

export const Planes = () => {
  return (
    <div className="container" align="center">
      <PDFDownloadLink
        style={{ marginRight: "7px", marginTop: "7px" }}
        document={
          <PdfPlanes image="basico" />
          // ? <PdfDocument data={data} /> : ""
        }
        fileName="plan basico.pdf"
      >
        <button className="btn btn-danger mb-3">Descargar basico </button>
      </PDFDownloadLink>

      <PDFDownloadLink
        style={{ marginRight: "7px", marginTop: "7px" }}
        document={
          <PdfPlanes image="nolimite" />
          // ? <PdfDocument data={data} /> : ""
        }
        fileName="plan nolimite.pdf"
      >
        <button className="btn btn-danger mb-3">Descargar no limite </button>
      </PDFDownloadLink>

      <PDFDownloadLink
        style={{ marginRight: "7px", marginTop: "7px" }}
        document={
          <PdfPlanes image="starter" />
          // ? <PdfDocument data={data} /> : ""
        }
        fileName="plan starter.pdf"
      >
        <button className="btn btn-danger mb-3">Descargar starter </button>
      </PDFDownloadLink>
      <PDFDownloadLink
        document={
          <PdfPlanes image="avanzado" />
          // ? <PdfDocument data={data} /> : ""
        }
        fileName="plan avanzado.pdf"
      >
        <button className="btn btn-danger mb-3">Descargar avanzado </button>
      </PDFDownloadLink>

      <div className="container">
        <img src="/assets/planes/planestotales.png" alt="lista de planes" />
      </div>
    </div>
  );
};
