/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
  pwa: {
    dest: "public",
    // disable: process.env.NODE_ENV === "development",
    runtimeCaching,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },

  env: {
    GMAIL_USER: "servicio.notificaciones.compras@gmail.com",

    LOCAL_URL: "https://simpleshop-sand.vercel.app/",
  },
});
