import React from "react";
// import ReactHTMLTableToExcel from "react-html-table-to-excel";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import ExportExcel from "react-export-excel";

import { useFetch } from "../customHooks/useFetch";

const ExcelFile = ExportExcel.ExcelFile;
const ExcelSheet = ExportExcel.ExcelSheet;
const ExcelColumn = ExportExcel.ExcelColumn;

export const SuggestionList = () => {
  const url = "http://localhost:9000/suggestions/in";
  const { data, loading } = useFetch(url);

  return (
    <div>
      <ExcelFile
        element={<button>Exportar a Excel</button>}
        filename="Sugerencias"
      >
        <ExcelSheet data={data} name="Hoja de Sugerencias">
          <ExcelColumn label="User ID" value="userID" />
          <ExcelColumn label="Sugerencias" value="suggestion" />
        </ExcelSheet>
      </ExcelFile>
    </div>
  );
  // console.log(data, loading);

  // const columns = [
  //   {
  //     name: "User ID",
  //     selector: (row) => row.userID,
  //     sortable: true,
  //   },
  //   {
  //     name: "Sugerencia",
  //     selector: (row) => row.suggestion,
  //     sortable: true,
  //   },
  // ];

  // const tableData = {
  //   columns,
  //   data,
  // };

  // return loading ? (
  //   "Cargando..."
  // ) : (
  //   <DataTableExtensions {...tableData}>
  //     {/* <div align="center">
  //       <h2>Suggestion List (EXCEL)</h2>
  //       <ReactHTMLTableToExcel
  //         id="export-button"
  //         className="btn btn-success"
  //         table="extern-list"
  //         filename="Lista Sugerencias"
  //         sheet="Hoja de sugerencias"
  //         buttonText="Exportar a Excel"
  //       />
  //     </div> */}

  //     {/* <div className="container"> */}
  //     <DataTable
  //       id="extern-list"
  //       columns={columns}
  //       data={data}
  //       pagination
  //       selectableRows
  //       title="Lista de Sugerencias LA NORMAL"
  //       theme="dark"
  //       highlightOnHover
  //       pointerOnHover
  //       responsive
  //     />
  //     {/* </div> */}
  //   </DataTableExtensions>
  // );
  // return (
  //   <>
  //     <div align="center">
  //       <h2>Suggestion List (EXCEL)</h2>
  //       <ReactHTMLTableToExcel
  //         id="export-button"
  //         className="btn btn-success"
  //         table="companies-table"
  //         filename="Lista Sugerencias"
  //         sheet="Hoja de sugerencias"
  //         buttonText="Exportar a Excel"
  //       />
  //     </div>

  //     <br />

  //   </>
};
