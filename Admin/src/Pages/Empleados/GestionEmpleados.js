import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input } from "reactstrap";
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

  const [modalEditar, setModalEditar] = useState(false);
  const [empleadoEditado, setEmpleadoEditado] = useState(null);

  // Función para eliminar un empleado
  const eliminarEmpleado = (idEmpleado) => {
    // Actualizar el estado filtrando el empleado a eliminar
    const nuevosEmpleados = empleados.filter(empleado => empleado.id !== idEmpleado);
    setEmpleados(nuevosEmpleados);
  };

  // Función para abrir el modal de edición
  const toggleModalEditar = (empleado) => {
    setEmpleadoEditado(empleado);
    setModalEditar(!modalEditar);
  };

  // Función para guardar los cambios después de editar
  const guardarCambiosEmpleado = () => {
    // Aquí deberías implementar la lógica para guardar los cambios del empleado
    setModalEditar(false); // Cerrar el modal después de guardar cambios
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

      {/* Modal para editar empleado */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Empleado</ModalHeader>
        <ModalBody>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input type="text" id="nombre" value={empleadoEditado ? empleadoEditado.nombre : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, nombre: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" id="email" value={empleadoEditado ? empleadoEditado.email : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, email: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="departamento">Departamento</Label>
            <Input type="text" id="departamento" value={empleadoEditado ? empleadoEditado.departamento : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, departamento: e.target.value})} />
          </FormGroup>
          <FormGroup>
            <Label for="telefono">Teléfono</Label>
            <Input type="text" id="telefono" value={empleadoEditado ? empleadoEditado.telefono : ""} onChange={(e) => setEmpleadoEditado({...empleadoEditado, telefono: e.target.value})} />
          </FormGroup>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambiosEmpleado}>Guardar Cambios</Button>{' '}
          <Button color="secondary" onClick={toggleModalEditar}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GestionEmpleados;
