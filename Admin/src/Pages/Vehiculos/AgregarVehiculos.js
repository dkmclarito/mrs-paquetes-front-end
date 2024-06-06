import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const AgregarVehiculo = ({ history }) => {
  document.title = "Agregar Vehículo | Nombre de tu Aplicación";

  const [marca, setMarca] = useState("");
  const [modelo, setModelo] = useState("");
  const [año, setAño] = useState("");
  const [placa, setPlaca] = useState("");
  const [color, setColor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nuevoVehiculo = {
      id: Math.floor(Math.random() * 1000) + 1,
      marca,
      modelo,
      año,
      placa,
      color,
    };
    console.log("Nuevo Vehículo:", nuevoVehiculo);

    history.push("/vehiculos");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Vehículos" breadcrumbItem="Agregar Vehículo" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="marca">Marca</Label>
                          <Input type="text" id="marca" placeholder="Ingrese la marca del vehículo" value={marca} onChange={(e) => setMarca(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="modelo">Modelo</Label>
                          <Input type="text" id="modelo" placeholder="Ingrese el modelo del vehículo" value={modelo} onChange={(e) => setModelo(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="año">Año</Label>
                          <Input type="text" id="año" placeholder="Ingrese el año del vehículo" value={año} onChange={(e) => setAño(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="placa">Placa</Label>
                          <Input type="text" id="placa" placeholder="Ingrese la placa del vehículo" value={placa} onChange={(e) => setPlaca(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="color">Color</Label>
                          <Input type="text" id="color" placeholder="Ingrese el color del vehículo" value={color} onChange={(e) => setColor(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Vehículo
                    </Button>
                    <Link to="/GestionVehiculos" className="btn btn-secondary btn-lg ms-2">Cancelar</Link>
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

export default AgregarVehiculo;
