import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionClientes = () => {
  document.title = "Clientes | Mr. Paquetes";

  const [clientes, setClientes] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [clienteEditado, setClienteEditado] = useState(null);
  const [token, setToken] = useState("");
  const [confirmarEliminar, setConfirmarEliminar] = useState(false);
  const [clienteAEliminar, setClienteAEliminar] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await import("../../helpers/jwt-token-access/accessToken");
        setToken(accessToken.default);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };

    fetchToken();
  }, []);

  // Función para obtener la lista de clientes desde la API
  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/clientes", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.hasOwnProperty('clientes') && Array.isArray(responseData.clientes)) {
          setClientes(responseData.clientes);
        } else {
          console.error("Respuesta no válida para clientes:", responseData);
        }
      } catch (error) {
        console.error("Error al obtener los clientes:", error);
      }
    };

    if (token) {
      fetchClientes();
    }
  }, [token]);

  // Función para eliminar un cliente
  const eliminarCliente = async (idCliente) => {
    try {
      setConfirmarEliminar(true);
      setClienteAEliminar(idCliente);
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    }
  };

  // Función para confirmar la eliminación de un cliente
  const confirmarEliminarCliente = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/clientes/${clienteAEliminar}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        // Actualiza localmente la lista de clientes después de la eliminación
        const nuevosClientes = clientes.filter(cliente => cliente.id !== clienteAEliminar);
        setClientes(nuevosClientes);
      } else {
        console.error("Error al eliminar cliente:", response.statusText);
      }
    } catch (error) {
      console.error("Error al eliminar cliente:", error);
    } finally {
      setConfirmarEliminar(false);
      setClienteAEliminar(null);
    }
  };

  // Función para abrir el modal de edición
  const toggleModalEditar = (cliente) => {
    setClienteEditado(cliente);
    setModalEditar(!modalEditar);
  };

  // Función para guardar los cambios después de editar
  const guardarCambiosCliente = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/clientes/${clienteEditado.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(clienteEditado)
      });
      if (response.ok) {
        // Actualizar localmente el cliente editado en la lista
        const nuevosClientes = clientes.map(cliente => {
          if (cliente.id === clienteEditado.id) {
            return clienteEditado;
          }
          return cliente;
        });
        setClientes(nuevosClientes);
        setModalEditar(false); 
        setClienteEditado(null); 
      } else {
        console.error("Error al actualizar cliente:", response.statusText);
      }
    } catch (error) {
      console.error("Error al actualizar cliente:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Clientes" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <div className="text-lg-end mt-3">
                <Link to="/AgregarClientes" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Cliente
                </Link>
              </div>
            </Col>
          </Row>
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
                          <th>Apellido</th>
                          <th>Nombre Comercial</th>
                          <th>Email</th>
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
                            <td>{cliente.apellido}</td>
                            <td>{cliente.nombre_comercial}</td>
                            <td>{cliente.email}</td>
                            <td>{cliente.telefono}</td>
                            <td>{cliente.fecha_registro}</td>
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
            <Label for="apellido">Apellido</Label>
            <Input type="text" id="apellido" value={clienteEditado ? clienteEditado.apellido : ""} onChange={(e) => setClienteEditado({...clienteEditado, apellido: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="nombre_comercial">Nombre Comercial</Label>
            <Input type="text" id="nombre_comercial" value={clienteEditado ? clienteEditado.nombre_comercial : ""} onChange={(e) => setClienteEditado({...clienteEditado, nombre_comercial: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" value={clienteEditado ? clienteEditado.email : ""} onChange={(e) => setClienteEditado({...clienteEditado, email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Teléfono</Label>
            <Input type="text" id="telefono" value={clienteEditado ? clienteEditado.telefono : ""} onChange={(e) => setClienteEditado({...clienteEditado, telefono: e.target.value})} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambiosCliente}>Guardar Cambios</Button>{' '}
          <Button color="secondary" onClick={() => setModalEditar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal de confirmación antes de eliminar */}
      <Modal isOpen={confirmarEliminar} toggle={() => setConfirmarEliminar(!confirmarEliminar)}>
        <ModalHeader toggle={() => setConfirmarEliminar(!confirmarEliminar)}>Confirmar Eliminación</ModalHeader>
        <ModalBody>
          ¿Estás seguro que deseas eliminar este cliente?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmarEliminarCliente}>Eliminar</Button>{' '}
          <Button color="secondary" onClick={() => setConfirmarEliminar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GestionClientes;
