import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const Incidencias = () => {
  document.title = "Incidencias | Mr. Paquetes";

  const [incidencias, setIncidencias] = useState([
    {
      idPaquete: "12345",
      fechaHora: "2024-06-01 08:00 AM",
      idTipoIncidencia: 1,
      descripcion: "Paquete dañado",
      estado: "Retenido",
      fechaResolucion: "06/07/2024",
      idUsuarioReporta: 2,
      idUsuarioAsignado: 3,
      solucion: "Volver a empacar",
    },
  
  ]);

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const newIncidencias = [...incidencias];
    newIncidencias[index][name] = value;
    setIncidencias(newIncidencias);
  };

  const handleAddIncidencia = () => {
    setIncidencias([
      ...incidencias,
      {
        idPaquete: "",
        fechaHora: "",
        idTipoIncidencia: "",
        descripcion: "",
        estado: "Abierto",
        fechaResolucion: "",
        idUsuarioReporta: "",
        idUsuarioAsignado: "",
        solucion: "",
      },
    ]);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Incidencias" breadcrumbItem="Agregar Incidencias" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <Form>
                    {incidencias.map((incidencia, index) => (
                      <div key={index} className="mb-4">
                        <h5 className="mb-3">Incidencia {index + 1}</h5>
                        <Row form>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`idPaquete-${index}`}>ID Paquete</Label>
                              <Input
                                type="text"
                                id={`idPaquete-${index}`}
                                name="idPaquete"
                                value={incidencia.idPaquete}
                                onChange={(e) => handleInputChange(e, index)}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`fechaHora-${index}`}>Fecha y Hora</Label>
                              <Input
                                type="datetime-local"
                                id={`fechaHora-${index}`}
                                name="fechaHora"
                                value={incidencia.fechaHora}
                                onChange={(e) => handleInputChange(e, index)}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`idTipoIncidencia-${index}`}>Tipo de Incidencia</Label>
                              <Input
                                type="select"
                                id={`idTipoIncidencia-${index}`}
                                name="idTipoIncidencia"
                                value={incidencia.idTipoIncidencia}
                                onChange={(e) => handleInputChange(e, index)}
                              >
                                <option value="1">Daño</option>
                                <option value="2">Retraso</option>
                                <option value="3">Pérdida</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={12}>
                            <FormGroup>
                              <Label for={`descripcion-${index}`}>Descripción</Label>
                              <Input
                                type="textarea"
                                id={`descripcion-${index}`}
                                name="descripcion"
                                value={incidencia.descripcion}
                                onChange={(e) => handleInputChange(e, index)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`estado-${index}`}>Estado</Label>
                              <Input
                                type="select"
                                id={`estado-${index}`}
                                name="estado"
                                value={incidencia.estado}
                                onChange={(e) => handleInputChange(e, index)}
                              >
                                <option value="Abierto">Abierto</option>
                                <option value="En Proceso">En Proceso</option>
                                <option value="Cerrado">Cerrado</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`fechaResolucion-${index}`}>Fecha Resolución</Label>
                              <Input
                                type="datetime-local"
                                id={`fechaResolucion-${index}`}
                                name="fechaResolucion"
                                value={incidencia.fechaResolucion}
                                onChange={(e) => handleInputChange(e, index)}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`idUsuarioReporta-${index}`}>Usuario que Reporta</Label>
                              <Input
                                type="select"
                                id={`idUsuarioReporta-${index}`}
                                name="idUsuarioReporta"
                                value={incidencia.idUsuarioReporta}
                                onChange={(e) => handleInputChange(e, index)}
                              >
                                <option value="1">Usuario 1</option>
                                <option value="2">Usuario 2</option>
                                <option value="3">Usuario 3</option>
                              </Input>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={4}>
                            <FormGroup>
                              <Label for={`idUsuarioAsignado-${index}`}>Usuario Asignado</Label>
                              <Input
                                type="select"
                                id={`idUsuarioAsignado-${index}`}
                                name="idUsuarioAsignado"
                                value={incidencia.idUsuarioAsignado}
                                onChange={(e) => handleInputChange(e, index)}
                              >
                                <option value="1">Usuario 1</option>
                                <option value="2">Usuario 2</option>
                                <option value="3">Usuario 3</option>
                              </Input>
                            </FormGroup>
                          </Col>
                          <Col md={8}>
                            <FormGroup>
                              <Label for={`solucion-${index}`}>Solución</Label>
                              <Input
                                type="textarea"
                                id={`solucion-${index}`}
                                name="solucion"
                                value={incidencia.solucion}
                                onChange={(e) => handleInputChange(e, index)}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <div className="d-flex ">
                          <Button color="primary" onClick={handleAddIncidencia} className="me-2">
                            Agregar Incidencia
                          </Button>
                          <Link to="/GestionIncidentes" className="btn btn-secondary btn-lg ms-2">
                            Cancelar
                          </Link>
                        </div>
                      </div>
                    ))}
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Incidencias;
