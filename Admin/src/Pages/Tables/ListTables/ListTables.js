import React, { useState } from 'react';
import { Button, Card, CardBody, Col, Container, Row } from 'reactstrap';
import Breadcrumbs from "../../../components/Common/Breadcrumb";
import { Link } from 'react-router-dom';

const ListTables = () => {
  document.title = "Destinos | Mr. Paquetes";

  const [Destinos, setDestinos] = useState([
    {
      id: 1,
      nombre: "Destino A",
      descripcion: "Destino principal de envíos",
      departamento: "San Miguel",
      municipio: "San Miguel",
      estado: "1",
    },
    {
      id: 2,
      nombre: "Destino B",
      descripcion: "Destino secundario de envíos",
      departamento: "San Miguel",
      municipio: "San Miguel",
      estado: "0",
    },
    // Puedes agregar más usuarios aquí
  ]);

  // Función para eliminar un destino
  const eliminarDestinos = (idDestino) => {
    // Actualizar el estado filtrando el destino a eliminar
    const nuevosDestinos = Destinos.filter(Destino => Destino.id !== idDestino);
    setDestinos(nuevosDestinos);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Destinos" breadcrumbItem="Listado" />
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
                          <th>Descripcion</th>
                          <th>Departamento</th>
                          <th>Municipio</th>
                          <th>Estado</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Destinos.map(Destino => {
                          // Convertir estado a número
                          const estado = Number(Destino.estado);
                          return (
                            <tr key={Destino.id}>
                              <td>{Destino.id}</td>
                              <td>{Destino.nombre}</td>
                              <td>{Destino.descripcion}</td>
                              <td>{Destino.departamento}</td>
                              <td>{Destino.municipio}</td>
                              <td>
                                {estado === 0 ? (
                                  <span className="badge badge-soft-success text-uppercase">Activo</span>
                                ) : (
                                  <span className="badge badge-soft-danger text-uppercase">Desactivo</span>
                                )}
                              </td>
                              <td>
                                <Button
                                  className="me-2 btn-icon btn-danger"
                                  onClick={() => eliminarDestinos(Destino.id)}
                                >
                                  <i className="fas fa-times"></i>
                                </Button>
                                <Link to={`/editar-Destino/${Destino.id}`} className="btn btn-icon btn-primary">
                                  <i className="fas fa-pencil-alt"></i>
                                </Link>
                              </td>
                            </tr>
                          );
                        })}
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
                <Link to="/AgregarDestinos" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Destino
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ListTables;
