/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        // ⚠️ CORRECCIÓN CLAVE: Debes incluir la ruta específica de entrega de Cloudinary
        pathname: '/kops/image/upload/**', 
      },
    ],
  },
  // ... cualquier otra configuración
};

module.exports = nextConfig;