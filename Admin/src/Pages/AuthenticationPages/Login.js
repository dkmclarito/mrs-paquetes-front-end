import PropTypes from "prop-types";
import React, { useEffect } from "react";
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

import {
  Row,
  Col,
  CardBody,
  Card,
  Container,
  Form,
  Input,
  FormFeedback,
  Label,
} from "reactstrap";

//redux
import { useDispatch } from "react-redux";
import { loginUser } from "../../store/actions";

import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

const Login = (props) => {
 
  document.title = "Login | Mr. Paquetes";

  const dispatch = useDispatch();

  const validation = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Ingresa tu Email"),
      password: Yup.string().required("Ingresa tu Password"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    },
  });

  useEffect(() => {
    document.body.className = "context area circles";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
      <div className="context"></div>

      <div className="area">
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

          <div className="account-pages my-2 pt-3">
            <Container>
              <Row className="justify-content-center">
                <Col lg={5} md={6} xl={4} sm={8} xs={9}>
                  <Card>
                    <CardBody className="p-4">
                      <div>
                        <div className="text-center">
                          <Link to="/">
                            <img
                              src={logodark}
                              alt=""
                              height="85"
                              className="auth-logo logo-dark mx-auto"
                            />
                            <img
                              src={logolight}
                              alt=""
                              height="85"
                              className="auth-logo logo-light mx-auto"
                            />
                          </Link>
                        </div>
                        <h4 className="font-size-18 text-primary mt-2 text-center">
                          Bienvenido/a !
                        </h4>
                        <p className="mb-3 text-center">
                          Inicia Sesión para acceder a Mr. Paquetes
                        </p>
                        <Form
                          className="form-horizontal"
                          onSubmit={(e) => {
                            e.preventDefault();
                            validation.handleSubmit();
                            return false;
                          }}
                        >
                          <Row>
                            <Col md={12}>
                              <div className="mb-4">
                                <Label className="form-label">Email</Label>
                                <Input
                                  name="email"
                                  className="form-control"
                                  placeholder="Enter email"
                                  type="email"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  value={validation.values.email || ""}
                                  invalid={
                                    validation.touched.email &&
                                    validation.errors.email
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.email &&
                                validation.errors.email ? (
                                  <FormFeedback type="invalid">
                                    <div>{validation.errors.email}</div>
                                  </FormFeedback>
                                ) : null}
                              </div>
                              <div className="mb-4">
                                <Label className="form-label">Password</Label>
                                <Input
                                  name="password"
                                  value={validation.values.password || ""}
                                  type="password"
                                  placeholder="Enter Password"
                                  onChange={validation.handleChange}
                                  onBlur={validation.handleBlur}
                                  invalid={
                                    validation.touched.password &&
                                    validation.errors.password
                                      ? true
                                      : false
                                  }
                                />
                                {validation.touched.password &&
                                validation.errors.password ? (
                                  <FormFeedback type="invalid">
                                    <div> {validation.errors.password} </div>
                                  </FormFeedback>
                                ) : null}
                              </div>

                              <Row>
                                <Col>
                                  <div className="form-check">
                                    <input
                                      type="checkbox"
                                      className="form-check-input"
                                      id="customControlInline"
                                    />
                                    <label
                                      className="form-label form-check-label"
                                      htmlFor="customControlInline"
                                    >
                                      Recuerdame
                                    </label>
                                  </div>
                                </Col>
                                <Col className="col-12">
                                  <div className="text-md-end mt-3 mt-md-0">
                                    <Link
                                      to="/auth-recoverpw"
                                      className="text-muted"
                                    >
                                      <i className="mdi mdi-lock"></i> Olvidaste
                                      tu contraseña?
                                    </Link>
                                  </div>
                                </Col>
                              </Row>
                              <div className="d-grid mt-4">
                                <button
                                  className="btn btn-primary waves-effect waves-light"
                                  type="submit"
                                  style={{ backgroundColor: "#635bff" }}
                                >
                                  Iniciar Sesión
                                </button>
                                <p className="text-dark-50 text-right">
                                  No tienes cuenta?{" "}
                                  <Link
                                    to="/register"
                                    className="fw-medium text-primary"
                                  >
                                    {" "}
                                    Registrate{" "}
                                  </Link>{" "}
                                </p>
                              </div>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        </ul>
      </div>

    </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
