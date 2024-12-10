import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  darkMode: "selector",
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: { sans: ["Poppins", "sans-serif"] },
      borderRadius: {
        none: "0",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "20px",
        "3xl": "28px",
      },
      colors: {
        current: "#00546d",
        currentDark: colors.blue[500],
        yellow: "#dcd525",
        error: "#FF2C2C",
        alert: colors.orange[500],
        success: "#24bc82",
        primary: colors.black,
        surface: colors.white,
        secondary: colors.zinc[500],
        tertiary: colors.zinc[300],
        quaternary: colors.zinc[200],
        background: colors.zinc[100],
      },
    },
  },
};

export default config;
