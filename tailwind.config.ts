import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'inner': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        'innershadow': 'inset rgba(60, 70, 85, 0.5) 0px 0px 40px 0px, inset rgba(60, 70, 85, 0.5) 0px 0px 40px 0px, inset rgba(0, 0, 0, 1) 0px 0px 36px -24px',
        '3dshadow': "1px 2px 4px 0px rgba(0,0,0,0.25), inset 0 -3px 7px 0px rgba(0,0,0,0.30)",
      },
    },
  },
  plugins: [],
};

export default config;
