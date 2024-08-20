import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["var(--font-primary)"],
      },
    },
  },
  plugins: [],
};
export default config;
