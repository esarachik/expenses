import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // background: "var(--background)",
        // foreground: "var(--foreground)",
        // "dark-purple":"var(--dark-purple)",
        // "dark-grey":"var(--dark-grey)",
        // "light-white":"var(--light-white)"
        // primary: "var(--color-primary)",
        // secondary: "var(--color-secondary)",
        // background: "var(--color-background)",
        // text: "var(--color-text)",
        light: {
          background: "#F8FAFC", // Azul muy claro casi blanco
          navbarBackground: "#B7D3ED", // Azul negro profundo
          foreground: "#1E293B", // Azul oscuro para textos
          primary: "#3B82F6", // Azul vibrante
          secondary: "#64748B", // Gris azulado suave
          accent: "#0EA5E9", // Azul cian
          border: "#CBD5E1", // Borde gris claro
        },
        dark: {
          background: "#0F172A", // Azul negro profundo
          navbarBackground: "#8093A5", // Azul negro profundo
          foreground: "#E2E8F0", // Texto gris claro
          primary: "#2563EB", // Azul medio vibrante
          secondary: "#334155", // Gris oscuro azulado
          accent: "#0284C7", // Azul cian oscuro
          border: "#1E293B", // Bordes oscuros
        },
      },
    },
  },
  plugins: [],
} satisfies Config;