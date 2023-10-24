import React from "react";
import { MenuList, Breakfast, Lunch, Dinner, Drink } from "../Pages/Data/Data";
import { Tab, Nav, Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Menu = () => {
  const itemsPerRow = 3;
  const rows = Math.ceil(MenuList.length / itemsPerRow);

  const renderMenuItem = (menu) => (
    <Col key={menu.name} xs={12} sm={6} md={4} style={{ marginBottom: "20px" }}>
      <Card style={{ borderRadius: "15px", overflow: "hidden" }}>
        <div style={{ height: "300px", overflow: "hidden" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "cover" }}
            src={menu.image}
            alt={menu.name}
          />
        </div>
        <Card.Body>
          <Card.Title>{menu.name}</Card.Title>
          <Card.Text>{menu.description}</Card.Text>
          <Card.Text>Rs {menu.price}</Card.Text>
          <Link to="/order">
            <Button variant="primary">Order now</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );

  const renderMenuCategory = (menuItems) => (
    <Row  style={{ marginTop: "30" }}>
      {menuItems.map((menu) => renderMenuItem(menu))}
    </Row>
  );

  return (
    <section>
    
      <h1 style={{ textAlign: "center" , marginBottom: "40px"}}>Menu</h1>
      <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills" justify style={{ marginBottom: "60px" }}>
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
              <div key={rowIndex}>{renderMenuCategory(MenuList.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow))}</div>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="second">
            {[...Array(rows)].map((_, rowIndex) => (
              <div key={rowIndex}>{renderMenuCategory(Breakfast.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow))}</div>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="third">
            {[...Array(rows)].map((_, rowIndex) => (
              <div key={rowIndex}>{renderMenuCategory(Lunch.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow))}</div>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="fourth">
            {[...Array(rows)].map((_, rowIndex) => (
              <div key={rowIndex}>{renderMenuCategory(Dinner.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow))}</div>
            ))}
          </Tab.Pane>

          <Tab.Pane eventKey="fifth">
            {[...Array(rows)].map((_, rowIndex) => (
              <div key={rowIndex}>{renderMenuCategory(Drink.slice(rowIndex * itemsPerRow, (rowIndex + 1) * itemsPerRow))}</div>
            ))}
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
      </section>
  );
};

export default Menu;
