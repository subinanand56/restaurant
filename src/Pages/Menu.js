import React from "react";
import { MenuList, Breakfast, Lunch, Dinner, Drink } from "../Pages/Data/Data";
import { Tab, Nav, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  const itemsPerRow = 3;
  const rows = Math.ceil(MenuList.length / itemsPerRow);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Menu</h1>
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" justify>
          <Nav.Item style={{ flex: 1 }}>
            <Nav.Link eventKey="first">All Categories</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ flex: 1 }}>
            <Nav.Link eventKey="second">Breakfast</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ flex: 1 }}>
            <Nav.Link eventKey="third">Lunch</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ flex: 1 }}>
            <Nav.Link eventKey="fourth">Dinner</Nav.Link>
          </Nav.Item>
          <Nav.Item style={{ flex: 1 }}>
            <Nav.Link eventKey="fifth">Drinks</Nav.Link>
          </Nav.Item>
        </Nav>
        <Tab.Content>
          <Tab.Pane eventKey="first">
            {[...Array(rows)].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {MenuList.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((menu, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        maxWidth: "390px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div>
                        <img
                          style={{ minHeight: "400px", width: "100%" }}
                          src={menu.image}
                          alt={menu.name}
                        />
                        <div>
                          <h5>{menu.name}</h5>
                          <p>{menu.description}</p>
                          <p>Rs{menu.price}</p>
                          <Link to="/order">
                            <Button variant="primary">Order now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            {[...Array(rows)].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {Breakfast.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((menu, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        maxWidth: "390px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div>
                        <img
                          style={{ minHeight: "400px", width: "100%" }}
                          src={menu.image}
                          alt={menu.name}
                        />
                        <div>
                          <h5>{menu.name}</h5>
                          <p>{menu.description}</p>
                          <p>Rs{menu.price}</p>
                          <Link to="/order">
                            <Button variant="primary">Order now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            {[...Array(rows)].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {Lunch.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((menu, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        maxWidth: "390px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div>
                        <img
                          style={{ minHeight: "400px", width: "100%" }}
                          src={menu.image}
                          alt={menu.name}
                        />
                        <div>
                          <h5>{menu.name}</h5>
                          <p>{menu.description}</p>
                          <p>Rs{menu.price}</p>
                          <Link to="/order">
                            <Button variant="primary">Order now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="fourth">
            {[...Array(rows)].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {Dinner.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((menu, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        maxWidth: "390px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div>
                        <img
                          style={{ minHeight: "400px", width: "100%" }}
                          src={menu.image}
                          alt={menu.name}
                        />
                        <div>
                          <h5>{menu.name}</h5>
                          <p>{menu.description}</p>
                          <p>Rs{menu.price}</p>
                          <Link to="/order">
                            <Button variant="primary">Order now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="fifth">
            {[...Array(rows)].map((_, rowIndex) => (
              <Row key={rowIndex}>
                {Drink.slice(
                  rowIndex * itemsPerRow,
                  (rowIndex + 1) * itemsPerRow
                ).map((menu, index) => (
                  <Col key={index} xs={12} sm={6} md={4}>
                    <div
                      style={{
                        maxWidth: "390px",
                        display: "flex",
                        margin: "20px",
                      }}
                    >
                      <div>
                        <img
                          style={{ minHeight: "400px", width: "100%" }}
                          src={menu.image}
                          alt={menu.name}
                        />
                        <div>
                          <h5>{menu.name}</h5>
                          <p>{menu.description}</p>
                          <p>Rs{menu.price}</p>
                          <Link to="/order">
                            <Button variant="primary">Order now</Button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default Menu;
