import React, { Component } from "react";
import "./style.css";

class Home extends Component {
  render() {
    return (
      <div style={{ marginTop: "50px", marginBottom: "100px" }}>
        <h1 className="text-center mb-4">
          Tecnologías a utilizar para el desarrollo móvil de nuestro proyecto.
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
                style={{ maxWidth: "20px", marginRight: "10px" }}
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
        <p className="text-center mb-4">
          Para construir nuestra app móvil con React Native, vamos a organizarla
          de manera que sea fácil de entender y mantener. Usaremos componentes
          modulares, gracias a la capacidad de React Native para crear
          interfaces divididas en partes reutilizables. También implementaremos
          un patrón de diseño como Flux o Redux para gestionar el estado de la
          app de forma ordenada y predecible. Dividiremos nuestra app en capas:
          una para la presentación de la interfaz, otra para la lógica de
          negocio y una más para acceder a los datos, ya sea desde una base de
          datos local o servicios externos. Para la navegación entre pantallas,
          contaremos con React Navigation, mientras que la comunicación con el
          servidor se hará de forma segura y eficiente a través de una API
          RESTful. Además, nos aseguraremos de probar nuestra app en cada etapa
          del desarrollo para garantizar su calidad y estabilidad.
        </p>
        <h2 className="text-center mb-4">Etapas del desarrollo</h2>
        <p className="text-center mb-4">
          Creamos
          un nuevo componente en nuestro proyecto, donde definimos la estructura
          de la interfaz de usuario utilizando componentes de React Native como
          View, Text y FlatList. Si necesitamos datos, los obtenemos de una
          fuente, como un estado local o una base de datos externa o un consumo de API. Después,
          renderizamos los datos utilizando la FlatList y aplicamos estilos con
          la API StyleSheet para darle el aspecto deseado a nuestra vista. Si es
          necesario, agregamos interactividad y realizamos pruebas para
          asegurarnos de que todo funcione correctamente. Finalmente, integramos
          nuestra nueva vista con otras partes de la aplicación, como la
          navegación entre pantallas.
        </p>
        <h2 className="text-center mb-4">Apis a implementar</h2>
        <ul className="list text-center">
          <li className="list-group-item">
            API de paypal para más opciones de pagos o transferencia
            internacionales -
            https://github.com/paypal/paypal-rest-api-specifications
          </li>
          <li className="list-group-item">
            API de Google para la parte de drive donde se guardarán documentos
            tares y demás - https://www.googleapis.com
          </li>
          <li className="list-group-item">
            Twilio es un api de mensajería para recibir y envíar tanto mensajes
            como correos para nuestros estudiantes -
            https://www.twilio.com/docs/usage/api
          </li>
        </ul>
        <h2 className="text-center mb-4">Desarrolladores</h2>
        <ul className="list-inline text-center">
          <li className="list-inline-item">Andrés David Baquero Moreno - </li>
          <li className="list-inline-item">Richard Luvis Lopez Cardona - </li>
          <li className="list-inline-item">Zulay Nicole Oviedo - </li>
          <li className="list-inline-item">
            Christian David Reyes Barragán -{" "}
          </li>
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
