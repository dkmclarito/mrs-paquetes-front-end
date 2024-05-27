import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "./AgregarClientes.css";

const departamentos = [
  { nombre: "San Salvador", municipios: ["San Salvador", "Soyapango", "Mejicanos"] },
  { nombre: "La Libertad", municipios: ["Santa Tecla", "Antiguo Cuscatlán", "Zaragoza"] },
  // Agrega todos los departamentos y sus municipios
];

const AgregarClientes = () => {
  document.title = "Agregar Cliente | Nombre de tu Aplicación";

  // Estados para los campos del formulario
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [esEmpresa, setEsEmpresa] = useState(false);
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [dui, setDui] = useState("");
  const [tipoPersona, setTipoPersona] = useState("");
  const [telefono, setTelefono] = useState("");
  const [contribuyente, setContribuyente] = useState("");
  const [genero, setGenero] = useState("");
  const [estado, setEstado] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState(new Date().toISOString().slice(0, 16));
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías realizar la lógica para enviar los datos del formulario a la base de datos
    // Luego podrías redirigir a la página de listado de clientes o mostrar un mensaje de éxito
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
                  <h4 className="card-title mb-4 text-primary">Agregar Cliente</h4>
                  <Form onSubmit={handleSubmit}>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="nombre">Nombres</Label>
        <Input type="text" id="nombre" placeholder="Ingrese los nombres del cliente" value={nombre} onChange={(e) => setNombre(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="apellidos">Apellidos</Label>
        <Input type="text" id="apellidos" placeholder="Ingrese los apellidos del cliente" value={apellidos} onChange={(e) => setApellidos(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="email">Correo</Label>
        <Input type="email" id="email" placeholder="Ingrese el correo del cliente" value={email} onChange={(e) => setEmail(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="dui">DUI</Label>
        <Input type="text" id="dui" placeholder="Ingrese el DUI del cliente" value={dui} onChange={(e) => setDui(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="telefono">Teléfono</Label>
        <Input type="tel" id="telefono" placeholder="Ingrese el teléfono del cliente" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="tipoPersona">Tipo de Persona</Label>
        <Input type="select" id="tipoPersona" value={tipoPersona} onChange={(e) => setTipoPersona(e.target.value)} required className="form-control-lg">
          <option value="">Seleccione</option>
          <option value="natural">Natural</option>
          <option value="juridica">Jurídica</option>
        </Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="contribuyente">Contribuyente</Label>
        <Input type="select" id="contribuyente" value={contribuyente} onChange={(e) => setContribuyente(e.target.value)} required className="form-control-lg">
          <option value="">Seleccione</option>
          <option value="si">Sí</option>
          <option value="no">No</option>
        </Input>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="genero">Género</Label>
        <Input type="select" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required className="form-control-lg">
          <option value="">Seleccione</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
        </Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="estado">Estado</Label>
        <Input type="select" id="estado" value={estado} onChange={(e) => setEstado(e.target.value)} required className="form-control-lg">
          <option value="">Seleccione</option>
          <option value="activo">Activo</option>
          <option value="inactivo">Inactivo</option>
        </Input>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup check>
        <Input type="checkbox" id="esEmpresa" checked={esEmpresa} onChange={(e) => setEsEmpresa(e.target.checked)} />
        <Label for="esEmpresa" check>¿Es empresa?</Label>
      </FormGroup>
      {esEmpresa && (
        <FormGroup>
          <Label for="nombreEmpresa">Nombre de la Empresa</Label>
          <Input type="text" id="nombreEmpresa" placeholder="Ingrese el nombre de la empresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} className="form-control-lg"/>
        </FormGroup>
      )}
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="fechaRegistro">Fecha de Registro</Label>
        <Input type="datetime-local" id="fechaRegistro" value={fechaRegistro} onChange={(e) => setFechaRegistro(e.target.value)} required className="form-control-lg"/>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="departamento">Departamento</Label>
        <Input type="select" id="departamento" value={departamento} onChange={(e) => setDepartamento(e.target.value)} required className="form-control-lg">
          <option value="">Seleccione</option>
          {departamentos.map((dpto, index) => (
            <option key={index} value={dpto.nombre}>{dpto.nombre}</option>
          ))}
        </Input>
      </FormGroup>
    </Col>
  </Row>
  <Row form>
    <Col md={6}>
      <FormGroup>
        <Label for="municipio">Municipio</Label>
        <Input type="select"
 id="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required className="form-control-lg">
 <option value="">Seleccione</option>
 {departamento && departamentos.find(d => d.nombre === departamento).municipios.map((muni, index) => (
   <option key={index} value={muni}>{muni}</option>
 ))}
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

export default AgregarClientes;


