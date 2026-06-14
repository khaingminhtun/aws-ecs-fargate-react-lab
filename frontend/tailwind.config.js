/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#0d1117",
        surface: "#161b22",
        border: "rgba(48,54,61,0.8)",
        accent: "#00ff88",
        amber: "#f5a623",
        code: "#58a6ff",
        text: "#e6edf3",
        muted: "#8b949e",
      },
      fontFamily: {
        sans: ["Sora", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
}
