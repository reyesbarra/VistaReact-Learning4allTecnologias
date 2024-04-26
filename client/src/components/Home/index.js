import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "50px", marginBottom: "100px" }}>
        <h1 className="text-center mb-4">
          Tecnologías a utilizar para el desarrollo móvil
        </h1>

        <ul className="text-center">
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/react-native-1.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "40px" }}
              />
            </a>
            React native
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/axios.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "40px", marginRight: "10px" }}
              />
            </a>
            Axios
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/boostrap.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "20px", marginRight: "10px" }}
              />
            </a>
            Bootstrap
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/node.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "40px", marginRight: "10px" }}
              />
            </a>
            Node.js
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/html.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "20px", marginRight:"10px" }}
              />
            </a>
            HTML
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/mysql.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "40px", marginRight: "10px" }}
              />
            </a>
            MySQL
          </li>
          <li className="list-group-item">
            <a className="logon me-auto">
              <img
                src="/expo.png"
                alt=""
                className="img-fluid"
                style={{ maxWidth: "40px", marginRight: "5px" }}
              />
            </a>
            Expo Go
          </li>
        </ul>

        <h2 className="text-center mb-4">Apis a implementar</h2>
        <ul className="list text-center">
          <li className="list-group-item">API de paypal para más opciones de pagos o transferencia internacionales - https://github.com/paypal/paypal-rest-api-specifications</li>
          <li className="list-group-item">API de Google para la parte de drive donde se guardarán documentos tares y demás - https://www.googleapis.com</li>
          <li className="list-group-item">Twilio es un api de mensajería para recibir y envíar tanto mensajes como correos para nuestros estudiantes - https://www.twilio.com/docs/usage/api</li>
          
        </ul>

        <h2 className="text-center mb-4">Desarrolladores</h2>
        <ul className="list-inline text-center">
          <li className="list-inline-item">Andrés David Baquero Moreno - </li>
          <li className="list-inline-item">Richard Luvis Lopez Cardona - </li>
          <li className="list-inline-item">Zulay Nicole Oviedo - </li>
          <li className="list-inline-item">Christian David Reyes Barragán - </li>
          <li className="list-inline-item">Nicolas Zea Aponte</li>
        </ul>

        <p className="text-center mb-4">
          Este proyecto es una aplicación web educativa desarrollada como parte
          de un proyecto universitario para la universidad de San Buenaventura
          sede Bogotá D.C. El objetivo principal de LEARNING 4 ALL es llevar
          educación gratuita y de calidad a todas las personas interesadas en
          los estudios relacionados con las nuevas tecnologías de software.
        </p>
      </div>
    );
  }
}

export default Home;
