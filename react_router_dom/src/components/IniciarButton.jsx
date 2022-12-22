function IniciarButton() {
  return (
    <div className="mb-4 space-x-8 flex ">
      <button
        className="bg-blue-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
        type="button"
      >
        <p>Iniciar Sesión </p>
      </button>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline  "
        type="button"
      >
        <p>Registrarse </p>
      </button>
    </div>
  );
}

export default IniciarButton;
