import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardTitle,
  CardBody,
  Button,
  Toast,
  ToastHeader,
  ToastBody,
} from "reactstrap";
import logo from "../../assets/images/logo-sm.png";
import Breadcrumbs from "../../components/Common/Breadcrumb";

const UiToasts = () => {
  document.title = "Toast | Upzet - React Admin & Dashboard Template";

  const [toasts, setToasts] = useState({
    toast1: false,
    toast2: false,
    toast3: false,
    toast4: false,
    toast5: false,
    toast6: false,
    toast7: false,
  });

  const toggleToast = (toastName) => {
    setToasts((prevState) => ({
      ...prevState,
      [toastName]: !prevState[toastName],
    }));
  };

  const [selectedPosition, setSelectedPosition] = useState('');

  const handleSelectChange = (event) => {
    setSelectedPosition(event.target.value);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumbs title="UI Elements" breadcrumbItem="Toasts" />
          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle>Live Example</CardTitle>
                  <p className="card-title-des">
                    Click the button below to show a toast (positioned with our
                    utilities in the lower right corner) that has been hidden by
                    default.
                  </p>

                  <Button
                    type="button"
                    color="primary"
                    id="liveToastBtn"
                    className="me-2"
                    onClick={() => toggleToast("toast4")}
                  >
                    Show Live Toast
                  </Button>

                  <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: "11" }}>
                    <Toast isOpen={toasts.toast4}>
                      <ToastHeader toggle={() => toggleToast("toast4")}>
                        <img src={logo} alt="" className="me-2" height="18" />
                        Upzet
                      </ToastHeader>
                      <ToastBody color="primary">
                        Hello, world! This is a toast message.
                      </ToastBody>
                    </Toast>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Basic Toast</CardTitle>
                  <p className="card-title-desc">
                    Toasts are as flexible as you need and have very little
                    required markup. At a minimum, we require a single element
                    to contain your “toasted” content and strongly encourage a
                    dismiss button.
                  </p>

                  <div style={{ minHeight: "110px" }}>
                    <Toast>
                      <ToastHeader>
                        <img src={logo} alt="" className="me-2" height="18" />
                        Upzet
                      </ToastHeader>
                      <ToastBody>
                        Hello, world! This is a toast message.
                      </ToastBody>
                    </Toast>
                  </div>
                </CardBody>
              </Card>
            </Col>

            <Col xl={6}>
              <Card>
                <CardBody>
                  <CardTitle>Translucent</CardTitle>
                  <p className="card-title-desc">
                    Toasts are slightly translucent, too, so they blend over
                    whatever they might appear over. For browsers that support
                    the <code>backdrop-filter</code> CSS property, we'll also
                    attempt to blur the elements under a toast.
                  </p>
                  <div style={{ minHeight: "110px" }}>
                    <Toast isOpen={toasts.toast5}>
                      <ToastHeader toggle={() => toggleToast("toast5")}>
                        <img src={logo} alt="" className="me-2" height="18" />
                        <strong className="me-auto">Upzet</strong>
                        <small
                          className="text-muted"
                          style={{ marginLeft: "165px", fontWeight: "500" }}
                        >
                          11 min ago
                        </small>
                      </ToastHeader>
                      <ToastBody color="primary">
                        Hello, world! This is a toast message.
                      </ToastBody>
                    </Toast>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row>
            <Col xl={12}>
              <Card>
                <CardBody>
                  <CardTitle>Live Example</CardTitle>
                  <p className="card-title-des">Click the button below to show a toast (positioned with our utilities in the lower right corner) that has been hidden by default.</p>

                  <form>
                    <div className="mb-3">
                      <label htmlFor="selectToastPlacement" className="mt-2">Select a position...</label>
                      <select className="form-select" id="selectToastPlacement" value={selectedPosition} onChange={handleSelectChange}>
                        <option value="" disabled>Select a position...</option>
                        <option value="top-0 start-0">Top left</option>
                        <option value="top-0 start-50 translate-middle-x">Top center</option>
                        <option value="top-0 end-0">Top right</option>
                        <option value="top-50 start-0 translate-middle-y">Middle left</option>
                        <option value="top-50 start-50 translate-middle">Middle center</option>
                        <option value="top-50 end-0 translate-middle-y">Middle right</option>
                        <option value="bottom-0 start-0">Bottom left</option>
                        <option value="bottom-0 start-50 translate-middle-x">Bottom center</option>
                        <option value="bottom-0 end-0">Bottom right</option>
                      </select>
                    </div>
                  </form>

                  <div className="bd-example bg-light position-relative" style={{ height: '300px' }}>
                    <div className={`toast-container position-absolute p-3 ${selectedPosition}`} id="toastPlacement">
                      <Toast>
                        <ToastHeader>
                          <img src={logo} className="rounded me-2" alt="..." height="20" />
                          <strong className="me-auto">Upzet</strong>
                          {" "}
                          <small
                            className="text-muted"
                            style={{ marginLeft: "155px", fontWeight: "500" }}
                          >
                            11 min ago
                          </small>
                          <button className="btn-close" aria-label="Close" close></button>
                        </ToastHeader>
                        <ToastBody>
                          Hello, world! This is a toast message.
                        </ToastBody>
                      </Toast>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default UiToasts;
