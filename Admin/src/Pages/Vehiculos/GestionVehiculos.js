import React, { useState } from "react";
import {
  Card,
  CardBody,
  Col,
  Row,
  Container,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const GestionVehiculos = () => {
  document.title = "Vehículos | Nombre de tu Aplicación";

  const [vehiculos, setVehiculos] = useState([
    {
      id: 1,
      marca: "Toyota",
      modelo: "Corolla",
      año: "2022",
      placa: "P-12345",
      color: "Rojo",
    },
    {
      id: 2,
      marca: "Honda",
      modelo: "Civic",
      año: "2023",
      placa: "P-67890",
      color: "Azul",
    },
  ]);

  const [modalEditar, setModalEditar] = useState(false);
  const [vehiculoEditado, setVehiculoEditado] = useState({
    id: null,
    marca: "",
    modelo: "",
    año: "",
    placa: "",
    color: "",
  });

  const toggleModalEditar = (vehiculo) => {
    setVehiculoEditado(vehiculo);
    setModalEditar(!modalEditar);
  };

  const guardarCambios = () => {
    console.log("Guardando cambios:", vehiculoEditado);
    setModalEditar(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setVehiculoEditado({ ...vehiculoEditado, [name]: value });
  };

  const eliminarVehiculo = (idVehiculo) => {
    const nuevosVehiculos = vehiculos.filter(
      (vehiculo) => vehiculo.id !== idVehiculo
    );
    setVehiculos(nuevosVehiculos);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Vehículos" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>Marca</th>
                          <th>Modelo</th>
                          <th>Año</th>
                          <th>Placa</th>
                          <th>Color</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vehiculos.map((vehiculo) => (
                          <tr key={vehiculo.id}>
                            <td>{vehiculo.id}</td>
                            <td>{vehiculo.marca}</td>
                            <td>{vehiculo.modelo}</td>
                            <td>{vehiculo.año}</td>
                            <td>{vehiculo.placa}</td>
                            <td>{vehiculo.color}</td>
                            <td>
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => toggleModalEditar(vehiculo)}
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-primary"
                                onClick={() => eliminarVehiculo(vehiculo.id)}
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className="text-lg-end mt-3">
                <Link
                  to="/agregarvehiculos"
                  className="btn btn-primary custom-button"
                >
                  <i className="fas fa-plus"></i> Agregar Vehículo
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal para editar vehículo */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Vehículo</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="marca">Marca</Label>
              <Input
                type="text"
                name="marca"
                id="marca"
                value={vehiculoEditado.marca}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="modelo">Modelo</Label>
              <Input
                type="text"
                name="modelo"
                id="modelo"
                value={vehiculoEditado.modelo}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="año">Año</Label>
              <Input
                type="text"
                name="año"
                id="año"
                value={vehiculoEditado.año}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="placa">Placa</Label>
              <Input
                type="text"
                name="placa"
                id="placa"
                value={vehiculoEditado.placa}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="color">Color</Label>
              <Input
                type="text"
                name="color"
                id="color"
                value={vehiculoEditado.color}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>{" "}
          <Button color="secondary" onClick={toggleModalEditar}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default GestionVehiculos;
