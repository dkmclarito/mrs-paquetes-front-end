import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button } from "reactstrap";
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
    // Puedes agregar más usuarios aquí
  ]);

  // Función para eliminar un usuario
  const eliminarUsuario = (idUsuario) => {
    // Actualizar el estado filtrando el usuario a eliminar
    const nuevosUsuarios = usuarios.filter(usuario => usuario.id !== idUsuario);
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
                        {usuarios.map(usuario => (
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
                              <Link to={`/editar-usuario/${usuario.id}`} className="btn btn-icon btn-primary">
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
                <Link to="/AgregarUsuarios" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Usuario
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GestionUsuarios;
