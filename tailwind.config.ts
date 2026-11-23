import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        emerald: { 950: "#06281F", 900: "#0B3D2E", 700: "#0F5B45", 100: "#E3F0EA" },
        gold: { DEFAULT: "#DAA341", 600: "#A8861C" },
        cream: "#FBF8F2",
        sand: "#EFE6D4",
        ink: { DEFAULT: "#1C2B26", 500: "#5B6B64" },
      },
      fontFamily: { display: ["var(--font-fraunces)", "serif"], sans: ["var(--font-jakarta)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
