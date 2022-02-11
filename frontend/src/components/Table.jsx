import DataTable from "react-data-table-component";
import { useFetch } from "../customHooks/useFetch";

export const Table = ({ url, title, theme, headerTable }) => {
  const { data, loading } = useFetch(url);
  console.log(data, loading);

  //   console.log(headerAux + "Hola");
  const columns = [
    {
      name: headerTable,
      selector: (row) => row.headerAux,
      sortable: true,
    },
    {
      name: "Sugerencia",
      selector: (row) => row.suggestion,
      sortable: true,
    },
  ];

  return loading ? (
    "Cargando..."
  ) : (
    <div className="container">
      <DataTable
        columns={columns}
        data={data}
        pagination
        selectableRows
        title={title}
        theme={theme}
        highlightOnHover
        pointerOnHover
        responsive
      />
    </div>
  );
};
