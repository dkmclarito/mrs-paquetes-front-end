import React from 'react';


import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const RecoverPassword = () => {
    document.title = "Recover Password | Upzet - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="bg-pattern" style={{ height: "100vh" }}>
                <div className="bg-overlay"></div>
                <div className="account-pages pt-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={6} md={8} xl={4}>
                                <Card className='mt-5'>
                                    <CardBody className="p-4">
                                        <div className="">
                                            <div className="text-center">
                                                <Link to="/" className="">
                                                    <img src={logodark} alt="" height="24" className="auth-logo logo-dark mx-auto" />
                                                    <img src={logolight} alt="" height="24" className="auth-logo logo-light mx-auto" />
                                                </Link>
                                            </div>
                                            <h4 className="font-size-18 text-muted mt-2 text-center saludo">Olvidé mi contraseña</h4>
                                            <p className="mb-5 text-center">Resetear a continuación</p>
                                            <form className="form-horizontal" action="#">
                                                <Row>
                                                    <Col md={12}>
                                                        <div className="alert alert-warning alert-dismissible">
                                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                                            Ingresa tu <b>Correo</b> y sigue las instrucciones que te enviarémos...
                                                        </div>

                                                        <div className="mt-4">
                                                            <label className="form-label" htmlFor="useremail">Correo</label>
                                                            <input type="email" className="form-control" id="useremail" placeholder="Ingresa tu gmail" />
                                                        </div>
                                                        <div className="d-grid mt-4">
                                                            <a href='/dashboard' className="btn btn-primary waves-effect waves-light" type="submit">Enviar correo</a>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </form>
                                        </div>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p className="text-white-50">No tienes una cuenta?  <Link to="/auth-register" className="fw-medium text-primary"> Regístrate  </Link> </p>
                                    <p className="text-center text-white-50">Mr. Paquetes © 2024 | Todos los derechos reservados</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>

        </React.Fragment>
    );
}

export default RecoverPassword;