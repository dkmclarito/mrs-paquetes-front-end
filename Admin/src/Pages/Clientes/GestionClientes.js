import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const Clientes = () => {
  document.title = "Clientes | Nombre de tu Aplicación";

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
  ]);

  const [modalEditar, setModalEditar] = useState(false);
  const [clienteEditado, setClienteEditado] = useState(null);

  const eliminarCliente = (idCliente) => {
    const nuevosClientes = clientes.filter(cliente => cliente.id !== idCliente);
    setClientes(nuevosClientes);
  };

  const toggleModalEditar = (cliente) => {
    setClienteEditado(cliente);
    setModalEditar(!modalEditar);
  };

  const guardarCambiosCliente = () => {
    // Aqui pondríamos la APi
    setModalEditar(false);
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
                              <Button
                                className="btn-icon btn-primary"
                                onClick={() => toggleModalEditar(cliente)}
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </Button>
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

      {/* Modal para editar cliente */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Cliente</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input type="text" id="nombre" value={clienteEditado ? clienteEditado.nombre : ""} onChange={(e) => setClienteEditado({...clienteEditado, nombre: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" value={clienteEditado ? clienteEditado.email : ""} onChange={(e) => setClienteEditado({...clienteEditado, email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="ubicacion">Ubicación</Label>
            <Input type="text" id="ubicacion" value={clienteEditado ? clienteEditado.ubicacion : ""} onChange={(e) => setClienteEditado({...clienteEditado, ubicacion: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Teléfono</Label>
            <Input type="text" id="telefono" value={clienteEditado ? clienteEditado.telefono : ""} onChange={(e) => setClienteEditado({...clienteEditado, telefono: e.target.value})} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambiosCliente}>Guardar Cambios</Button>{' '}
          <Button color="secondary" onClick={toggleModalEditar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default Clientes;
