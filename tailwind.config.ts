import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#13111a",
      secondary: "#e4e1f6",
      borderColor: "#302c3f",
      textColor: "#fff",
      contrastColor: "#ff4980",
    },
    extend: {
      backgroundImage: {
        gradientColor: "linear-gradient(270deg, #4f56ff, #ff4980)",
      },
    },
  },
  plugins: [],
};
export default config;
