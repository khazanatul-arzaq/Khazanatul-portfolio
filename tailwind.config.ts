
import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        /* Main palette */
        meadow: "#6BC658",
        blossom: "#F17585",
        berry: "#AE0947",
        lagoon: "#318192",
        cream: "#E7E8DA",

        /* Supporting colors */
        charcoal: "#26382D",
        ivory: "#FFFFFF",
        muted: "#64736A",

        /* Backward compatibility */
        forest: "#318192",
        sage: "#6BC658",
        olive: "#318192",
        earth: "#AE0947",
        terracotta: "#F17585",
      },

      fontFamily: {
        sans: [
          "var(--font-sans)",
          "system-ui",
          "sans-serif",
        ],
        display: [
          "var(--font-display)",
          "Georgia",
          "serif",
        ],
      },

      boxShadow: {
        soft: "0 12px 35px rgba(38, 56, 45, 0.08)",
        card: "0 20px 45px rgba(49, 129, 146, 0.16)",
      },

      borderRadius: {
        "4xl": "2rem",
      },

      transitionDuration: {
        400: "400ms",
        600: "600ms",
      },
    },
  },

  plugins: [],
} satisfies Config;

export default config;
