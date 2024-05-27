import PropTypes from "prop-types";
import React, { useEffect } from "react";
import logolight from "../../assets/images/logo-light.png";
import logodark from "../../assets/images/logo-dark.png";

import { Row, Col, CardBody, Card, Alert, Container, Form, Input, FormFeedback, Label } from "reactstrap";

//redux
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import withRouter from "../../components/Common/withRouter";

// Formik validation
import * as Yup from "yup";
import { useFormik } from "formik";

//Social Media Imports
import { GoogleLogin } from "react-google-login";
// import TwitterLogin from "react-twitter-auth"
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

// actions
import { loginUser, socialLogin } from "../../store/actions";

//Import config
import { facebook, google } from "../../config";

import { createSelector } from 'reselect';

const Login = props => {
  document.title = "Login | Mr. Paquetes";

  const dispatch = useDispatch();

  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      email: "admin@Themesdesign.com" || '',
      password: "123456" || '',
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Ingrese su gmail"),
      password: Yup.string().required("Ingrese su contraseña"),
    }),
    onSubmit: (values) => {
      dispatch(loginUser(values, props.router.navigate));
    }
  });

  const loginpage = createSelector(
    (state ) => state.login,
    (state) => ({
        error: state.error,
    })
  );
// Inside your component
const { error } = useSelector(loginpage);

  // handleValidSubmit
  // const handleValidSubmit = (event, values) => {
  //   dispatch(loginUser(values, props.router.navigate));
  // };

  const signIn = (res, type) => {
    if (type === "google" && res) {
      const postData = {
        name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.tokenObj.access_token,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.router.navigate, type));
    } else if (type === "facebook" && res) {
      const postData = {
        name: res.name,
        email: res.email,
        token: res.accessToken,
        idToken: res.tokenId,
      };
      dispatch(socialLogin(postData, props.router.navigate, type));
    }
  };

  //handleGoogleLoginResponse
  const googleResponse = response => {
    signIn(response, "google");
  };

  //handleTwitterLoginResponse
  // const twitterResponse = e => {}

  //handleFacebookLoginResponse
  const facebookResponse = response => {
    signIn(response, "facebook");
  };

  useEffect(() => {
    document.body.className = "bg-pattern";
    // remove classname when component will unmount
    return function cleanup() {
      document.body.className = "";
    };
  });

  return (
    <React.Fragment>
    
    <div className="bg-overlay"></div>
    <div className="account-pages my-5 pt-5">
      <Container>
        <Row className="justify-content-center">
          <Col lg={6} md={8} xl={4}>
            <Card>
              <CardBody className="p-4">
                <div>
                  <div className="text-center">
                    <Link to="/">
                      <img
                        src={logodark}
                        alt=""
                        height="24"
                        className="auth-logo logo-dark mx-auto"
                      />
                      <img
                        src={logolight}
                        alt=""
                        height="24"
                        className="auth-logo logo-light mx-auto"
                      />
                    </Link>
                  </div>
                  <h4 className="font-size-18 text-muted mt-2 text-center saludo">
                  Bienvenido!
                  </h4>
                  <p className="mb-5 text-center">
                  Inicia sesión para continuar.
                  </p>
                  <Form
                    className="form-horizontal"
                    onSubmit={(e) => {
                      e.preventDefault();
                      validation.handleSubmit();
                      return false;
                    }}
                  >
                    {error ? <Alert color="danger"><div>{error}</div></Alert> : null}
                    <Row>
                      <Col md={12}>
                        <div className="mb-4">
                        <Label className="form-label">Correo</Label>
                        <Input
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
                          <Label className="form-label">Contraseña</Label>
                          <Input
                            name="password"
                            value={validation.values.password || ""}
                            type="password"
                            placeholder="Ingresa la contraseña"
                            onChange={validation.handleChange}
                            onBlur={validation.handleBlur}
                            invalid={
                              validation.touched.password && validation.errors.password ? true : false
                            }
                          />
                          {validation.touched.password && validation.errors.password ? (
                            <FormFeedback type="invalid"><div> {validation.errors.password} </div></FormFeedback>
                          ) : null}
                        </div>

                        <Row>
                          <Col className="col-7">
                            <div className="text-md-end mt-3 mt-md-0">
                              <Link
                                to="/auth-recoverpw"
                                className="text-muted"
                              >
                                <i className="mdi mdi-lock"></i> Cambiar contraseña?
                              </Link>
                            </div>
                          </Col>
                        </Row>
                        <div className="d-grid mt-4">
                          <button
                            className="btn btn-primary waves-effect waves-light"
                            type="submit"
                          >
                            Iniciar Sesión
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                      <h5 className="font-size-14 mb-3">Iniciar con</h5>

                      <ul className="list-inline">
                        <li className="list-inline-item facebookIcon">
                          <FacebookLogin
                            appId={facebook.APP_ID}
                            autoLoad={false}
                            callback={facebookResponse}
                            render={renderProps => (
                              <Link
                                to="#"
                                className="social-list-item bg-primary text-white border-primary"
                                onClick={renderProps.onClick}
                              >
                                <i className="mdi mdi-facebook" />
                              </Link>
                            )}
                          />
                        </li>

                        <li className="list-inline-item">
                          <GoogleLogin
                            clientId={google.CLIENT_ID}
                            render={renderProps => (
                              <Link
                                to="#"
                                className="social-list-item bg-danger text-white border-danger"
                                onClick={renderProps.onClick}
                              >
                                <i className="mdi mdi-google" />
                              </Link>
                            )}
                            onSuccess={googleResponse}
                            onFailure={() => { }}
                          />
                        </li>
                      </ul>
                    </div>

                      </Col>
                    </Row>
                  </Form>
                </div>
              </CardBody>
            </Card>
            <div className="mt-5 text-center">
              <p className="text-white-50">
                No tienes una cuenta?{" "}
                <Link to="/register" className="fw-medium text-primary plushAcount">
                  {" "}
                  Regístrate{" "}
                </Link>{" "}
              </p>
              <p className="text-center">
                  Mr. Paquetes © 2024 | Todos los derechos reservados
                </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  </React.Fragment>
  );
};

export default withRouter(Login);

Login.propTypes = {
  history: PropTypes.object,
};
