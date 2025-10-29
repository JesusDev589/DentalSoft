import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen flex">
      {/* Columna izquierda */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-10 bg-white">
        <h1 className="text-4xl font-bold mb-8 text-gray-800">Regístrate</h1>

        <form className="w-full max-w-sm space-y-5">
          <input type="text" placeholder="Nombre" className="w-full px-4 py-3 border rounded-lg" />
          <input type="email" placeholder="Correo" className="w-full px-4 py-3 border rounded-lg" />
          <input type="password" placeholder="Contraseña" className="w-full px-4 py-3 border rounded-lg" />

          <button className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg">
            Registrarse
          </button>
        </form>

        <div className="flex items-center my-6 w-full max-w-sm">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 font-medium">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <button className="w-full max-w-sm flex items-center justify-center gap-3 border border-gray-400 py-3 rounded-lg hover:bg-gray-100 transition">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-6 h-6"
          />
          <span className="text-gray-700 font-medium">Sign in with Google</span>
        </button>

        <p className="mt-6 text-gray-600">
          ¿Tienes una cuenta?{" "}
          <a href="/login" className="font-bold underline text-blue-600 hover:text-blue-800">
            INICIA SESIÓN
          </a>
        </p>
      </div>

      {/* Columna derecha */}
      <div className="hidden md:flex w-1/2">
        <img
          src="https://images.unsplash.com/photo-1598257006626-48b0c252070d?auto=format&fit=crop&w=800&q=80"
          alt="Clínica Dental"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
