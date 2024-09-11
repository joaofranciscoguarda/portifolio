import daisyui from "daisyui";
import tailwindTypography from "@tailwindcss/typography";
import tailwindcssAnimate from "tailwindcss-animate";

import daisyuiColorObj from "daisyui/src/theming/index";
import { light, dark } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        default: ["Manrope", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      display: ["group-hover"],
      typography: () => ({}),
      colors: {},

      border: daisyuiColorObj["base-content"],
      input: daisyuiColorObj["base-content"],
      ring: daisyuiColorObj["base-content"],
      background: daisyuiColorObj["base-100"],
      foreground: daisyuiColorObj["base-content"],
      primary: {
        DEFAULT: daisyuiColorObj["primary"],
        foreground: daisyuiColorObj["primary-content"],
      },
      secondary: {
        DEFAULT: daisyuiColorObj["secondary"],
        foreground: daisyuiColorObj["secondary-content"],
      },
      destructive: {
        DEFAULT: daisyuiColorObj["error"],
        foreground: daisyuiColorObj["error-content"],
      },
      muted: {
        DEFAULT: daisyuiColorObj["base-300"],
        foreground: daisyuiColorObj["base-content"],
      },
      accent: {
        DEFAULT: daisyuiColorObj["accent"],
        foreground: daisyuiColorObj["accent-content"],
      },
      popover: {
        DEFAULT: daisyuiColorObj["base-100"],
        foreground: daisyuiColorObj["base-content"],
      },
      card: {
        DEFAULT: daisyuiColorObj["base-100"],
        foreground: daisyuiColorObj["base-content"],
      },
    },
    borderRadius: {
      lg: "var(--rounded-btn)",
      md: "calc(var(--rounded-btn) - 2px)",
      sm: "calc(var(--rounded-btn) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      "caret-blink": {
        "0%,70%,100%": { opacity: "1" },
        "20%,50%": { opacity: "0" },
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [tailwindTypography(), tailwindcssAnimate, daisyui],

  daisyui: {
    themes: [
      {
        dark: {
          ...dark,
          primary: "#fcbd27",
          "primary-content": "#FFFFFF",
        },
      },
      {
        light: {
          ...light,

          primary: "#fcbd27",
          "primary-content": "#FFFFFF",

          secondary: "#D1D9FF",
          "secondary-content": "#00050d",

          accent: "#EBEDFA",
          "accent-content": "#000000",

          neutral: "#242c35",
          "neutral-content": "#ced0d3",

          "base-100": "#ffffff",
          "base-200": "#F4F6FD",
          "base-300": "#EAEEFF",
          "base-content": "#121616",

          info: "#1F74E4",
          "info-content": "#0D419D",

          success: "#00df1c",
          "success-content": "#001200",

          warning: "#EA434A",
          "warning-content": "#966607",

          error: "#d60003",
          "error-content": "#67091A",
        },
      },
    ],
  },
};
