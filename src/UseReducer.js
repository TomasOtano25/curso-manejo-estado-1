import React from "react";

const SECURITY_CODE = "paradigma";

function UseReducer({ name }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        if (state.value === SECURITY_CODE) {
          //   onConfirm();
          dispatch({ type: "CONFIRM" });
        } else {
          dispatch({ type: "ERROR" });
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
            dispatch({ type: "WRITE", payload: event.target.value });
            // dispatch({ type: "WRITE", payload: { inputValue: "Valor" } });
            // onWrite(event.target.value);
          }}
          type="text"
          className="border border-gray-200 rounded-md px-1 py-1 mr-2 outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Codigo de Seguridad"
        />
        <button
          className="py-1 px-2 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-500"
          onClick={() => {
            dispatch({ type: "CHECK" });
            // onCheck();
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
              dispatch({ type: "DELETE" });
              //   onDelete();
            }}
          >
            Si, eliminar
          </button>
          <button
            className="ml-5 py-1 px-2 rounded-md text-white font-bold bg-gray-400 hover:bg-gray-500"
            onClick={() => {
              dispatch({ type: "RESET" });
              //   onReset();
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
              dispatch({ type: "RESET" });
              //   onReset();
            }}
          >
            Resetear, volver atras
          </button>
        </div>
      </React.Fragment>
    );
  }
}

// Estado compuesto inicial
const initialState = {
  value: "paradigma",
  error: false,
  loading: false,
  deleted: false,
  confirmed: false,
};

// action.type
// action.payload
// const reducer = (state, action) => {};

// Usando los condicionales if
// const reducerIF = (state, action) => {
//   if (action.type === "ERROR") {
//     return {
//       ...state,
//       error: true,
//       loading: false,
//     };
//   } else if (action.type === "CHECK") {
//     return {
//       ...state,
//       loading: true,
//     };
//   } else if (action.type === "CONFIRM") {
//     return {
//       ...state,
//       loading: false,
//       error: false,
//       confirmed: true,
//     };
//   } else if (action.type === "WRITE") {
//     return {
//       ...state,
//       value: action.payload,
//     };
//   } else if (action.type === "DELETE") {
//     return {
//       ...state,
//       deleted: true,
//     };
//   } else if (action.type === "RESET") {
//     return {
//       ...state,
//       confirmed: false,
//       deleted: false,
//       value: "",
//     };
//   } else {
//     return { ...state };
//   }
// };

// // La forma mas popular
// // Usando la condicional switch
// const reducerSwitch = (state, action) => {
//   switch (action.type) {
//     case "ERROR":
//       return {
//         ...state,
//         error: true,
//         loading: false,
//       };
//     case "CHECK":
//       return {
//         ...state,
//         loading: true,
//       };
//     default:
//       return { ...state };
//   }
// };

const reducerObject = (state, payload) => ({
  ERROR: {
    ...state,
    error: true,
    loading: false,
  },
  CHECK: {
    ...state,
    loading: true,
  },
  CONFIRM: {
    ...state,
    loading: false,
    error: false,
    confirmed: true,
  },
  DELETE: {
    ...state,
    deleted: true,
  },
  RESET: {
    ...state,
    confirmed: false,
    deleted: false,
    value: "",
  },
  WRITE: {
    ...state,
    value: payload,
  },
});

const reducer = (state, action) => {
  if (!!reducerObject(state)[action.type]) {
    return reducerObject(state, action.payload)[action.type];
  } else {
    return state;
  }
};

export { UseReducer };
