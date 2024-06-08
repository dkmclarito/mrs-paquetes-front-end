import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import "../style.css";
//import AgregarOrden from "./ListadoOrden";

const NuevaOrden = () => {
  document.title = "Agregar Orden | Mr. Paquetes";

  // Datos quemados para IDS
  const clienteEntrega = ["Jose Ortiz", "Eusebio Coca", "Gerardo Ortiz"];
  const clienteRecibe = ["Santos Membreño", "Jessica Díaz", "Emeli Sofía"];
  const TipoEntrega = ["Estándar", "Urgente"];
  const TipoPago = ["Contra Entrega", "Otro"];
  const EstadoPaquete = ["En tránsito", "Entregado", "En Bodega"];
  const ValidacionEntrega = ["Con firma", "Sin Firma"];

 
  const [clienteQueEntrega, setClienteEntrega] = useState("");
  const [telefono, setTelefono] = useState("");
  const [clienteQueRecibe, setclienteRecibe] = useState("");
  const [instruccionEntrega, setInstruccionEntrega] = useState("");
  const [tipoDeEntrega, setTipoEntrega] = useState("");
  const [precioEnv, setPrecio] = useState("");
  const [direccion, setDireccion] = useState("");
  const [costoAdicional, setCostoAdicional] = useState("");
  const [TipoDePago, setTipoPago] = useState("");
  const [estadoDePaquete, setEstadoPaquete] = useState("");
  const [ValidacionDeEntrega, setValidacionDeEntrega] = useState("");
  const [fechaIngreso, setFechaIngreso] = useState("");
  const [fechaEntrega, setFechaEntrega] = useState("");
  

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Ordenes" breadcrumbItem="Agregar Orden" />
          <Row>
            <Col lg={12}>
              <h4 className="header-title mb-3">Registro de Ordenes</h4>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="clienteEntrega">A cargo de</Label>
                          <Input type="select" id="clienteEntrega" value={clienteQueEntrega} onChange={(e) => setClienteEntrega(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {clienteEntrega.map((cliE, index) => (
                              <option key={index} value={cliE}>{cliE}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="dui">Nº de cliente a cargo</Label>
                          <Input type="text" id="dui" placeholder="Ej. 7496-1667" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="clienteRecibe">Cliente que recibe</Label>
                          <Input type="select" id="clienteRecibe" value={clienteQueRecibe} onChange={(e) => setclienteRecibe(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {clienteRecibe.map((cliR, index) => (
                              <option key={index} value={cliR}>{cliR}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="direccion">Dirección de entrega</Label>
                          <Input type="text" id="direccion" placeholder="Ingrese la dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="tipoEntrega">Tipo de entrega</Label>
                          <Input type="select" id="tipoEntrega" value={tipoDeEntrega} onChange={(e) => setTipoEntrega(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {TipoEntrega.map((tipoE, index) => (
                              <option key={index} value={tipoE}>{tipoE}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="instruccionEntrega">Instruccion de entrega</Label>
                          <Input type="text" id="instruccionEntrega" placeholder="Ingrese instrucciones" value={instruccionEntrega} onChange={(e) => setInstruccionEntrega(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={4}>
                        <FormGroup className="form-group-custom">
                          <Label for="precio">Precio de envío</Label>
                          <Input type="text" id="precio" placeholder="Ingrese el precio" value={precioEnv} onChange={(e) => setPrecio(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup className="form-group-custom">
                          <Label for="costoAdicional">Costo adicional</Label>
                          <Input type="text" id="costoAdicional" placeholder="Ingrese el precio" value={costoAdicional} onChange={(e) => setCostoAdicional(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={4}>
                        <FormGroup className="form-group-custom">
                          <Label for="cargo">Tipo de pago</Label>
                          <Input type="select" id="cargo" value={TipoDePago} onChange={(e) => setTipoPago(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {TipoPago.map((tipoP, index) => (
                              <option key={index} value={tipoP}>{tipoP}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="EstadoPaquete">Estado del paquete</Label>
                          <Input type="select" id="EstadoPaquete" value={estadoDePaquete} onChange={(e) => setEstadoPaquete(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {EstadoPaquete.map((estadoP, index) => (
                              <option key={index} value={estadoP}>{estadoP}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                        <Label for="EstadoPaquete">Validación de entrega</Label>
                          <Input type="select" id="EstadoPaquete" value={ValidacionDeEntrega} onChange={(e) => setValidacionDeEntrega(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {ValidacionEntrega.map((valEnt, index) => (
                              <option key={index} value={valEnt}>{valEnt}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaIngreso">Fecha de ingreso</Label>
                          <Input type="date" id="fechaIngreso" value={fechaIngreso} onChange={(e) => setFechaIngreso(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaEntrega">Fecha de entrega</Label>
                          <Input type="date" id="fechaEntrega" value={fechaEntrega} onChange={(e) => setFechaEntrega(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                  
                   
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Orden
                    </Button>
                    <Link to="/ListadoOrden" className="btn btn-secondary btn-lg ms-2">
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

export default NuevaOrden;
