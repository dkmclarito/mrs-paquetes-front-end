import React from "react";
import { Container, Row, Col } from "reactstrap";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
  <Container fluid={true}>
    <Row>
      <Col className="text-center">
        Mr. Paquetes © 2024 | Todos los derechos reservados
      </Col>
    </Row>
  </Container>
</footer>
    </React.Fragment>
  );
};

export default Footer;
