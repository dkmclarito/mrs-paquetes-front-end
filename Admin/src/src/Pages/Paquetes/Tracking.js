import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Form, FormGroup, Label, Input, Table } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
import "../style.css";

const TrackingPage = () => {
  document.title = "Seguimiento de Paquetes | Mr. Paquetes";

  const [trackingNumber, setTrackingNumber] = useState("");
  const [trackingData, setTrackingData] = useState(null);
  const [historial, setHistorial] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleTrack(trackingNumber);
  };

  const dataHistorial = {
    "12345": [
      {
        fecha: "2024-05-20",
        evento: "Recepción",
        clienteEnvio: "Juan Pérez",
        clienteRecibo: "María García",
        transportista: "Transportes XYZ",
      },
      {
        fecha: "2024-05-22",
        evento: "En Bodega",
        clienteEnvio: "Juan Pérez",
        clienteRecibo: "María García",
        transportista: "Transportes XYZ",
      },
      {
        fecha: "2024-05-24",
        evento: "En Camino",
        clienteEnvio: "Juan Pérez",
        clienteRecibo: "María García",
        transportista: "Transportes XYZ",
      },
    ],
    // Puedes agregar más datos simulados aquí
  };
  const handleTrack = async (trackingNumber) => {
    // Datos simulados para demostración
    const mockData = {
      trackingNumber,
      status: trackingNumber === "3333" ? 'Recepción': trackingNumber === "123" ? 'En Bodega' : trackingNumber === "111" ? 'Entregado' : 'En Camino',
      history: [
        { status: 'Recepción', date: '2024-06-01 08:00 AM', icon: "mdi mdi-account-tie-outline" },
        { status: 'En Bodega', date: '2024-06-01 10:00 AM', icon: "mdi mdi-factory" },
        { status: 'En Camino', date: '2024-06-01 02:00 PM', icon: "mdi mdi-truck-delivery" },
        { status: 'Entregado', date: '2024-06-01 06:00 PM', icon: "mdi mdi-package-variant-closed" },
      ],
    };
    setTrackingData(mockData);

    // Simulación de historial de paquetes
    if (dataHistorial[trackingNumber]) {
      setHistorial(dataHistorial[trackingNumber]);
    } else {
      setHistorial([]);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTrackingNumber(value);
    if (!value.trim()) {
      setTrackingData(null);
      setHistorial([]);
    }
  };

  const getStatusIndex = (status) => {
    return trackingData ? trackingData.history.findIndex(event => event.status === status) : -1;
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Paquetes" breadcrumbItem="Tracking" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={12}>
                        <FormGroup className="form-group-custom">
                          <Label for="trackingNumber" className="label-no-background">Número de Seguimiento</Label>
                          <Input
                            type="text"
                            id="trackingNumber"
                            placeholder="Ingrese el número de seguimiento"
                            value={trackingNumber}
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
                  {trackingData && (
                    <div className="tracking-result mt-4">
                      <h3>Resultado del Seguimiento</h3>
                      <div className="progress-container" style={{ marginTop: '5%' }}>
                        {trackingData.history.map((event, index) => (
                          <div
                            key={index}
                            className={`progress-step ${getStatusIndex(trackingData.status) >= index ? 'completed' : ''}`}
                          >
                            <div className={`progress-marker ${getStatusIndex(trackingData.status) >= index ? 'completed' : ''}`}>
                              <i className={`mdi ${event.icon}`} style={{ fontSize: '24px', color: 'inherit' }}></i>
                            </div>
                            <div className="progress-text">
                              <span>{event.status}</span>
                            </div>
                          </div>
                        ))}
                        <div
                          className={`progress-line ${getStatusIndex(trackingData.status) >= 0 ? 'completed' : ''}`}
                          style={{ width: `${(getStatusIndex(trackingData.status) / (trackingData.history.length - 1)) * 80}%` }}
                        ></div>
                      </div>
                      <p style={{ fontWeight: 'bold', fontSize: '18px', marginTop: '30px', marginLeft: '15px' }}>
                        El paquete con número de seguimiento <span style={{ color: '#635bff' }}><b>{trackingData.trackingNumber}</b></span> se encuentra <span style={{ color: '#635bff' }}><b>{trackingData.status}</b></span>.
                      </p>
                    </div>
                  )}
                  {historial.length > 0 && (
                   <div className="historial-wrapper mt-4">
                      <h3>Historial del Paquete</h3>
                      <div className="table-responsive">
                        <Table className="table-centered table-nowrap mb-0">
                          <thead className="thead-light">
                            <tr>
                              <th>Fecha</th>
                              <th>Evento</th>
                              <th>Cliente que Envió</th>
                              <th>Cliente que Recibió</th>
                              <th>Transportista</th>
                            </tr>
                          </thead>
                          <tbody>
                            {historial.map((evento, index) => (
                              <tr key={index}>
                                <td>{evento.fecha}</td>
                                <td>{evento.evento}</td>
                                <td>{evento.clienteEnvio}</td>
                                <td>{evento.clienteRecibo}</td>
                                <td>{evento.transportista}</td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    </div>
                  )}
                  {historial.length === 0 && trackingData && (
                    <p className="mt-4">No se encontraron eventos para este número de seguimiento.</p>
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

export default TrackingPage;