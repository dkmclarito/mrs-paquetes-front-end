import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import "../style.css";

const BusquedaVehiculos = () => {
  document.title = "Búsqueda de Vehículos";

  const [placaVehiculo, setPlacaVehiculo] = useState("");
  const [datosVehiculo, setDatosVehiculo] = useState(null);
  const [historial, setHistorial] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    buscarVehiculo(placaVehiculo);
  };

  const dataHistorial = {
    "ABC123": [
      {
        fecha: "2024-06-01",
        evento: "Ingreso al sistema",
        tipo: "Entrada",
        ubicacion: "Oficina Central",
        responsable: "Juan Pérez",
      },
      {
        fecha: "2024-06-02",
        evento: "Mantenimiento programado",
        tipo: "Mantenimiento",
        ubicacion: "Taller de Mantenimiento",
        responsable: "Técnico de Mantenimiento",
      },
      {
        fecha: "2024-06-03",
        evento: "Entrega al cliente",
        tipo: "Salida",
        ubicacion: "Oficina Central",
        responsable: "Juan Pérez",
      },
    ],
  };

  const buscarVehiculo = async (placaVehiculo) => {
    const mockDatosVehiculo = {
      placa: placaVehiculo,
      modelo: "Sedan",
      marca: "Toyota",
      color: "Gris",
      estado: "Activo",
    };
    setDatosVehiculo(mockDatosVehiculo);

    if (dataHistorial[placaVehiculo]) {
      setHistorial(dataHistorial[placaVehiculo]);
    } else {
      setHistorial([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setPlacaVehiculo(value);
    if (!value.trim()) {
      setDatosVehiculo(null);
      setHistorial([]);
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Vehículos" breadcrumbItem="Gestión" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={12}>
                        <FormGroup className="form-group-custom">
                          <Label for="placaVehiculo" className="label-no-background">Número de Placa</Label>
                          <Input
                            type="text"
                            id="placaVehiculo"
                            placeholder="Ingrese el número de placa del vehículo"
                            value={placaVehiculo}
                            onChange={handleInputChange}
                            required
                            className="form-control-lg custom-input"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Buscar
                    </Button>
                    <Link to="/" className="btn btn-secondary btn-lg ms-2">
                      Cancelar
                    </Link>
                  </Form>
                  {datosVehiculo && (
                    <div className="vehiculo-resultado mt-4">
                      <h3>Detalles del Vehículo</h3>
                      <div className="detalle-vehiculo">
                        <p><span style={{ color: '#635bff' }}>Placa:</span> <b>{datosVehiculo.placa}</b></p>
                        <p><span style={{ color: '#635bff' }}>Modelo:</span> <b>{datosVehiculo.modelo}</b></p>
                        <p><span style={{ color: '#635bff' }}>Marca:</span> <b>{datosVehiculo.marca}</b></p>
                        <p><span style={{ color: '#635bff' }}>Color:</span> <b>{datosVehiculo.color}</b></p>
                        <p><span style={{ color: '#635bff' }}>Estado:</span> <b>{datosVehiculo.estado}</b></p>
                      </div>
                    </div>
                  )}
                  {historial.length > 0 && (
                    <div className="historial-wrapper mt-4">
                      <h3>Historial del Vehículo</h3>
                      <div className="table-responsive">
                        <Table className="table-centered table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th>Fecha</th>
                              <th>Evento</th>
                              <th>Tipo</th>
                              <th>Ubicación</th>
                              <th>Responsable</th>
                            </tr>
                          </thead>
                          <tbody>
                            {historial.map((evento, index) => (
                              <tr key={index}>
                                <td>{evento.fecha}</td>
                                <td>{evento.evento}</td>
                                <td>{evento.tipo}</td>
                                <td>{evento.ubicacion}</td>
                                <td>{evento.responsable}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  )}
                  {historial.length === 0 && datosVehiculo && (
                    <p className="mt-4">No se encontraron eventos para este vehículo.</p>
                  )}
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default BusquedaVehiculos;
