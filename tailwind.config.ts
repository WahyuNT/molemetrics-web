import type { Config } from "tailwindcss";
import Navbar from "./components/NavbarComp";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#6F66D9",
        dark:"#010014",
        light:"#E6E6F5",
        navbar: "#0F172E",
        sidebar: "#0F172E",
     
      },
    },
  },
  plugins: [],
};
export default config;
