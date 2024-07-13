import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";

const AgregarClientes = () => {
  const [tiposPersonas, setTiposPersonas] = useState([]);
  const [fechaRegistro, setFechaRegistro] = useState(new Date().toISOString());
  const [generos, setGeneros] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipiosPorDepartamento, setMunicipiosPorDepartamento] = useState({});
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [tipoPersona, setTipoPersona] = useState("");
  const [genero, setGenero] = useState("");
  const [dui, setDui] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");
  const [departamento, setDepartamento] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [token, setToken] = useState("");
  const [esContribuyente, setEsContribuyente] = useState(false);
  const [nombreComercial, setNombreComercial] = useState("");
  const [nit, setNit] = useState("");
  const [nrc, setNrc] = useState("");
  const [giro, setGiro] = useState("");
  const [nombreEmpresa, setNombreEmpresa] = useState("");
  const [alertaExito, setAlertaExito] = useState(false);
  const [alertaError, setAlertaError] = useState(false);
  const [errorMensaje, setErrorMensaje] = useState("");

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await import("../../helpers/jwt-token-access/accessToken");
        setToken(accessToken.default);
      } catch (error) {
        console.error("Error al obtener el token:", error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    const fetchTiposPersonas = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/dropdown/get_tipo_persona", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.hasOwnProperty('tipo_persona') && Array.isArray(responseData.tipo_persona)) {
          setTiposPersonas(responseData.tipo_persona);
        } else {
          console.error("Respuesta no válida para tipos de personas:", responseData);
        }
      } catch (error) {
        console.error("Error al obtener los tipos de personas:", error);
      }
    };

    fetchTiposPersonas();
  }, [token]);

  useEffect(() => {
    const fetchGeneros = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/dropdown/get_generos", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.hasOwnProperty('generos') && Array.isArray(responseData.generos)) {
          setGeneros(responseData.generos);
        } else {
          console.error("Respuesta no válida para géneros:", responseData);
        }
      } catch (error) {
        console.error("Error al obtener los géneros:", error);
      }
    };

    fetchGeneros();
  }, [token]);

  useEffect(() => {
    const fetchDepartamentos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/dropdown/get_departamentos", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error(`Error al obtener los departamentos: ${response.statusText}`);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
          setDepartamentos(data);
        } else {
          console.error("Respuesta no válida para departamentos:", data);
        }
      } catch (error) {
        console.error("Error al obtener los departamentos:", error);
      }
    };

    fetchDepartamentos();
  }, [token]);

  useEffect(() => {
    const fetchMunicipios = async () => {
      if (departamento) {
        try {
          const response = await fetch(`http://127.0.0.1:8000/api/dropdown/get_municipio/${departamento}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const responseData = await response.json();
          if (responseData.hasOwnProperty('municipio') && Array.isArray(responseData.municipio)) {
            const municipios = responseData.municipio;
            setMunicipiosPorDepartamento(prev => ({
              ...prev,
              [departamento]: municipios
            }));
          } else {
            console.error("Respuesta no válida para municipios:", responseData);
          }
        } catch (error) {
          console.error("Error al obtener los municipios:", error);
        }
      }
    };

    fetchMunicipios();
  }, [departamento, token]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clienteData = {
      nombre: nombres,
      apellido: apellidos,
      id_tipo_persona: tipoPersona,
      id_genero: genero,
      dui,
      telefono,
      email: correo,
      direccion,
      id_departamento: departamento,
      id_municipio: municipio,
      es_contribuyente: esContribuyente ? 1 : 0,
      nombre_comercial: nombreComercial,
      nombre_empresa: nombreEmpresa,
      nit,
      nrc,
      giro,
      fecha_registro: fechaRegistro.replace(/-/g, "/"),
      id_estado: 1
    };

    fetch("http://127.0.0.1:8000/api/clientes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(clienteData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Cliente registrado:", data);
        setAlertaExito(true);
        setNombres("");
        setApellidos("");
        setTipoPersona("");
        setGenero("");
        setDui("");
        setTelefono("");
        setFechaRegistro("");
        setCorreo("");
        setDireccion("");
        setDepartamento("");
        setMunicipio("");
        setEsContribuyente(false);
        setNombreComercial("");
        setNit("");
        setNrc("");
        setGiro("");
        setNombreEmpresa("");
        setAlertaError(false);
      })
      .catch((error) => {
        console.error("Error al registrar cliente:", error);
        setAlertaExito(false);
        setAlertaError(true);
        setErrorMensaje("Hubo un error al registrar el cliente. Por favor, revisa que la información sea correcta e inténtalo de nuevo.");
      });
  };

  const handleDepartamentoChange = (e) => {
    const selectedDepartamento = e.target.value;
    setDepartamento(selectedDepartamento);
    setMunicipio("");
  };

  const handleTipoPersonaChange = (e) => {
    const selectedTipoPersona = e.target.value;
    setTipoPersona(selectedTipoPersona);

    // Resetear campos adicionales cuando cambie el tipo de persona
    setEsContribuyente(false);
    setNombreComercial("");
    setNit("");
    setNrc("");
    setGiro("");
    setNombreEmpresa("");
  };

  const toggleAlertas = () => {
    setAlertaExito(false);
    setAlertaError(false);
    setErrorMensaje("");
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Clientes" breadcrumbItem="Agregar Cliente" />
          <Row>
            <Col lg={12}>
              <h4 className="header-title mb-3">Registro de Clientes</h4>
              <Card className="shadow-sm border-0">
                <CardBody>
                  {alertaExito && (
                    <Alert color="success" isOpen={alertaExito} toggle={toggleAlertas} className="mt-3">
                      Cliente agregado correctamente.
                    </Alert>
                  )}
                  {alertaError && (
                    <Alert color="danger" isOpen={alertaError} toggle={toggleAlertas} className="mt-3">
                      {errorMensaje}
                    </Alert>
                  )}
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
                          <Label for="tipoPersona">Tipo de Persona</Label>
                          <Input type="select" id="tipoPersona" value={tipoPersona} onChange={handleTipoPersonaChange} required className="form-control-lg custom-input">
                            <option value="">Seleccionar tipo de persona</option>
                            {tiposPersonas.map((tipo) => (
                              <option key={tipo.id} value={tipo.id}>
                                {tipo.nombre}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="genero">Género</Label>
                          <Input type="select" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccionar género</option>
                            {generos.map((gen) => (
                              <option key={gen.id} value={gen.id}>
                                {gen.nombre}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaRegistro">Fecha de Registro</Label>
                          <Input type="date" id="fechaRegistro" value={fechaRegistro} onChange={(e) => setFechaRegistro(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="dui">DUI</Label>
                          <Input type="text" id="dui" placeholder="Ingrese el DUI" value={dui} onChange={(e) => setDui(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="telefono">Teléfono</Label>
                          <Input type="text" id="telefono" placeholder="Ingrese el teléfono" value={telefono} onChange={(e) => setTelefono(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="correo">Correo Electrónico</Label>
                          <Input type="email" id="correo" placeholder="Ingrese el correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="form-control-lg custom-input" />
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
                          <Input type="select" id="departamento" value={departamento} onChange={handleDepartamentoChange} required className="form-control-lg custom-input">
                            <option value="">Seleccionar departamento</option>
                            {departamentos.map((depto) => (
                              <option key={depto.id} value={depto.id}>{depto.nombre}
                              </option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="municipio">Municipio</Label>
                          <Input type="select" id="municipio" value={municipio} onChange={(e) => setMunicipio(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccionar municipio</option>
                            {municipiosPorDepartamento[departamento] &&
                              municipiosPorDepartamento[departamento].map((muni) => (
                                <option key={muni.id} value={muni.id}>
                                  {muni.nombre}
                                </option>
                              ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup check className="form-group-custom">
                          <Label check>
                            <Input type="checkbox" id="esContribuyente" checked={esContribuyente} onChange={(e) => setEsContribuyente(e.target.checked)} /> Es Contribuyente
                          </Label>
                        </FormGroup>
                      </Col>
                    </Row>
                    {tipoPersona === "2" && (
                      <>
                        <h5 className="header-title mb-3">Información Adicional para Empresas</h5>
                        <Row form>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nombreComercial">Nombre Comercial</Label>
                              <Input type="text" id="nombreComercial" placeholder="Ingrese el nombre comercial" value={nombreComercial} onChange={(e) => setNombreComercial(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nit">NIT</Label>
                              <Input type="text" id="nit" placeholder="Ingrese el NIT" value={nit} onChange={(e) => setNit(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nrc">NRC</Label>
                              <Input type="text" id="nrc" placeholder="Ingrese el NRC" value={nrc} onChange={(e) => setNrc(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="giro">Giro</Label>
                              <Input type="text" id="giro" placeholder="Ingrese el giro de la empresa" value={giro} onChange={(e) => setGiro(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row form>
                          <Col md={6}>
                            <FormGroup className="form-group-custom">
                              <Label for="nombreEmpresa">Nombre de la Empresa</Label>
                              <Input type="text" id="nombreEmpresa" placeholder="Ingrese el nombre de la empresa" value={nombreEmpresa} onChange={(e) => setNombreEmpresa(e.target.value)} required className="form-control-lg custom-input" />
                            </FormGroup>
                          </Col>
                        </Row>
                      </>
                    )}
                    <Button type="submit" color="primary" className="mt-3">
                      Agregar Cliente
                    </Button>
                    <Link to="/GestionClientes" className="btn btn-secondary mt-3 ml-2">
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

export default AgregarClientes;
