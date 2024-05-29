import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionEmpleados = () => {
  document.title = "Empleados | Nombre de tu Aplicación";

  const [empleados, setEmpleados] = useState([
    {
      id: 1,
      nombre: "Luis Gómez",
      email: "luis@example.com",
      departamento: "Recursos Humanos",
      telefono: "555-987-6543",
      fechaRegistro: "2024-05-24",
    },
    {
      id: 2,
      nombre: "Marta López",
      email: "marta@example.com",
      departamento: "Finanzas",
      telefono: "123-456-7890",
      fechaRegistro: "2024-05-23",
    },
    // Puedes agregar más empleados aquí
  ]);

  // Función para eliminar un empleado
  const eliminarEmpleado = (idEmpleado) => {
    // Actualizar el estado filtrando el empleado a eliminar
    const nuevosEmpleados = empleados.filter(empleado => empleado.id !== idEmpleado);
    setEmpleados(nuevosEmpleados);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Empleados" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>Nombre</th>
                          <th>Email</th>
                          <th>Departamento</th>
                          <th>Teléfono</th>
                          <th>Fecha de Registro</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {empleados.map(empleado => (
                          <tr key={empleado.id}>
                            <td>{empleado.id}</td>
                            <td>{empleado.nombre}</td>
                            <td>{empleado.email}</td>
                            <td>{empleado.departamento}</td>
                            <td>{empleado.telefono}</td>
                            <td>{empleado.fechaRegistro}</td>
                            <td>
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => eliminarEmpleado(empleado.id)}
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                              <Link to={`/editar-empleado/${empleado.id}`} className="btn btn-icon btn-primary">
                                <i className="fas fa-pencil-alt"></i>
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="text-lg-end mt-3">
                <Link to="/AgregarEmpleados" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Empleado
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GestionEmpleados;
