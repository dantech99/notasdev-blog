import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          foreground: '#fff', // White for foreground text
          backgroundStart: '#0E1629', // Dark blue for background start
          backgroundEnd: '#000407', // Even darker blue for background end
        },
        
      },
    },
  },
  plugins: [],
};
export default config;
