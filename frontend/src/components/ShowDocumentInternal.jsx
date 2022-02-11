import React from "react";
import { PDFDownloadLink, PDFViewer } from "@react-pdf/renderer";
import { PdfDocument } from "./PdfDocument";
import { useFetch } from "../customHooks/useFetch";
import { PdfDocumentInternal } from "./PdfDocumentInternal";

export const ShowDocumentInternal = ({ url }) => {
  const { data, loading } = useFetch(url);

  console.log(data, loading);
  return loading ? (
    "Cargando...."
  ) : (
    <div>
      <PDFDownloadLink
        document={
          <PdfDocumentInternal data={data} />
          // ? <PdfDocument data={data} /> : ""
        }
        fileName="sugerencias internas.pdf"
      >
        <button className="btn btn-danger mb-3">Descargar PDF</button>
      </PDFDownloadLink>

      {/* <div style={{ minHeight: "100vh" }}>
        <PDFViewer style={{ width: "100%", height: "90vh" }}>
          <PdfDocument />
        </PDFViewer>
      </div> */}
    </div>
  );
};
