import React from "react";
// import images from "../assets/res-logo.png";
import styled from "styled-components"; 
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

const Footer = () => {
  return (
    <FooterContainer>
    <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_logo">
        <h1>Company logo</h1>
        {/* <img src={images} alt="footer_logo" /> */}
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
        
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">2023 Company name. All Rights reserved.</p>
    </div>

  </div>
    </FooterContainer>
  );
};
const FooterContainer=styled.div`
.app__footer {
    background-color: bisque;
    width: 100%;
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 0;
}
.app__footer-links {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.app__footer-links_logo {
    flex: 1;
    margin: 1rem;
    text-align: center;
}

.app__footer-links_logo img:first-child {
    width: 210px;
    margin-bottom: 0.75rem;
}
.app__footer-links_icons svg {
    color: var(--color-white);
    margin: 0.5rem;
    font-size: 24px;
    cursor: pointer;
}

.app__footer-links_icons svg:hover {
    color: var(--color-golden);
}

@media screen and (max-width: 1150px) {
    .app__footer-links {
        align-items: center;
        flex-direction: column;
        padding: 0;
    }

   
    .app__footer-links_logo
     {
        margin: 2rem 0;
        width: 100%;
    }
}

@media screen and (max-width: 650px) {
    .app__footer {
        padding: 0 0 2rem 0;
    }
}

@media screen and (max-width: 350px) {
    .app__footer-links_logo img:first-child {
        width: 80%;
    }
}

`
export default Footer;
