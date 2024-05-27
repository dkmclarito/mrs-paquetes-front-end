import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
//import AgregarClientes from "./AgregarClientes"; 

const Clientes = () => {
  document.title = "Clientes | Nombre de tu Aplicación";

  // Estado para almacenar los clientes
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre: "Juan Perez",
      email: "juan@example.com",
      ubicacion: "Ciudad de México",
      telefono: "555-123-4567",
      fechaRegistro: "2024-05-24",
    },
    {
      id: 2,
      nombre: "María López",
      email: "maria@example.com",
      ubicacion: "Buenos Aires",
      telefono: "123-456-7890",
      fechaRegistro: "2024-05-23",
    },
    // Puedes agregar más clientes aquí
  ]);

  // Función para eliminar un cliente
  const eliminarCliente = (idCliente) => {
    // Actualizar el estado filtrando el cliente a eliminar
    const nuevosClientes = clientes.filter(cliente => cliente.id !== idCliente);
    setClientes(nuevosClientes);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Clientes" breadcrumbItem="Listado" />
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
                          <th>Ubicación</th>
                          <th>Teléfono</th>
                          <th>Fecha de Registro</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {clientes.map(cliente => (
                          <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.ubicacion}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.fechaRegistro}</td>
                            <td>
                            <Button
        className="me-2 btn-icon btn-danger"
        onClick={() => eliminarCliente(cliente.id)}
      >
        <i className="fas fa-times"></i>
      </Button>
      <Link to={`/editar-cliente/${cliente.id}`} className="btn btn-icon btn-primary">
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
      <Link to="/AgregarClientes" className="btn btn-primary custom-button">
        <i className="fas fa-plus"></i> Agregar Cliente
      </Link>
    </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Clientes;
