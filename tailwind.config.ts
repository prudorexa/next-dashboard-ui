import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lammaSky: "#C3EBFA",
        lammaSkyLight: "#EDF9FD",
        lammaPurple: "#CFCEFF",
        lammaPurpleLight: "#F1F0FF",
        lammaYellow: "#FAE27C",
        lammaYellowLight: "#F7F5E5",
      }
    },
  },
  plugins: [],
};
export default config;
