import React from "react";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
    };
  }

  render() {
    const { error } = this.state;

    return (
      <div className="m-12">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-1">
            Eliminar {this.props.name}
          </h2>
          <p>
            Por favor, escribe el codigo de seguridad para comprobar que quieres
            eliminar
          </p>
        </div>

        {error && (
          <p className="text-red-400">Error: El codigo es incorrecto</p>
        )}

        <input
          type="text"
          className="border border-gray-200 rounded-md px-1 py-1 mr-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Codigo de Seguridad"
        />
        <button
          // onClick={() => this.setState({ error: !error })}
          onClick={() =>
            this.setState((prevState) => ({
              error: !prevState.error,
            }))
          }
          className="py-1 px-2 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-500"
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
