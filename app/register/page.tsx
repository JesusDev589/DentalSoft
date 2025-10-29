'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/navigation';

//URL DE LA IMAGEN DE CLOUDINARY
const CLOUDINARY_IMAGE_URL = "https://res.cloudinary.com/kops/image/upload/v1761669388/login-det_ij9s6f.png";


export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    correo: '',
    contrasena: '',
    contrasenaConfirm: '', // <-- añadido
    dni: '',
    fechaNacimiento: '',
    telefono: '',
    direccion: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validación de contraseña
    if (!formData.contrasena || formData.contrasena.length < 6) {
      alert('La contraseña debe tener al menos 6 caracteres');
      return;
    }
    if (formData.contrasena !== formData.contrasenaConfirm) {
      alert('Las contraseñas no coinciden');
      return;
    }

    try {
      const pacienteData = {
        id: 0,
        usuario: {
          id: 0,
          correo: formData.correo,
          nombre: formData.nombres,
          apellidos: formData.apellidos,
          dni: formData.dni,
          fechaNacimiento: formData.fechaNacimiento,
          telefono: formData.telefono,
          rol: "PACIENTE",
          direccion: formData.direccion,
          nombreImagen: null,
          contrasena: formData.contrasena // <-- usar contraseña ingresada
        },
        plan: null
      };

      const response = await fetch('http://localhost:8081/pacientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(pacienteData)
      });

      const responseData = await response.text();
      console.log('Respuesta del servidor:', responseData);

      if (response.ok) {
        alert('¡Registro exitoso! Serás redirigido a la página de inicio de sesión.');
        router.push('/login');
      } else {
        try {
          const errorData = JSON.parse(responseData);
          alert(`Error en el registro: ${errorData.message || 'Verifica los datos ingresados'}`);
        } catch {
          alert(`Error en el registro: ${responseData || 'Error desconocido'}`);
        }
      }
    } catch (error) {
      console.error('Error detallado:', error);
      alert('Error de conexión: Por favor, verifica tu conexión e intenta nuevamente');
    }
  };

  return (
    <div className="grid bg-white h-screen w-full grid-cols-1 font-sans lg:grid-cols-2">
      
      {/* Columna Derecha: Imagen */}
      <div className="relative hidden lg:block">
        <Image
          src={CLOUDINARY_IMAGE_URL}
          alt="Imagen de bienvenida a la clínica dental"
          fill={true}
          className="object-cover"
          priority
        />
      </div>
      <div className="flex flex-col items-center justify-center p-8 md:p-12 lg:p-16">
        
        <div className="w-full max-w-sm">
          <h1 className="mb-8 text-3xl font-bold text-gray-900">Regístrate</h1>
          
          <form onSubmit={handleSubmit} className="space-y-4 text-gray-700">
            <input
              type="text"
              name="nombres"
              value={formData.nombres}
              onChange={handleChange}
              placeholder="Nombres"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />
            
            <input
              type="text"
              name="apellidos"
              value={formData.apellidos}
              onChange={handleChange}
              placeholder="Apellidos"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <input
              type="email"
              name="correo"
              value={formData.correo}
              onChange={handleChange}
              placeholder="Correo Electrónico"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              placeholder="DNI"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <input
              type="date"
              name="fechaNacimiento"
              value={formData.fechaNacimiento}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <input
              type="tel"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="Teléfono"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            <input
              type="text"
              name="direccion"
              value={formData.direccion}
              onChange={handleChange}
              placeholder="Dirección"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
            />

            {/* contraseña */}
            <input
              type="password"
              name="contrasena"
              value={formData.contrasena}
              onChange={handleChange}
              placeholder="Contraseña (mín. 6 caracteres)"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
              minLength={6}
            />

            {/* confirmar contraseña */}
            <input
              type="password"
              name="contrasenaConfirm"
              value={formData.contrasenaConfirm}
              onChange={handleChange}
              placeholder="Confirmar contraseña"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-blue-500"
              required
              minLength={6}
            />

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-600 p-3 text-white font-semibold transition duration-200 hover:bg-blue-700"
            >
              Registrarse
            </button>
          </form>
          
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
            <span>¿Ya tienes una cuenta? </span>
            <Link href="/login" className="font-bold text-blue-600 underline hover:text-blue-800">
              INICIA SESIÓN
            </Link>
          </div>
          
        </div>
      </div>


      
    </div>
  );
}
