import React from "react";
import "../styles/Footer.scss";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="info">
          <img src={logo} alt="logo" />
          <div className="links">
            <p>Terms of Service</p>
            <p>Privacy policy</p>
            <p>Returns</p>
            <p>FAQ</p>
          </div>
        </div>
        <div className="copyright">
          <p>© 2022 Logoipsum. All rights reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
