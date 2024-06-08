import React, { useState } from "react";
import { Card, CardBody, Col, Row, Container, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap";
import { Link } from "react-router-dom";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const AgregarOrden = () => {
  document.title = "Ordenes | Mr. Paquetes";

  // Estado para almacenar las rutas
  const [rutas, setRutas] = useState([
    {
      id: 1,
      a_cargo_de: "Santos Argueta",
      cliente_recibe: "Margarita Alfaro",
      id_paquete: 1,
      id_estado: 1,
      duracion_aproximada: 2.5,
      fecha_programada: "2024-06-10",
    },
    {
      id: 2,
      a_cargo_de: "William Rosa",
      cliente_recibe: "Alex Lazo",
      id_paquete: 2,
      id_estado: 2,
      duracion_aproximada: 3.2,
      fecha_programada: "2024-06-12",
    },
  ]);

  const [modalEditar, setModalEditar] = useState(false);
  const [rutaEditada, setRutaEditada] = useState({
    id: null,
    cliente_recibe: "",
    id_bodega: "",
    id_estado: "",
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
          <Breadcrumbs title="Orden" breadcrumbItem="Listado" />
          <Row>
            <Col lg={12}>
              <Card>
                <CardBody>
                  <div className="table-responsive">
                    <table className="table table-centered table-nowrap mb-0">
                      <thead className="thead-light">
                        <tr>
                          <th>ID</th>
                          <th>A cargo de</th>  {/* id cliente entrega */}
                          <th>Recibe</th> {/* id cliente recibe */}
                         {/*  <th>Paquete</th> id paquete */}
                          <th>Estado</th> {/* precio */}
                          <th>Fecha de entrega</th>
                          <th>Acciones</th>
                        </tr>
                      </thead>
                      <tbody>
                        {rutas.map((ruta) => (
                          <tr key={ruta.id}>
                            <td>{ruta.id}</td>
                            <td>{ruta.a_cargo_de}</td>
                            <td>{ruta.cliente_recibe}</td>
                            <td>{ruta.id_estado}</td>
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
                  to="/NuevaOrden"
                  className="btn btn-primary custom-button"
                >
                  <i className="fas fa-plus"></i> Agregar Orden
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Modal para editar ruta */}
      <Modal isOpen={modalEditar} toggle={toggleModalEditar}>
        <ModalHeader toggle={toggleModalEditar}>Editar Orden</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="id_destino">Acargo de</Label>
              <Input
                type="text"
                name="id_destino"
                id="id_destino"
                value={rutaEditada.id_destino || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="nombre">Recibe</Label>
              <Input
                type="text"
                name="nombre"
                id="nombre"
                value={rutaEditada.nombre || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="id_bodega">Estado</Label>
              <Input
                type="text"
                name="id_bodega"
                id="id_bodega"
                value={rutaEditada.id_bodega || ""}
                onChange={handleInputChange}
              />
            </FormGroup>
            <FormGroup>
              <Label for="fecha_programada">Fecha de Entrega</Label>
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

export default AgregarOrden;
