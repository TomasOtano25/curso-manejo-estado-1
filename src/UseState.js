import React from "react";

const SECURITY_CODE = "paradigma";

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: "",
    error: false,
    loading: false,
    deleted: false, // Muestra el modal
    confirmed: false, //confirmar la eliminacion
  });

  const onConfirm = () => {
    setState({
      ...state,
      loading: false,
      error: false,
      confirmed: true,
    });
  };

  const onError = () => {
    setState({
      ...state,
      loading: false,
      error: true,
    });
  };

  const onWrite = (newValue) => {
    setState({ ...state, value: newValue });
  };

  const onCheck = () => {
    setState({ ...state, loading: true });
  };

  const onDelete = () => {
    setState({ ...state, deleted: true });
  };

  const onReset = () => {
    setState({
      ...state,
      confirmed: false,
      deleted: false,
      value: "",
    });
  };

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        if (state.value === SECURITY_CODE) {
          onConfirm();
        } else {
          onError();
        }

        console.log("Terminando la validacion");
      }, 1000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
    return (
      <div className="m-12">
        <div className="mb-4">
          <h2 className="text-3xl font-bold mb-1">Eliminar {name}</h2>
          <p>
            Por favor, escribe el codigo de seguridad para comprobar que quieres
            eliminar
          </p>
        </div>

        {state.error && !state.loading && (
          <p className="text-red-400">Error: El codigo es incorrecto</p>
        )}
        {state.loading && <p className="text-green-400">Cargando...</p>}

        <input
          value={state.value}
          onChange={(event) => {
            onWrite(event.target.value);
          }}
          type="text"
          className="border border-gray-200 rounded-md px-1 py-1 mr-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Codigo de Seguridad"
        />
        <button
          className="py-1 px-2 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-500"
          onClick={() => {
            onCheck();
          }}
        >
          Comprobar
        </button>
      </div>
    );
  } else if (!!state.confirmed && !state.deleted) {
    return (
      <React.Fragment>
        <div className="m-12">
          <p className="text-3xl font-bold mb-1">
            Pedimos confirmacion. ¿Tas seguro?
          </p>
          <button
            className="py-1 px-2 rounded-md text-white font-bold bg-red-400 hover:bg-red-500"
            onClick={() => {
              onDelete();
            }}
          >
            Si, eliminar
          </button>
          <button
            className="ml-5 py-1 px-2 rounded-md text-white font-bold bg-gray-400 hover:bg-gray-500"
            onClick={() => {
              onReset();
            }}
          >
            No, arrepenti
          </button>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <div className="m-12">
          <p className="text-3xl font-bold mb-1">Elimado con exito</p>

          <button
            className="ml-5 py-1 px-2 rounded-md text-white font-bold bg-gray-400 hover:bg-gray-500"
            onClick={() => {
              onReset();
            }}
          >
            Resetear, volver atras
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export { UseState };
