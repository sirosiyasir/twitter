/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3xl": "-4px 6px 32px -7px rgba(0, 0, 0, 0.3)",
      },
    },
  },
  plugins: [require("daisyui")],
}
