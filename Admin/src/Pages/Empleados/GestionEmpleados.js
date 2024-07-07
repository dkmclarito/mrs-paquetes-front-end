import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionEmpleados = () => {
  document.title = "Empleados | Mr. Paquetes";

  const [empleados, setEmpleados] = useState([]);
  const [modalEditar, setModalEditar] = useState(false);
  const [empleadoEditado, setEmpleadoEditado] = useState(null);
  const [token, setToken] = useState("");
  const [confirmarEliminar, setConfirmarEliminar] = useState(false);
  const [empleadoAEliminar, setEmpleadoAEliminar] = useState(null);

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

  // Función para obtener la lista de empleados desde la API
  useEffect(() => {
    const fetchEmpleados = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/empleados", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.hasOwnProperty('empleados') && Array.isArray(responseData.empleados)) {
          setEmpleados(responseData.empleados);
        } else {
          console.error("Respuesta no válida para empleados:", responseData);
        }
      } catch (error) {
        console.error("Error al obtener los empleados:", error);
      }
    };

    if (token) {
      fetchEmpleados();
    }
  }, [token]);

  // Función para eliminar un empleado
  const eliminarEmpleado = async (idEmpleado) => {
    try {
     
      setConfirmarEliminar(true);
      setEmpleadoAEliminar(idEmpleado);
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    }
  };

  // Función para confirmar la eliminación de un empleado
  const confirmarEliminarEmpleado = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/empleados/${empleadoAEliminar}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      if (response.ok) {
        // Actualiza localmente la lista de empleados después de la eliminación
        const nuevosEmpleados = empleados.filter(empleado => empleado.id !== empleadoAEliminar);
        setEmpleados(nuevosEmpleados);
      } else {
        console.error("Error al eliminar empleado:", response.statusText);
      }
    } catch (error) {
      console.error("Error al eliminar empleado:", error);
    } finally {
     
      setConfirmarEliminar(false);
      setEmpleadoAEliminar(null);
    }
  };

  // Función para abrir el modal de edición
  const toggleModalEditar = (empleado) => {
    setEmpleadoEditado(empleado);
    setModalEditar(!modalEditar);
  };

  // Función para guardar los cambios después de editar
  const guardarCambiosEmpleado = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/api/empleados/${empleadoEditado.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(empleadoEditado)
      });
      if (response.ok) {
        // Actualizar localmente el empleado editado en la lista
        const nuevosEmpleados = empleados.map(empleado => {
          if (empleado.id === empleadoEditado.id) {
            return empleadoEditado;
          }
          return empleado;
        });
        setEmpleados(nuevosEmpleados);
        setModalEditar(false); 
        setEmpleadoEditado(null); 
      } else {
        console.error("Error al actualizar empleado:", response.statusText);
      }
    } catch (error) {
      console.error("Error al actualizar empleado:", error);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Empleados" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <div className="text-lg-end mt-3">
                <Link to="/AgregarEmpleados" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Empleado
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
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => eliminarEmpleado(empleado.id)}
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-primary"
                                onClick={() => toggleModalEditar(empleado)}
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

      {/* Modal para editar empleado */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Empleado</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">Nombres</Label>
            <Input type="text" id="nombre" value={empleadoEditado ? empleadoEditado.nombres : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, nombres: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="apellidos">Apellidos</Label>
            <Input type="text" id="apellidos" value={empleadoEditado ? empleadoEditado.apellidos : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, apellidos: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" value={empleadoEditado ? empleadoEditado.email : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="cargo">Cargo</Label>
            <Input type="text" id="cargo" value={empleadoEditado ? empleadoEditado.id_cargo : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, id_cargo: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Teléfono</Label>
            <Input type="text" id="telefono" value={empleadoEditado ? empleadoEditado.telefono : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, telefono: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="fecha_contratacion">Fecha de Contratación</Label>
            <Input type="date" id="fecha_contratacion" value={empleadoEditado ? empleadoEditado.fecha_contratacion : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, fecha_contratacion: e.target.value})} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambiosEmpleado}>Guardar Cambios</Button>{' '}
          <Button color="secondary" onClick={() => setModalEditar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>

      {/* Modal de confirmación antes de eliminar */}
      <Modal isOpen={confirmarEliminar} toggle={() => setConfirmarEliminar(!confirmarEliminar)}>
        <ModalHeader toggle={() => setConfirmarEliminar(!confirmarEliminar)}>Confirmar Eliminación</ModalHeader>
        <ModalBody>
          ¿Estás seguro que deseas eliminar este empleado?
        </ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={confirmarEliminarEmpleado}>Eliminar</Button>{' '}
          <Button color="secondary" onClick={() => setConfirmarEliminar(false)}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GestionEmpleados;
