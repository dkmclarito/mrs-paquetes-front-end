import React, { useEffect } from "react";
import { Row, Col, CardBody, Card, Alert, Container, Input, Label, Form, FormFeedback } from "reactstrap";

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

// action
import { registerUser, apiError } from "../../store/actions";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";

import { createSelector } from 'reselect';

// import images
import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

const Register = props => {
    document.title = "Registro | Mr. Paquetes";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Ingrese su Email"),
      username: Yup.string().required("Ingrese su usuario"),
      password: Yup.string().required(" Ingrese su contraseña"),
    }),
    onSubmit: (values) => {
      dispatch(registerUser(values));
    }
  });

  const registerpage = createSelector(
    (state ) => state.account,
    (state) => ({
        user: state.user,
        registrationError: state.registrationError,
    })
  );
// Inside your component
const { user, registrationError } = useSelector(registerpage);

  // handleValidSubmit
  // const handleValidSubmit = values => {
  //   dispatch(registerUser(values));
  // };

  useEffect(() => {
    dispatch(apiError(""));
  }, [dispatch]);

  return (
    <div className="bg-pattern" style={{height:"100vh"}}>
    <div className="bg-overlay"></div>
    <div className="account-pages pt-5">
        <Container>
            <Row className="justify-content-center">
                <Col lg={6} md={8} xl={4}>
                    <Card className='mt-5'>
                        <CardBody className="p-4">
                            <div className="text-center">
                                <Link to="/" className="">
                                    <img src={logodark} alt="" height="24" className="auth-logo logo-dark mx-auto" />
                                    <img src={logolight} alt="" height="24" className="auth-logo logo-light mx-auto" />
                                </Link>
                            </div>

                            <h4 className="font-size-18 text-muted text-center mt-2 saludo">Regístrate</h4>
                            <p className="text-muted text-center mb-4">E inicia sesión.</p>
                            <Form
                                className="form-horizontal"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    validation.handleSubmit();
                                    return false;
                                }}
                                >
                                {user && user ? (
                                    <Alert color="success">
                                    Registro completo
                                    </Alert>
                                ) : null}

                                {registrationError && registrationError ? (
                                    <Alert color="danger"><div>{registrationError}</div></Alert>
                                ) : null}

                                <Row>
                                    <Col md={12}>
                                        <div className="mb-4">
                                        <Label className="form-label">Correo</Label>
                                            <Input
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            placeholder="Ingresa el correo"
                                            type="email"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.email || ""}
                                            invalid={
                                                validation.touched.email && validation.errors.email ? true : false
                                            }
                                            />
                                            {validation.touched.email && validation.errors.email ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.email}</div></FormFeedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-4">
                                        <Label className="form-label">Usuario</Label>
                                            <Input
                                            name="username"
                                            type="text"
                                            placeholder="Ingresa el usuario"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.username || ""}
                                            invalid={
                                                validation.touched.username && validation.errors.username ? true : false
                                            }
                                            />
                                            {validation.touched.username && validation.errors.username ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.username}</div></FormFeedback>
                                            ) : null}
                                        </div>
                                        <div className="mb-4">
                                        <Label className="form-label">Contraseña</Label>
                                            <Input
                                            name="password"
                                            type="password"
                                            placeholder="Ingresa la contraseña"
                                            onChange={validation.handleChange}
                                            onBlur={validation.handleBlur}
                                            value={validation.values.password || ""}
                                            invalid={
                                                validation.touched.password && validation.errors.password ? true : false
                                            }
                                            />
                                            {validation.touched.password && validation.errors.password ? (
                                            <FormFeedback type="invalid"><div>{validation.errors.password}</div></FormFeedback>
                                            ) : null}
                                        </div>
                                        
                                        <div className="d-grid mt-4">
                                            <button className="btn btn-primary waves-effect waves-light" type="submit">Guardar Registro</button>
                                        </div>
                                    </Col>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                    <div className="mt-5 text-center">
                        <p className="text-white-50">Tienes una cuenta?<Link to="/login" className="fw-medium text-primary plushAcount"> Inicia Sesión </Link> </p>
                        <p className="text-center text-white-50">Mr. Paquetes © 2024 | Todos los derechos reservados</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
</div>
  );
};

export default Register;
