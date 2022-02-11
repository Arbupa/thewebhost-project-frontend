import React from "react";
import DataTable from "react-data-table-component";
import "react-data-table-component-extensions/dist/index.css";
import ExportExcel from "react-export-excel";
import { ShowDocument } from "../components/ShowDocument";

import { useFetch } from "../customHooks/useFetch";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

const columns = [
  {
    name: "Correo",
    selector: (row) => row.email,
    sortable: true,
  },
  {
    name: "Sugerencias Externas",
    selector: (row) => row.suggestion,
    sortable: true,
  },
];

export const SuggestionListExternal = () => {
  const url = "http://localhost:9000/suggestions/ex";
  const { data, loading } = useFetch(url);
  // console.log(data, loading);

  return loading ? (
    "Cargando..."
  ) : (
    <div className="container" align="center">
      <div>
        <ExcelFile
          element={
            <button className="btn btn-success mt-5">Exportar a Excel</button>
          }
          filename="Sugerencias"
        >
          <ExcelSheet data={data} name="Sugerencias Externas">
            <ExcelColumn label="Correo" value="email" />
            <ExcelColumn label="Sugerencias" value="suggestion" />
          </ExcelSheet>
        </ExcelFile>
        {/* aqui agregar lo del boton del pdf */}
        <ShowDocument url={url} />
      </div>

      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        title="Lista de Sugerencias Externas"
        theme="default"
        highlightOnHover
        pointerOnHover
        responsive
      />
    </div>
  );
};
