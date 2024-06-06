import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionIncidentes = () => {
  document.title = "Incidentes | Nombre de tu Aplicación";

  const [incidentes, setIncidentes] = useState([
    {
      id: 1,
      idPaquete: "12345",
      fechaHora: "2024-06-01 08:00 AM",
      tipoIncidencia: "Paquete dañado",
      descripcion: "Paquete dañado",
      estado: "Reportado",
      fechaResolucion: "2024-06-07 09:00 AM",
      usuarioReporta: "Juan Pérez",
      usuarioAsignado: "Ana López",
      solucion: "Volver a empacar",
    },
    {
      id: 2,
      idPaquete: "67890",
      fechaHora: "2024-06-02 10:00 AM",
      tipoIncidencia: "Retraso en entrega",
      descripcion: "Retraso en entrega",
      estado: "En Proceso",
      fechaResolucion: "2024-06-10 05:00 PM",
      usuarioReporta: "María García",
      usuarioAsignado: "Carlos Rodríguez",
      solucion: "Contactar nuevamente al cliente",
    },

  ]);

  // Función para eliminar un incidente
  const eliminarIncidente = (idIncidente) => {
    // Actualizar el estado filtrando el incidente a eliminar
    const nuevosIncidentes = incidentes.filter((incidente) => incidente.id !== idIncidente);
    setIncidentes(nuevosIncidentes);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Incidentes" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>ID Paquete</th>
                          <th>Fecha y Hora</th>
                          <th>Tipo de Incidencia</th>
                          <th>Descripción</th>
                          <th>Estado</th>
                          <th>Fecha Resolución</th>
                          <th>Usuario Reporta</th>
                          <th>Usuario Asignado</th>
                          <th>Solución</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {incidentes.map((incidente) => (
                          <tr key={incidente.id}>
                            <td>{incidente.id}</td>
                            <td>{incidente.idPaquete}</td>
                            <td>{incidente.fechaHora}</td>
                            <td>{incidente.tipoIncidencia}</td>
                            <td>{incidente.descripcion}</td>
                            <td>{incidente.estado}</td>
                            <td>{incidente.fechaResolucion}</td>
                            <td>{incidente.usuarioReporta}</td>
                            <td>{incidente.usuarioAsignado}</td>
                            <td>{incidente.solucion}</td>
                            <td>
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => eliminarIncidente(incidente.id)}
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                              <Link to={`/editar-incidente/${incidente.id}`} className="btn btn-icon btn-primary">
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
                <Link to="/Incidentes" className="btn btn-primary custom-button">
                  <i className="fas fa-plus"></i> Agregar Incidente
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GestionIncidentes;