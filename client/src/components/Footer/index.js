import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

class Footer extends Component {
  render() {
    return (
      <footer
        className="footer mt-auto py-3 bg-dark"
        style={{ position: "fixed", bottom: 0, width: "100%" }}
      >
        <div className="container">
          <span className="text-muted" id="footer-text">
            &copy;&nbsp;TDS 6 Semestre - Desarrollo móvil 2024
          </span>
        </div>
      </footer>
    );
  }
}

export default Footer;
