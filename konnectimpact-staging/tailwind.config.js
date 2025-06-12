// tailwind.config.js (ESM version)
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00897B",  // Teal
        accent: "#CDDC39",   // Lime
        light: "#F5F5F5",    // Light Gray
        white: "#FFFFFF",
          impactGreen: 'var(--impact-green)',
        trustBlue: 'var(--trust-blue)',
        charcoalText: 'var(--charcoal-text)',
        accentYellow: 'var(--accent-yellow)',
        cardBg: 'var(--card-bg)',
      },
      fontFamily: {
        head: ["Montserrat", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        ghost: "inset 0 0 0 1px #00897B",
         custom: 'var(--shadow)',
      },
      keyframes: {
        progress: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        progress: "progress 2s ease-in-out",
      },
    },
  },
  plugins: [],
};
