import type { Config } from "tailwindcss";
import Navbar from "./components/NavbarComp";
import { match } from "assert";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#F1BB1C",
        primaryEnd:"#FF8D01",
        background:"#0B111E",
        dark:"#010014",
        light:"#E6E6F5",
        navbar: "#0F172E",
        sidebar: "#0F172E",
        selectFill: "#1C2A51",
        match : "#1E2E5A",
        matchFill : "#1A2541",
        blueSecondary: "#1C2A51",
        blueThird: "#1A2541",
        tableEven: "#1A2440",
        tableOdd: "#1E2E5A",
        table: "#1A2440",
     
      },
    },
  },
  plugins: [
  ],
};
export default config;
