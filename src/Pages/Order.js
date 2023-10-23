import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


const Order = () => {

    

  return (
    <section>
        <h1 className="text-center">Order data</h1>
        <Container>
            <Row className="justify-content-center"> 
                <Col xs={12} md={6}>
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

                    <Form.Group className="mb-2" controlId="exampleForm.ControlInput2">
                      <Form.Label>Address</Form.Label>
                      <Form.Control type="Address" placeholder="Address" rows={3} />
                    </Form.Group>
                  </Form>
                </Col>
                
                
            </Row>
            <div className="text-center">
          <Button variant="primary">Submitt</Button>
        </div>
            <Row >
            <h1 className="text-center">payment</h1>
            <Col className="d-flex justify-content-center">
            <Form>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="UPI"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Card"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Cash On Delivery"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          <Form.Check
            inline
            label="Credit Card"
            name="group1"
            type={type}
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
    </Form>
            </Col>
            </Row>
            <div className="text-center">
          <Button variant="primary">Order now</Button>
        </div>
        </Container>
      
    </section>
  )
}

export default Order