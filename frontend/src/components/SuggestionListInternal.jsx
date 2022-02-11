import React, { useEffect, useState } from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { useFetch } from "../customHooks/useFetch";
import { ShowDocumentInternal } from "../components/ShowDocumentInternal";

import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import ExportExcel from "react-export-excel";
import { useCounter } from "../customHooks/useCounter";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

export const SuggestionListInternal = () => {
  const url = "http://localhost:9000/suggestions/in";
  const { data, loading } = useFetch(url);

  // const { counter, increment } = useCounter();
  // console.log(data, loading);
  const [counter, setCounter] = useState(0);

  const columns = [
    {
      name: "User ID",
      selector: (row) => row.userID,
      sortable: true,
    },
    {
      name: "Sugerencias Internas",
      selector: (row) => row.suggestion,
      sortable: true,
    },
  ];

  return loading ? (
    "Cargando..."
  ) : (
    <>
      <div align="center">
        <h2>Usuarios conectados: {counter}</h2>
        <div>
          <ExcelFile
            element={
              <button className="btn btn-success">Exportar a Excel</button>
            }
            filename="Sugerencias"
          >
            <ExcelSheet data={data} name="Sugerencias Internas">
              <ExcelColumn label="User ID" value="userID" />
              <ExcelColumn label="Sugerencias" value="suggestion" />
            </ExcelSheet>
          </ExcelFile>
          <ShowDocumentInternal url={url} />
        </div>
      </div>

      <div className="container">
        <DataTable
          columns={columns}
          data={data}
          pagination
          selectableRows
          title="Lista de Sugerencias Internas"
          theme="dark"
          highlightOnHover
          pointerOnHover
          responsive
        />
      </div>
    </>
  );
};
