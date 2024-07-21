import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import "/src/styles/Empleados.css";

const TablaEmpleados = ({ empleados, eliminarEmpleado, toggleModalEditar }) => (

  <div className="table-responsive" style={{ marginTop: "-10px" }}> 
    <table className="table table-centered table-nowrap mb-0">
      <thead className="thead-light">
        <tr>
          <th>ID</th>
          <th>Nombres</th>
          <th>Apellidos</th>
          <th>Email</th>
          <th>Cargo</th>
          <th>Teléfono</th>
          <th>Fecha de Contratación</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {empleados.map(empleado => (
          <tr key={empleado.id}>
            <td>{empleado.id}</td>
            <td>{empleado.nombres}</td>
            <td>{empleado.apellidos}</td>
            <td>{empleado.email}</td>
            <td>{empleado.id_cargo}</td>
            <td>{empleado.telefono}</td>
            <td>{empleado.fecha_contratacion}</td>
            <td>
              <div className="button-container">
                <Button
                  className="me-2 btn-icon btn-danger"
                  onClick={() => eliminarEmpleado(empleado.id)}
                >
                  <FontAwesomeIcon icon={faTimes} />
                </Button>
                <Button
                  className="btn-icon btn-primary"
                  onClick={() => toggleModalEditar(empleado)}
                >
                  <FontAwesomeIcon icon={faPencilAlt} />
                </Button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

TablaEmpleados.propTypes = {
  empleados: PropTypes.array.isRequired,
  eliminarEmpleado: PropTypes.func.isRequired,
  toggleModalEditar: PropTypes.func.isRequired,
};

export default TablaEmpleados;
