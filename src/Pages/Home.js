import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer";
import PopularItmesMenu from "./PopularItmesMenu";

function Home() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate("/menu");
  };
  return (
    <HomeContainer>
    <div>
       
      <Navbar expand="lg" className="bg-body-tertiary navigbar ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="Restaurant.png"
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="logo for nav"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-to">
              <Nav.Link href="#home active">Home</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="#reservation">Reservation</Nav.Link>
              <Nav.Link href="/footer">Contact us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Button className="Buttonsign" type="submit">
            SignIn
          </Button>
        </Container>
      </Navbar>
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block image"
              alt=""
              fluid
            />
            <div className="carousel-caption text">
              <h1>
                <b>Best Restaurant in Town.</b>
              </h1>
              <p>
                <i>We welcome you to the most amazing Restaurant in Town.</i>
              </p>
              <p>Fresh Food means Great Mood.</p>
              <p>We provide best food, home delivery and dineout services.</p>
              <div>
                <Button
                  className="text-center Buttonorder"
                  onClick={handleOrderNow}
                  type="submit"
                >
                  <b>Order now</b>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container1">
        <Image
          src="https://images.pexels.com/photos/1833336/pexels-photo-1833336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="image2"
          alt=""
          fluid
        />
        <div className="dish">
          <h2>
            Our Most <br />
            Popular Dish.
          </h2>
          <p className="p2">
            This dish is full of flavor and nutrition!
            <br />
            Egginoa is a complete protein,
            <br /> providing all the essential amino acids your body needs,{" "}
            <br />
            and also a good source of fiber
          </p>
          <div>
            <Button className="Buttonorder"  onClick={handleOrderNow}>
              <b>Order now</b>
            </Button>
          </div>
        </div>
      </div>
      <PopularItmesMenu/>
      <Footer/>
    </div>
</HomeContainer>
);
}
const HomeContainer=styled.div`
.navigbar {
  position: relative;
  justify-content: right;
  text-align: right;
}
.Buttonsign {
  width: 100px;
}
.image {
  width: 100%;
  max-width: 100%;
  height: 600px;
  filter: brightness(80%);
}

.text {
  text-align: center;
  padding: 25px;
  background-color: rgba(245, 242, 239, 0.8);
  color: black;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}
p {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.p2 {
  font-size: 20px;
}
.Buttonorder {
  background-color: rgb(138, 195, 216);
  color: rgb(6, 14, 36);
  font-size: 20px;
  border-color: black;
}
.container1 {
  display: flex;
  justify-content: center;
  border: 1px solid;
  margin: 10px;
}
.image2 {
  width: 40%;
  padding: 40px;
}
.dish {
  padding: 40px;
}

.text {
  text-align: center;
  padding: 25px;
  background-color: rgba(245, 242, 239, 0.7);
  color: black;
  border-radius: 10px;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 20px;
}

@media (min-width: 768px) {
  .text {
    max-width: 600px; /* Limit the width on larger screens */
  }
}
`
export default Home;