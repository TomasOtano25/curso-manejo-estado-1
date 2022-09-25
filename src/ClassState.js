import React from "react";

class ClassState extends React.Component {
  constructor() {}

  render() {
    return (
      <div>
        <h2>Eliminar ClassState</h2>
        <p>
          Por favor, escribe el codigo de seguridad para comprobar que quieres
          eliminar
        </p>

        <input placeholder="Codigo de Seguridad" />
        <button>Comprobar</button>
      </div>
    );
  }
}

export { ClassState };
