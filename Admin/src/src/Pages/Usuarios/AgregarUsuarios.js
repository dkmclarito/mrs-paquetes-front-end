import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const AgregarUsuarios = () => {
  document.title = "Agregar Usuario | Nombre de tu Aplicación";

  // Opciones para ID de Usuario y Cliente
  const opcionesID = ["0001", "0002", "0003", "0004"];

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [idUsuario, setIdUsuario] = useState("");
  const [idCliente, setIdCliente] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [verificarContraseña, setVerificarContraseña] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos a la base de datos o realizar otras acciones
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Usuarios" breadcrumbItem="Agregar Usuario" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <h4 className="card-title mb-4">Registro de Usuarios</h4>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="nombre">Nombre</Label>
                          <Input type="text" id="nombre" placeholder="Ingrese el nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="correo">Correo</Label>
                          <Input type="email" id="correo" placeholder="Ingrese el correo" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="idUsuario">ID Usuario</Label>
                          <Input type="select" id="idUsuario" value={idUsuario} onChange={(e) => setIdUsuario(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {opcionesID.map((id, index) => (
                              <option key={index} value={id}>{id}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="idCliente">ID Cliente</Label>
                          <Input type="select" id="idCliente" value={idCliente} onChange={(e) => setIdCliente(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {opcionesID.map((id, index) => (
                              <option key={index} value={id}>{id}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="contraseña">Contraseña</Label>
                          <Input type="password" id="contraseña" placeholder="Ingrese la contraseña" value={contraseña} onChange={(e) => setContraseña(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="verificarContraseña">Verificar Contraseña</Label>
                          <Input type="password" id="verificarContraseña" placeholder="Verifique la contraseña" value={verificarContraseña} onChange={(e) => setVerificarContraseña(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Usuario
                    </Button>
                    <Link to="/GestionUsuarios" className="btn btn-secondary btn-lg ms-2">
                      Cancelar
                    </Link>
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

export default AgregarUsuarios;
