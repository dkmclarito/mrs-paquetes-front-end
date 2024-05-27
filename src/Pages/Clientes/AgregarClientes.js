import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const departamentos = [
  { nombre: "San Salvador", municipios: ["San Salvador", "Soyapango", "Mejicanos"] },
  { nombre: "La Libertad", municipios: ["Santa Tecla", "Antiguo Cuscatlán", "Zaragoza"] },
];

const RegistroClientes = () => {
  document.title = "Agregar Cliente | Mr. Paquetes";

  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [email, setEmail] = useState("");
  const [dui, setDui] = useState("");
  const [tipoPersona, setTipoPersona] = useState("");
  const [contribuyente, setContribuyente] = useState("si");
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [fechaRegistro] = useState(new Date().toISOString().slice(0, 16));
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [nit, setNit] = useState("");
  const [nrc, setNrc] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [tipoCliente, setTipoCliente] = useState(""); // Nuevo estado
  const [giro, setGiro] = useState(""); // Nuevo estado

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Clientes" breadcrumbItem="Agregar Cliente" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <h4 className="card-title mb-4">Registro de Cliente</h4>
                  <Form onSubmit={handleSubmit}>
                  <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="tipoPersona">Tipo de Persona</Label>
                          <Input type="select" id="tipoPersona" value={tipoPersona} onChange={(e) => setTipoPersona(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            <option value="natural">Natural</option>
                            <option value="juridica">Jurídica</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="tipoCliente">Tipo de Cliente</Label>
                          <Input type="select" id="tipoCliente" value={tipoCliente} onChange={(e) => setTipoCliente(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            <option value="clienteA">Cliente Estrella</option>
                            <option value="clienteB">Cliente Frecuente</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    {tipoPersona === "juridica" && (
                      <>
                        <Row form>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nombreEmpresa">Nombre de la Empresa</Label>
                              <Input type="text" id="nombreEmpresa" placeholder="Ingrese el nombre de la empresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nit">NIT</Label>
                              <Input type="text" id="nit" placeholder="Ingrese el NIT de la empresa" value={nit} onChange={(e) => setNit(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nrc">NRC</Label>
                              <Input type="text" id="nrc" placeholder="Ingrese el NRC de la empresa" value={nrc} onChange={(e) => setNrc(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="giro">Giro</Label>
                              <Input type="text" id="giro" placeholder="Ingrese el giro de la empresa" value={giro} onChange={(e) => setGiro(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </>
                    )}
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="nombre">Nombres</Label>
                          <Input type="text" id="nombre" placeholder="Ingrese los nombres" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="apellidos">Apellidos</Label>
                          <Input type="text" id="apellidos" placeholder="Ingrese los apellidos" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="email">Correo</Label>
                          <Input type="email" id="email" placeholder="Ingrese el correo" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="dui">DUI</Label>
                          <Input type="text" id="dui" placeholder="Ingrese el DUI" value={dui} onChange={(e) => setDui(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="telefono">Teléfono</Label>
                          <Input type="tel" id="telefono" placeholder="Ingrese el teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="genero">Género</Label>
                          <Input type="select" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            <option value="masculino">Masculino</option>
                            <option value="femenino">Femenino</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="contribuyente">Contribuyente</Label>
                          <Input type="select" id="contribuyente" value={contribuyente} onChange={(e) => setContribuyente(e.target.value)} required className="form-control-lg custom-input">
                            <option value="si">Sí</option>
                            <option value="no">No</option>
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="direccion">Dirección</Label>
                          <Input type="text" id="direccion" placeholder="Ingrese la dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="departamento">Departamento</Label>
                          <Input type="select" id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {departamentos.map((dpto, index) => (
                              <option key={index} value={dpto.nombre}>{dpto.nombre}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="municipio">Municipio</Label>
                          <Input type="select" id="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {departamento && departamentos.find(d => d.nombre === departamento).municipios.map((muni, index) => (
                              <option key={index} value={muni}>{muni}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaRegistro">Fecha de Registro</Label>
                          <Input type="datetime-local" id="fechaRegistro" value={fechaRegistro} readOnly className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="estado">Estado</Label>
                          <Input type="select" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            <option value="activo">Activo</option>
                            <option value="inactivo">Inactivo</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
      Agregar Cliente
    </Button>
<Link to="/GestionClientes" className="btn btn-secondary btn-lg ms-2">Cancelar</Link>
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

export default RegistroClientes;
