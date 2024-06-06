import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const AgregarRutas = ({ history }) => {
  document.title = "Agregar Ruta | Mr. Paquetes";

  const [ruta, setRuta] = useState({
    id_destino: "",
    nombre: "",
    id_bodega: "",
    id_estado: "",
    distancia_km: "",
    duracion_aproximada: "",
    fecha_programada: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevaRuta = {
      ...ruta,
      id: Math.floor(Math.random() * 1000) + 1,
    };
    console.log("Nueva Ruta:", nuevaRuta);

    history.push("/gestionrutas");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = value === "" ? null : value;
    setRuta({ ...ruta, [name]: newValue });
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Rutas" breadcrumbItem="Agregar Ruta" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="id_destino">Destino</Label>
                          <Input type="text" id="id_destino" name="id_destino" placeholder="Ingrese el destino" value={ruta.id_destino || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="nombre">Nombre</Label>
                          <Input type="text" id="nombre" name="nombre" placeholder="Ingrese el nombre" value={ruta.nombre || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="id_bodega">Bodega</Label>
                          <Input type="text" id="id_bodega" name="id_bodega" placeholder="Ingrese la bodega" value={ruta.id_bodega || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="id_estado">Estado</Label>
                          <Input type="text" id="id_estado" name="id_estado" placeholder="Ingrese el estado" value={ruta.id_estado || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="distancia_km">Distancia (km)</Label>
                          <Input type="text" id="distancia_km" name="distancia_km" placeholder="Ingrese la distancia" value={ruta.distancia_km || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="duracion_aproximada">Duración Aprox. (hrs)</Label>
                          <Input type="text" id="duracion_aproximada" name="duracion_aproximada" placeholder="Ingrese la duración" value={ruta.duracion_aproximada || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fecha_programada">Fecha Programada</Label>
                          <Input type="date" id="fecha_programada" name="fecha_programada" placeholder="Seleccione la fecha" value={ruta.fecha_programada || ""} onChange={handleInputChange} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Ruta
                    </Button>
                    <Link to="/GestionRutas" className="btn btn-secondary btn-lg ms-2">Cancelar</Link>
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

export default AgregarRutas;
