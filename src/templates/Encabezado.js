import React from "react";

class Encabezado extends React.Component {
  render() {
    const estiloNav = { backgroundColor: "#e3f2fd" };
    return (
      <nav className="navbar navbar-light" style={estiloNav}>
        <a className="navbar-brand" href="#">
          Consumir API
        </a>
      </nav>
    );
  }
}

export default Encabezado;
