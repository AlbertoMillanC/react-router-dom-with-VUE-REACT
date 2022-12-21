
export default function Login() {
  return (
    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
      Nombre de usuario
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="username"
      type="text"
      placeholder="Nombre de usuario"
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
      Contraseña
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="password"
      type="password"
      placeholder="Contraseña"
    />
  </div>
  <div className="mb-4">
    <input
      className="mr-2 leading-tight"
      type="checkbox"
      id="remember"
    />
    <label className="text-sm" htmlFor="remember">
      Recordar sesión
    </label>
  </div>
  <div className="mb-4">
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Iniciar sesión
    </button>
    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
      ¿Olvidaste tu contraseña?
    </a>
  </div>
</form>

  )
}
