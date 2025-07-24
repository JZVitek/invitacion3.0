/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Opcional, útil para detectar errores
  eslint: {
    ignoreDuringBuilds: true, // Evita que ESLint bloquee el deploy
  },
  images: {
    unoptimized: true, // Render no ofrece optimización de imágenes
  },
};

module.exports = nextConfig;