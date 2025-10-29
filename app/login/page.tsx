import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

//URL DE LA IMAGEN DE CLOUDINARY
const CLOUDINARY_IMAGE_URL = "https://res.cloudinary.com/kops/image/upload/v1761669388/login-det_ij9s6f.png";


export default function RegisterPage() {
  return (
    <div className="grid bg-white h-screen w-full grid-cols-1 font-sans lg:grid-cols-2">
      
      <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
        
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Iniciar Sesion</h1>
          
          <div className="space-y-4 text-gray-700">
            
            <input
              type="email"
              placeholder="Correo Electrónico"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
            />
            
            <input
              type="password"
              placeholder="Contraseña"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-3 text-white font-semibold transition duration-200 hover:bg-blue-700"
            >
              Login
            </button>
          </div>
          
          <div className="my-6 flex items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="mx-4 text-sm text-gray-500">O</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          
          <button
            type="button"
            className="flex text-gray-900 w-full items-center justify-center space-x-2 rounded-lg border border-gray-300 bg-white p-3 font-medium transition duration-200 hover:bg-gray-50"
          >
            <FcGoogle className="h-6 w-6" /> 
            <span>Sign in with Google</span>
          </button>
          
        
          <div className="mt-6  text-gray-900 text-center text-sm">
            <span>¿No tienes una cuenta? </span>
            <Link href="/register" className="font-bold text-blue-600 underline hover:text-blue-800">
              REGISTRATE
            </Link>
          </div>
          
        </div>
      </div>

      {/* Columna Derecha: Imagen */}
      <div className="relative hidden lg:block">
        <Image
          src={CLOUDINARY_IMAGE_URL}
          alt="Imagen de bienvenida a la clínica dental"
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      
    </div>
  );
}
