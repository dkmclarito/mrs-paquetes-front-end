import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const NuevaOrden = () => {
  document.title = "Nueva Orden | Mr. Paquetes";

  // Estado para almacenar las rutas
  const [rutas, setRutas] = useState([
    {
      id: 1,
      id_destino: 2,
      nombre: "Ruta A",
      id_bodega: 1,
      id_estado: 1,
      distancia_km: 100.25,
      duracion_aproximada: 2.5,
      fecha_programada: "2024-06-10",
    },
    {
      id: 2,
      id_destino: 1,
      nombre: "Ruta B",
      id_bodega: 2,
      id_estado: 2,
      distancia_km: 150.75,
      duracion_aproximada: 3.2,
      fecha_programada: "2024-06-12",
    },
  ]);

  const [modalEditar, setModalEditar] = useState(false);
  const [rutaEditada, setRutaEditada] = useState({
    id: null,
    id_destino: "",
    nombre: "",
    id_bodega: "",
    id_estado: "",
    distancia_km: "",
    duracion_aproximada: "",
    fecha_programada: "",
  });

  // Función para abrir/cerrar la modal de edición
  const toggleModalEditar = (ruta) => {
    setRutaEditada(ruta);
    setModalEditar(!modalEditar);
  };

  // Función para guardar los cambios al editar una ruta
  const guardarCambios = () => {
    console.log("Guardando cambios:", rutaEditada);
    setModalEditar(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const newValue = value === "" ? null : value;
    setRutaEditada({ ...rutaEditada, [name]: newValue });
  };

  // Función para eliminar una ruta
  const eliminarRuta = (idRuta) => {
    const nuevasRutas = rutas.filter((ruta) => ruta.id !== idRuta);
    setRutas(nuevasRutas);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Rutas" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>Destino</th>
                          <th>Nombre</th>
                          <th>Bodega</th>
                          <th>Estado</th>
                          <th>Distancia (km)</th>
                          <th>Duración Aprox. (hrs)</th>
                          <th>Fecha Programada</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rutas.map((ruta) => (
                          <tr key={ruta.id}>
                            <td>{ruta.id}</td>
                            <td>{ruta.id_destino}</td>
                            <td>{ruta.nombre}</td>
                            <td>{ruta.id_bodega}</td>
                            <td>{ruta.id_estado}</td>
                            <td>{ruta.distancia_km}</td>
                            <td>{ruta.duracion_aproximada}</td>
                            <td>{ruta.fecha_programada}</td>
                            <td>
                              <Button
                                className="me-2 btn-icon btn-danger"
                                onClick={() => toggleModalEditar(ruta)}
                              >
                                <i className="fas fa-pencil-alt"></i>
                              </Button>
                              <Button
                                className="btn-icon btn-primary"
                                onClick={() => eliminarRuta(ruta.id)}
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
                  to="/agregarrutas"
                  className="btn btn-primary custom-button"
                >
                  <i className="fas fa-plus"></i> Agregar Ruta
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal para editar ruta */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Ruta</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="id_destino">Destino</Label>
              <Input
                type="text"
                name="id_destino"
                id="id_destino"
                value={rutaEditada.id_destino || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Nombre</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={rutaEditada.nombre || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="id_bodega">Bodega</Label>
              <Input
                type="text"
                name="id_bodega"
                id="id_bodega"
                value={rutaEditada.id_bodega || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="id_estado">Estado</Label>
              <Input
                type="text"
                name="id_estado"
                id="id_estado"
                value={rutaEditada.id_estado || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="distancia_km">Distancia (km)</Label>
              <Input
                type="text"
                name="distancia_km"
                id="distancia_km"
                value={rutaEditada.distancia_km || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="duracion_aproximada">Duración Aprox. (hrs)</Label>
              <Input
                type="text"
                name="duracion_aproximada"
                id="duracion_aproximada"
                value={rutaEditada.duracion_aproximada || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fecha_programada">Fecha Programada</Label>
              <Input
                type="date"
                name="fecha_programada"
                id="fecha_programada"
                value={rutaEditada.fecha_programada || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={guardarCambios}>
            Guardar Cambios
          </Button>{" "}
          <Button color="secondary" onClick={() => setModalEditar(false)}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default NuevaOrden;
