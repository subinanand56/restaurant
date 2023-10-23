import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/download.jpeg";
import TrackVisibility from 'react-on-screen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import 'animate.css';

export const Contact = () => {
  return (
    <section className="contact " id="connect">
      <h1 className="text-center">Contact Us</h1>
      <Container>
        <Row className="align-items-center my-4">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img className={isVisible ? "animate__animated animate__zoomIn w-100" : "w-100" } src={contactImg} alt="Contact Us" />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <Form>
                    <Row>
                      <Col>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                          <Form.Label>First Name</Form.Label>
                          <Form.Control type="email" placeholder="First Name" />
                        </Form.Group>
                      </Col>
                      <Col>
                        <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                          <Form.Label>Last Name</Form.Label>
                          <Form.Control type="email" placeholder="Last Name" />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                      <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
                          <Form.Label>Phone Number</Form.Label>
                          <Form.Control type="email" placeholder="Phone Number" />
                        </Form.Group>
                      </Col>
                      <Col>
                      <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                      </Col>
                    </Row>
                    
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
