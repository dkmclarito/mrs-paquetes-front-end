import React, { useState } from "react";
import {
  Card,CardBody,Col,Row,Container,Button,Form,FormGroup,Label,Input} from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const RouteSearch = () => {
  document.title = "Búsqueda de Rutas";

  // Estado para el número de ruta
  const [routeNumber, setRouteNumber] = useState("");
  const [routeData, setRouteData] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para buscar y cargar datos de la ruta
    handleRouteAssignment(routeNumber);
  };
  const handleRouteAssignment = async (routeNumber) => {
    const mockData = {
      routeNumber: "1",
      driver: "Juan Pérez",
      vehicle: "Transportes XYZ - Camión ABC123",
      stops: [
        {
          location: "Oficina Central",
          time: "08:00 AM",
        },
        {
          location: "Punto de Entrega A",
          time: "09:30 AM",
        },
        {
          location: "Punto de Entrega B",
          time: "11:00 AM",
        },
      ],
    };
    setRouteData(mockData);
  };

  // Función para manejar cambios en el input del número de ruta
  const handleInputChange = (e) => {
    const value = e.target.value;
    setRouteNumber(value);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Rutas" breadcrumbItem="Asignación" />
          <Row>
            <Col lg={12}>
              <Card className="shadow-sm border-0">
                <CardBody>
                  <Form onSubmit={handleSubmit}>
                    <Row form>
                      <Col md={12}>
                        <FormGroup className="form-group-custom">
                          <Label for="routeNumber" className="label-no-background">
                            Número de Ruta
                          </Label>
                          <Input
                            type="text"
                            id="routeNumber"
                            placeholder="Ingrese el número de ruta"
                            value={routeNumber}
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
                  {routeData && (
                    <div className="route-details mt-4">
                      <h3>Detalles de la Ruta</h3>
                      <p>
                        <strong>Número de Ruta:</strong>{" "}
                        {routeData.routeNumber}
                      </p>
                      <p>
                        <strong>Conductor:</strong> {routeData.driver}
                      </p>
                      <p>
                        <strong>Vehículo:</strong> {routeData.vehicle}
                      </p>
                      <div className="stops-list mt-3">
                        <h5>Puntos de Parada:</h5>
                        <ul>
                          {routeData.stops.map((stop, index) => (
                            <li key={index}>
                              <strong>{stop.location}</strong> - {stop.time}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
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

export default RouteSearch;
