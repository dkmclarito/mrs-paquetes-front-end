import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionUsuarios = () => {
  document.title = "Usuarios | Mr. Paquetes";

  const [usuarios, setUsuarios] = useState([
    {
      id: 1,
      nombre: "Carlos García",
      email: "carlos@example.com",
      rol: "Administrador",
      telefono: "555-123-4567",
      fechaRegistro: "2024-05-24",
    },
    {
      id: 2,
      nombre: "Ana Torres",
      email: "ana@example.com",
      rol: "Usuario",
      telefono: "123-456-7890",
      fechaRegistro: "2024-05-23",
    },
  ]);

  const [modalEditar, setModalEditar] = useState(false);
  const [usuarioEditado, setUsuarioEditado] = useState({
    id: null,
    nombre: "",
    email: "",
    rol: "",
    telefono: "",
    fechaRegistro: "",
  });

  const toggleModalEditar = (usuario) => {
    setUsuarioEditado(usuario);
    setModalEditar(!modalEditar);
  };

  const guardarCambios = () => {
    // Implementación para guardar los cambios en el usuario editado
    console.log("Guardando cambios:", usuarioEditado);
    // Cerrar el modal después de guardar
    setModalEditar(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUsuarioEditado({ ...usuarioEditado, [name]: value });
  };

  const eliminarUsuario = (idUsuario) => {
    // Filtrar el usuario a eliminar del estado
    const nuevosUsuarios = usuarios.filter(
      (usuario) => usuario.id !== idUsuario
    );
    setUsuarios(nuevosUsuarios);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Usuarios" breadcrumbItem="Listado" />
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
                          <th>Rol</th>
                          <th>Teléfono</th>
                          <th>Fecha de Registro</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {usuarios.map((usuario) => (
                          <tr key={usuario.id}>
                            <td>{usuario.id}</td>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.rol}</td>
                            <td>{usuario.telefono}</td>
                            <td>{usuario.fechaRegistro}</td>
                            <td>
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => eliminarUsuario(usuario.id)}
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-primary"
                                onClick={() => toggleModalEditar(usuario)}
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
                <Link
                  to="/AgregarUsuarios"
                  className="btn btn-primary custom-button"
                >
                  <i className="fas fa-plus"></i> Agregar Usuario
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal para editar usuario */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Usuario</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={usuarioEditado.nombre}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={usuarioEditado.email}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="rol">Rol</Label>
              <Input
                type="text"
                name="rol"
                id="rol"
                value={usuarioEditado.rol}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="telefono">Teléfono</Label>
              <Input
                type="text"
                name="telefono"
                id="telefono"
                value={usuarioEditado.telefono}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fechaRegistro">Fecha de Registro</Label>
              <Input
                type="text"
                name="fechaRegistro"
                id="fechaRegistro"
                value={usuarioEditado.fechaRegistro}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>{" "}
          <Button color="secondary" onClick={toggleModalEditar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GestionUsuarios;
