import React from "react";

function UseState({ name }) {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        setLoading(false);

        console.log("Terminando la validacion");
      }, 1000);
    }

    console.log("Terminando el efecto");
  }, [loading]);

  return (
    <div className="m-12">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-1">Eliminar {name}</h2>
        <p>
          Por favor, escribe el codigo de seguridad para comprobar que quieres
          eliminar
        </p>
      </div>

      {error && <p className="text-red-400">Error: El codigo es incorrecto</p>}
      {loading && <p className="text-green-400">Cargando...</p>}

      <input
        type="text"
        className="border border-gray-200 rounded-md px-1 py-1 mr-2 outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Codigo de Seguridad"
      />
      <button
        className="py-1 px-2 rounded-md text-white font-bold bg-blue-400 hover:bg-blue-500"
        onClick={() => setLoading(true)}
      >
        Comprobar
      </button>
    </div>
  );
}

export { UseState };
