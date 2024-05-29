import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";

const AgregarEmpleado = () => {
  document.title = "Agregar Empleado | Nombre de tu Aplicación";

  // Opciones para el género y el cargo
  const generos = ["Masculino", "Femenino", "Otro"];
  const cargos = ["Gerente", "Supervisor", "Analista", "Asistente"];

  // Datos quemados de departamentos y municipios de El Salvador
  const departamentos = ["San Salvador", "La Libertad", "Santa Ana", "San Miguel", "Sonsonate"];
  const municipiosPorDepartamento = {
    "San Salvador": ["San Salvador", "Santa Tecla", "Mejicanos", "Antiguo Cuscatlán"],
    "La Libertad": ["Santa Tecla", "Antiguo Cuscatlán", "La Libertad", "Colón"],
    "Santa Ana": ["Santa Ana", "Metapán", "Chalchuapa", "Atiquizaya"],
    "San Miguel": ["San Miguel", "Usulután", "San Rafael Oriente", "El Tránsito"],
    "Sonsonate": ["Sonsonate", "Izalco", "Nahuizalco", "Acajutla"]
  };

  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [genero, setGenero] = useState("");
  const [dui, setDui] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [fechaContratacion, setFechaContratacion] = useState("");
  const [salario, setSalario] = useState("");
  const [cargo, setCargo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes realizar la lógica para enviar los datos a la base de datos o realizar otras acciones
  };

  const handleDepartamentoChange = (e) => {
    const selectedDepartamento = e.target.value;
    setDepartamento(selectedDepartamento);
    setMunicipio("");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Empleados" breadcrumbItem="Agregar Empleado" />
          <Row>
            <Col lg={12}>
              <h4 className="header-title mb-3">Registro de Empleados</h4>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="nombres">Nombres</Label>
                          <Input type="text" id="nombres" placeholder="Ingrese los nombres" value={nombres} onChange={(e) => setNombres(e.target.value)} required className="form-control-lg custom-input" />
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
                          <Label for="genero">Género</Label>
                          <Input type="select" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {generos.map((gen, index) => (
                              <option key={index} value={gen}>{gen}</option>
                            ))}
                          </Input>
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
                          <Input type="text" id="telefono" placeholder="Ingrese el teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control-lg custom-input" />
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
                          <Label for="fechaNacimiento">Fecha de Nacimiento</Label>
                          <Input type="date" id="fechaNacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaContratacion">Fecha de Contratación</Label>
                          <Input type="date" id="fechaContratacion" value={fechaContratacion} onChange={(e) => setFechaContratacion(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="salario">Salario</Label>
                          <Input type="text" id="salario" placeholder="Ingrese el salario" value={salario} onChange={(e) => setSalario(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="cargo">Cargo</Label>
                          <Input type="select" id="cargo" value={cargo} onChange={(e) => setCargo(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {cargos.map((cargo, index) => (
                              <option key={index} value={cargo}>{cargo}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="direccion">Dirección</Label>
                          <Input type="text" id="direccion" placeholder="Ingrese la dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="departamento">Departamento</Label>
                          <Input type="select" id="departamento" value={departamento} onChange={handleDepartamentoChange} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {departamentos.map((depto, index) => (
                              <option key={index} value={depto}>{depto}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="municipio">Municipio</Label>
                          <Input type="select" id="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {municipiosPorDepartamento[departamento] && municipiosPorDepartamento[departamento].map((mun, index) => (
                              <option key={index} value={mun}>{mun}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Empleado
                    </Button>
                    <Link to="/GestionEmpleados" className="btn btn-secondary btn-lg ms-2">
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

export default AgregarEmpleado;
