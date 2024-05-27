import React from 'react';

import logolight from '../../assets/images/logo-light.png';
import logodark from '../../assets/images/logo-dark.png';

import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

const Register = () => {
    document.title = "Register | Upzet - React Admin & Dashboard Template";
    return (
        <React.Fragment>

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

                                        <h4 className="font-size-18 text-muted mt-2 text-center saludo">
                  Bienvenido!
                  </h4>
                  <p className="mb-5 text-center">
                  Inicia sesión para continuar.
                  </p>
                                        <form className="form-horizontal" action="#">

                                            <Row>
                                                <Col md={12}>
                                                <div className="mb-4">
                                                        <label className="form-label" htmlFor="useremail">Correo</label>
                                                        <input type="email" className="form-control" id="useremail" placeholder="Ingrese su correo" />
                                                    </div>
                                                    <div className="mb-4">
                                                        <label className="form-label" htmlFor="username">Usuario</label>
                                                        <input type="text" className="form-control" id="username" placeholder="EIngrese su usuario" defaultValue="admin@themesbrand.com" />
                                                    </div>
                                       
                                                    <div className="mb-4">
                                                        <label className="form-label" htmlFor="userpassword">Contraseña</label>
                                                        <input type="password" className="form-control" id="userpassword" placeholder="Ingrese su contraseña" defaultValue="123456" />
                                                    </div>
                                                   
                                                    <div className="d-grid mt-4">
                                                        <a href='/dashboard' className="btn btn-primary waves-effect waves-light" type="submit">Guardar Registro</a>
                                                    </div>
                                                </Col>
                                            </Row>
                                        </form>
                                    </CardBody>
                                </Card>
                                <div className="mt-5 text-center">
                                    <p className="text-white-50">Tienes una cuenta?<Link to="/auth-login" className="fw-medium text-primary"> Inicia Sesión </Link> </p>
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

export default Register;