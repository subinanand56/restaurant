import React from 'react';
import Button from 'react-bootstrap/Button';
import { MenuList } from "../Pages/Data/Data";

const Menu = () => {
  const menuStyle = {
    backgroundColor: "black",
  };

  return (
    <div style={menuStyle}>
      <h1 style={{ textAlign: "center", color: "white" }}>Menu</h1>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu, index) => (
          <div key={index} style={{ maxWidth: "390px", display: "flex", margin: "20px" }}>
            <div>
              <img
                style={{ minHeight: "400px", width: "100%" }}
                src={menu.image}
                alt={menu.name}
              />
              <div>
                <h5 style={{ color: "white" }}>{menu.name}</h5>
                <p style={{ color: "white" }}>{menu.description}</p>
                <Button variant="primary">Order now</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
