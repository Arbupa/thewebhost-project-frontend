import React from "react";
import {
  Table,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import { useFetch } from "../customHooks/useFetch";

export const ContractsList = () => {
  const url = "http://localhost:9000/contracts";
  const { data, loading } = useFetch(url);

  const handleInputChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  console.log(data);

  return loading ? (
    "Cargando..."
  ) : (
    <div className="container">
      <h2>Tabla de Contratos</h2>

      <Table className="table-info">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Plan ID</th>
            <th>User ID</th>
            <th>Date Initial</th>
            <th>Date Expiration</th>
            <th>Acciones</th>
          </tr>
        </thead>

        <tbody>
          {/* <td>Mi data</td>
            <td>lalala</td> */}
          {data.map((row, index) => {
            return (
              <tr>
                <td key={`${row.planid}+ ${row.userid}`}>{row.id}</td>
                <td key={`${row.planid}+ ${row.userid}`}>{row.planid}</td>
                <td key={`${row.planid}+ ${row.userid}`}>{row.userid}</td>
                <td key={`${row.planid}+ ${row.userid}`}>{row.datecon}</td>
                <td key={`${row.planid}+ ${row.userid}`}>{row.dateexp}</td>
                <td>
                  <button className="btn btn-warning">Editar</button>{" "}
                  <button className="btn btn-danger">Eliminar</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* 
      <Modal isOpen={this.state.modalActualizar}>
        <ModalHeader>
          <div>
            <h3>Editar Registro</h3>
          </div>
        </ModalHeader>

        <ModalBody>
          <FormGroup>
            <label>ID:</label>

            <input
              className="form-control"
              readOnly
              type="text"
              value={this.state.form.id}
            />
          </FormGroup>

          <FormGroup>
            <label>Plan ID:</label>
            <input
              className="form-control"
              name="planID"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.form.personaje}
            />
          </FormGroup>

          <FormGroup>
            <label>UserID:</label>
            <input
              className="form-control"
              name="userId"
              type="text"
              onChange={this.handleInputChange}
              value={this.state.form.anime}
            />
          </FormGroup>
        </ModalBody>

        <ModalFooter>
          <Button color="primary" onClick={() => this.editar(this.state.form)}>
            Editar
          </Button>
          <Button color="danger" onClick={() => this.cerrarModalActualizar()}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal> */}
    </div>
  );
};
