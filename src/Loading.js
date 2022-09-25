import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("El componente se desmonta");
  }

  render() {
    return <p className="text-green-400">Cargando...</p>;
  }
}

export { Loading };
