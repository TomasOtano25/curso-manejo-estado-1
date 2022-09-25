import React from "react";
import { Loading } from "./Loading";

const SECURITY_CODE = "paradigma";

class ClassState extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      error: false,
      loading: false,
    };
  }

  // se ejecuta con cada actualizacion del estado
  componentDidUpdate() {
    console.log("actualizacion");

    if (!!this.state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        if (this.state.value === SECURITY_CODE) {
          this.setState({ error: false, loading: false });
        } else {
          this.setState({ error: true, loading: false });
        }

        console.log("Terminando la validacion");
      }, 1000);
    }
  }

  render() {
    const { error, value, loading } = this.state;

    console.log(value);

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

        {error && !loading && (
          <p className="text-red-400">Error: El codigo es incorrecto</p>
        )}
        {this.state.loading && <Loading />}

        <input
          value={value}
          onChange={(event) => {
            this.setState({ value: event.target.value });
          }}
          type="text"
          className="border border-gray-200 rounded-md px-1 py-1 mr-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Codigo de Seguridad"
        />
        <button
          onClick={() => this.setState({ loading: true })}
          // onClick={() =>
          //   this.setState((prevState) => ({
          //     error: !prevState.error,
          //   }))
          // }
          className="py-1 px-2 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-500"
        >
          Comprobar
        </button>
      </div>
    );
  }
}

export { ClassState };
