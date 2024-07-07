import React, { useState, useEffect } from "react";
import { Card, CardBody, Col, Row, Container, Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
import Breadcrumbs from "../../components/Common/Breadcrumb";
import { Link } from "react-router-dom";
const AgregarEmpleado = () => {
  const [cargos, setCargos] = useState([]);
  const [departamentos, setDepartamentos] = useState([]);
  const [municipiosPorDepartamento, setMunicipiosPorDepartamento] = useState({});
  const [generos, setGeneros] = useState([]);
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
  const [token, setToken] = useState("");
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
    const fetchCargos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/dropdown/get_cargos", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        const responseData = await response.json();
        if (responseData.hasOwnProperty('cargos') && Array.isArray(responseData.cargos)) {
          setCargos(responseData.cargos);
        } else {
          console.error("Respuesta no válida para cargos:", responseData);
        }
      } catch (error) {
        console.error("Error al obtener los cargos:", error);
      }
    };

    fetchCargos();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    const empleadoData = {
      nombres,
      apellidos,
      id_genero: genero,
      dui,
      telefono,
      email: correo,
      fecha_nacimiento: fechaNacimiento.replace(/-/g, "/"),
      fecha_contratacion: fechaContratacion.replace(/-/g, "/"),
      salario,
      id_estado: 1,
      id_cargo: cargo,
      id_departamento: departamento,
      id_municipio: municipio
    };

    fetch("http://127.0.0.1:8000/api/empleados", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(empleadoData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error HTTP ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Empleado registrado:", data);
        setAlertaExito(true);
        setNombres("");
        setApellidos("");
        setGenero("");
        setDui("");
        setTelefono("");
        setCorreo("");
        setFechaNacimiento("");
        setFechaContratacion("");
        setSalario("");
        setCargo("");
        setDireccion("");
        setDepartamento("");
        setMunicipio("");
        setAlertaError(false);
      })
      .catch((error) => {
        console.error("Error al registrar empleado:", error);
        setAlertaExito(false);
        setAlertaError(true);
        setErrorMensaje("Hubo un error al registrar el empleado. Por favor, revisa que la información sea correcta y inténtalo de nuevo.");
      });
  };

  const handleDepartamentoChange = (e) => {
    const selectedDepartamento = e.target.value;
    setDepartamento(selectedDepartamento);
    setMunicipio("");
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
          <Breadcrumbs title="Empleados" breadcrumbItem="Agregar Empleado" />
          <Row>
            <Col lg={12}>
              <h4 className="header-title mb-3">Registro de Empleados</h4>
              <Card className="shadow-sm border-0">
                <CardBody>
                  {alertaExito && (
                    <Alert color="success" isOpen={alertaExito} toggle={toggleAlertas} className="mt-3">
                      Empleado agregado correctamente.
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
                          <Label for="genero">Género</Label>
                          <Input type="select" id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} required className="form-control-lg custom-input">
                            <option value="">Seleccione</option>
                            {generos.map((gen) => (
                              <option key={gen.id} value={gen.id}>{gen.nombre}</option>
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
                          <Label for="correo">Correo Electrónico</Label>
                          <Input type="email" id="correo" placeholder="Ingrese el correo electrónico" value={correo} onChange={(e) => setCorreo(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row form>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaNacimiento">Fecha de Nacimiento</Label>
                          <Input type="date" id="fechaNacimiento" placeholder="Ingrese la fecha de nacimiento" value={fechaNacimiento} onChange={(e) => setFechaNacimiento(e.target.value)} required className="form-control-lg custom-input" />
                        </FormGroup>
                      </Col>
                      <Col md={6}>
                        <FormGroup className="form-group-custom">
                          <Label for="fechaContratacion">Fecha de Contratación</Label>
                          <Input type="date" id="fechaContratacion" placeholder="Ingrese la fecha de contratación" value={fechaContratacion} onChange={(e) => setFechaContratacion(e.target.value)} required className="form-control-lg custom-input" />
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
                            {cargos.map((cargo) => (
                              <option key={cargo.id} value={cargo.id}>{cargo.nombre}</option>
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
                            {departamentos.map((depto) => (
                              <option key={depto.id} value={depto.id}>{depto.nombre}</option>
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
                            {municipiosPorDepartamento[departamento] && municipiosPorDepartamento[departamento].map((muni) => (
                              <option key={muni.id} value={muni.id}>{muni.nombre}</option>
                            ))}
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Button type="submit" className="btn-lg custom-button">
                      Agregar Empleado
                    </Button>
                    <Link to="/GestionEmpleados" className="btn btn-secondary btn-lg ms-2">
                      Regresar
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
