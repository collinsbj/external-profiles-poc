/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "background-primary": "var(--background-primary)",
        "background-secondary": "var(--background-secondary)",
        "background-primary-text-accent":
          "var(--background-primary-text-accent)",
        "background-secondary-text-accent":
          "var(--background-secondary-text-accent)",
      },
    },
  },
  plugins: [],
}
