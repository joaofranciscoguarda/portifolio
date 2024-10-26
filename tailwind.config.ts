import tailwindcssAnimate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class", '[data-kb-theme="dark"]'],
    content: ["src/**/*.{ts,tsx}", "src/**/*.{ts,tsx}", "src/**/*.{html,css}"],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1440px",
            },
        },

        extend: {
            fontFamily: {
                manrope: ["Manrope", "sans-serif"],
                default: ["Manrope", "sans-serif"],
                bebas: ["Bebas Neue", "sans-serif"],
            },
            colors: {
                border: "hsl(var(--border))",
                input: "hsl(var(--input))",
                ring: "hsl(var(--ring))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                primary: {
                    DEFAULT: "hsl(var(--primary))",
                    foreground: "hsl(var(--primary-foreground))",
                },
                secondary: {
                    DEFAULT: "hsl(var(--secondary))",
                    foreground: "hsl(var(--secondary-foreground))",
                },
                destructive: {
                    DEFAULT: "hsl(var(--destructive))",
                    foreground: "hsl(var(--destructive-foreground))",
                },
                muted: {
                    DEFAULT: "hsl(var(--muted))",
                    foreground: "hsl(var(--muted-foreground))",
                },
                accent: {
                    DEFAULT: "hsl(var(--accent))",
                    foreground: "hsl(var(--accent-foreground))",
                },
                popover: {
                    DEFAULT: "hsl(var(--popover))",
                    foreground: "hsl(var(--popover-foreground))",
                },
                card: {
                    DEFAULT: "hsl(var(--card))",
                    foreground: "hsl(var(--card-foreground))",
                },

                grey: {
                    DEFAULT: "hsl(var(--grey-600))",
                    100: "hsl(var(--grey-100))",
                    200: "hsl(var(--grey-200))",
                    300: "hsl(var(--grey-300))",
                    400: "hsl(var(--grey-400))",
                    500: "hsl(var(--grey-500))",
                    600: "hsl(var(--grey-600))",
                    700: "hsl(var(--grey-700))",
                    800: "hsl(var(--grey-800))",
                    900: "hsl(var(--grey-900))",
                },

                yellow: {
                    DEFAULT: "hsl(var(--yellow-500))",
                    400: "hsl(var(--yellow-400))",
                    500: "hsl(var(--yellow-500))",
                    600: "hsl(var(--yellow-600))",
                    700: "hsl(var(--yellow-700))",
                    800: "hsl(var(--yellow-800))",
                    900: "hsl(var(--yellow-900))",
                },
            },
            borderRadius: {
                lg: "var(--radius)",
                md: "calc(var(--radius) - 2px)",
                sm: "calc(var(--radius) - 4px)",
            },
            keyframes: {
                "accordion-down": {
                    from: { height: 0 },
                    to: { height: "var(--kb-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--kb-accordion-content-height)" },
                    to: { height: 0 },
                },
                "collapsible-down": {
                    from: { height: 0 },
                    to: { height: "var(--kb-collapsible-content-height)" },
                },
                "collapsible-up": {
                    from: { height: "var(--kb-collapsible-content-height)" },
                    to: { height: 0 },
                },
                "caret-blink": {
                    "0%,70%,100%": { opacity: "1" },
                    "20%,50%": { opacity: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
                "collapsible-down": "collapsible-down 0.2s ease-out",
                "collapsible-up": "collapsible-up 0.2s ease-out",
                "caret-blink": "caret-blink 1.25s ease-out infinite",
            },
        },
    },
    plugins: [tailwindcssAnimate],
};
