/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    fontFamily: {
      sans: ["Helvetica", "Arial", "sans-serif"]
    },
    extend: {
      fontSize: {
        "2xs": "0.55rem"
      },
      height: {
        "extra-h": "30rem"
      },
      maxWidth: {
        "w-2xs": "6rem"
      },
      colors: {
        twitterWhite: "#e7e9ea",
        twitterBlue: "#308cd8",
        twitterHoverBlue: "#2a82c2",
        twitterBorder: "#2f3336",
        twitterLightGray: "#71767b",
        twitterGray: "#1e2125",
        twitterDarkGray: "#17181c"
      }
    }
  },
  plugins: []
};
